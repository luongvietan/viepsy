import { NextResponse } from "next/server";
import { services } from "@/data/landing/services";
import { validateBookingForm } from "@/lib/booking/validate";
import type { BookingApiResponse, BookingFormData } from "@/lib/booking/types";
import { sendBookingEmail } from "@/lib/email/send-booking-email";

function parseBookingBody(body: unknown): BookingFormData | null {
  if (!body || typeof body !== "object") return null;

  const record = body as Record<string, unknown>;

  return {
    name: typeof record.name === "string" ? record.name : "",
    email: typeof record.email === "string" ? record.email : "",
    phone: typeof record.phone === "string" ? record.phone : "",
    serviceId: typeof record.serviceId === "string" ? record.serviceId : "",
    preferredDate:
      typeof record.preferredDate === "string" ? record.preferredDate : "",
    preferredTime:
      typeof record.preferredTime === "string" ? record.preferredTime : "",
    message: typeof record.message === "string" ? record.message : "",
  };
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json<BookingApiResponse>(
      { ok: false, message: "Dữ liệu gửi lên không hợp lệ." },
      { status: 400 },
    );
  }

  const data = parseBookingBody(body);
  if (!data) {
    return NextResponse.json<BookingApiResponse>(
      { ok: false, message: "Dữ liệu gửi lên không hợp lệ." },
      { status: 400 },
    );
  }

  const errors = validateBookingForm(data);
  if (errors) {
    return NextResponse.json<BookingApiResponse>(
      {
        ok: false,
        message: "Vui lòng kiểm tra lại thông tin.",
        errors,
      },
      { status: 422 },
    );
  }

  const service = services.find((item) => item.id === data.serviceId);
  if (!service) {
    return NextResponse.json<BookingApiResponse>(
      {
        ok: false,
        message: "Gói dịch vụ không hợp lệ.",
        errors: { serviceId: "Gói dịch vụ không hợp lệ." },
      },
      { status: 422 },
    );
  }

  try {
    await sendBookingEmail({
      ...data,
      name: data.name.trim(),
      email: data.email.trim(),
      phone: data.phone.trim(),
      message: data.message.trim(),
      serviceTitle: service.title,
    });
  } catch (error) {
    console.error("[booking] send email failed:", error);
    return NextResponse.json<BookingApiResponse>(
      {
        ok: false,
        message:
          "Không gửi được yêu cầu. Vui lòng thử lại sau hoặc liên hệ trực tiếp qua Zalo.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json<BookingApiResponse>({
    ok: true,
    message:
      "Đã gửi yêu cầu đặt lịch. Viepsy sẽ phản hồi qua email hoặc điện thoại sớm nhất.",
  });
}
