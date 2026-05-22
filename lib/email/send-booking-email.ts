import type { BookingFormData } from "@/lib/booking/types";
import {
  getBookingFromEmail,
  getBookingToEmail,
  getResendClient,
} from "@/lib/email/resend";

type SendBookingEmailInput = BookingFormData & {
  serviceTitle: string;
};

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildBookingEmailHtml(data: SendBookingEmailInput): string {
  const rows = [
    ["Họ và tên", data.name],
    ["Email", data.email],
    ["Số điện thoại", data.phone],
    ["Gói dịch vụ", data.serviceTitle],
    ["Ngày mong muốn", data.preferredDate],
    ["Khung giờ", data.preferredTime],
    ["Ghi chú", data.message.trim() || "—"],
  ];

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #e5ddd3;font-weight:600;">${escapeHtml(label)}</td><td style="padding:8px 12px;border:1px solid #e5ddd3;">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  return `
    <div style="font-family:system-ui,sans-serif;color:#2c2419;line-height:1.5;">
      <h2 style="margin:0 0 16px;font-size:20px;">Yêu cầu đặt lịch mới — Viepsy</h2>
      <p style="margin:0 0 16px;">Có khách hàng gửi form đặt lịch từ website.</p>
      <table style="border-collapse:collapse;width:100%;max-width:560px;">${tableRows}</table>
    </div>
  `.trim();
}

export async function sendBookingEmail(data: SendBookingEmailInput) {
  const resend = getResendClient();

  const result = await resend.emails.send({
    from: getBookingFromEmail(),
    to: getBookingToEmail(),
    replyTo: data.email,
    subject: `[Viepsy] Đặt lịch — ${data.name}`,
    html: buildBookingEmailHtml(data),
  });

  if (result.error) {
    throw new Error(result.error.message);
  }

  return result;
}
