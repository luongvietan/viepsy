"use client";

import { useMemo, useState } from "react";
import { services } from "@/data/landing/services";
import { bookingCopy } from "@/config/landing/booking-copy";
import { contactLinks } from "@/config/landing/contact-links";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";
import type { BookingFormData, BookingFormErrors } from "@/lib/booking/types";

const TIME_SLOTS = [
  { value: "08:00-10:00", label: "Sáng (8:00 – 10:00)" },
  { value: "10:00-12:00", label: "Sáng (10:00 – 12:00)" },
  { value: "13:00-15:00", label: "Chiều (13:00 – 15:00)" },
  { value: "15:00-17:00", label: "Chiều (15:00 – 17:00)" },
  { value: "18:00-20:00", label: "Tối (18:00 – 20:00)" },
  { value: "linh-hoat", label: "Linh hoạt — Viepsy sẽ liên hệ xác nhận" },
] as const;

const initialForm: BookingFormData = {
  name: "",
  email: "",
  phone: "",
  serviceId: "",
  preferredDate: "",
  preferredTime: "",
  message: "",
};

const fieldClassName =
  "w-full rounded-2xl border border-viepsy-hairline bg-viepsy-canvas px-4 py-3 text-body-sm text-viepsy-ink outline-none transition-[border-color,box-shadow] placeholder:text-viepsy-ink/45 focus:border-viepsy-accent-sage focus:ring-2 focus:ring-viepsy-accent-sage/20";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-1.5 text-body-sm text-viepsy-accent-warm" role="alert">
      {message}
    </p>
  );
}

function FormField({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-body-sm font-[480]">
        {label}
        {required ? <span className="text-viepsy-accent-warm"> *</span> : null}
      </label>
      {children}
      <FieldError message={error} />
    </div>
  );
}

export function BookingForm() {
  const [form, setForm] = useState<BookingFormData>(initialForm);
  const [errors, setErrors] = useState<BookingFormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [feedback, setFeedback] = useState("");

  const minDate = useMemo(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }, []);

  const updateField = <K extends keyof BookingFormData>(
    key: K,
    value: BookingFormData[K],
  ) => {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        setErrors(result.errors ?? {});
        setStatus("error");
        setFeedback(
          result.message ??
            "Không gửi được yêu cầu. Vui lòng thử lại sau.",
        );
        return;
      }

      setForm(initialForm);
      setErrors({});
      setStatus("success");
      setFeedback(result.message);
    } catch {
      setStatus("error");
      setFeedback(
        "Không kết nối được máy chủ. Vui lòng thử lại sau hoặc liên hệ qua Zalo.",
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-[2rem] border border-viepsy-hairline bg-viepsy-surface-soft/40 p-6 md:p-10"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormField id="name" label="Họ và tên" required error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className={fieldClassName}
            placeholder="Nguyễn Văn A"
          />
        </FormField>

        <FormField id="phone" label="Số điện thoại" required error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className={fieldClassName}
            placeholder="0985 015 926"
          />
        </FormField>

        <FormField id="email" label="Email" required error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className={fieldClassName}
            placeholder="ban@email.com"
          />
        </FormField>

        <FormField
          id="serviceId"
          label="Gói dịch vụ"
          required
          error={errors.serviceId}
        >
          <select
            id="serviceId"
            name="serviceId"
            value={form.serviceId}
            onChange={(event) => updateField("serviceId", event.target.value)}
            className={cn(fieldClassName, "appearance-none")}
          >
            <option value="">Chọn gói phù hợp</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.title} — {service.duration}
              </option>
            ))}
          </select>
        </FormField>

        <FormField
          id="preferredDate"
          label="Ngày mong muốn"
          required
          error={errors.preferredDate}
        >
          <input
            id="preferredDate"
            name="preferredDate"
            type="date"
            min={minDate}
            value={form.preferredDate}
            onChange={(event) =>
              updateField("preferredDate", event.target.value)
            }
            className={fieldClassName}
          />
        </FormField>

        <FormField
          id="preferredTime"
          label="Khung giờ"
          required
          error={errors.preferredTime}
        >
          <select
            id="preferredTime"
            name="preferredTime"
            value={form.preferredTime}
            onChange={(event) =>
              updateField("preferredTime", event.target.value)
            }
            className={cn(fieldClassName, "appearance-none")}
          >
            <option value="">Chọn khung giờ</option>
            {TIME_SLOTS.map((slot) => (
              <option key={slot.value} value={slot.value}>
                {slot.label}
              </option>
            ))}
          </select>
        </FormField>

        <div className="md:col-span-2">
          <FormField id="message" label="Ghi chú thêm" error={errors.message}>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              className={cn(fieldClassName, "resize-y min-h-28")}
              placeholder="Chia sẻ thêm về nhu cầu hoặc thời gian thuận tiện của bạn (không bắt buộc)."
            />
          </FormField>
        </div>
      </div>

      {feedback ? (
        <div
          role="status"
          className={cn(
            "mt-6 rounded-2xl border px-4 py-3 text-body-sm",
            status === "success"
              ? "border-viepsy-accent-sage/40 bg-viepsy-block-mint/60 text-viepsy-ink"
              : "border-viepsy-accent-warm/40 bg-viepsy-block-pink/70 text-viepsy-ink",
          )}
        >
          {feedback}
        </div>
      ) : null}

      <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          variant="primary"
          className={cn(
            "min-w-44 bg-viepsy-accent-sage px-8 py-3 text-viepsy-inverse-ink hover:bg-viepsy-accent-sage/90",
            status === "submitting" && "pointer-events-none opacity-70",
          )}
        >
          {status === "submitting" ? "Đang gửi…" : "Gửi yêu cầu đặt lịch"}
        </Button>
        <p className="text-body-sm opacity-75">{bookingCopy.hint}</p>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-body-sm opacity-80">
        <span>Hoặc liên hệ trực tiếp:</span>
        <a
          href={contactLinks.zalo}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:opacity-70"
        >
          Zalo
        </a>
        <span aria-hidden>·</span>
        <a
          href={contactLinks.phone}
          className="underline underline-offset-4 hover:opacity-70"
        >
          {bookingCopy.secondaryPhone}
        </a>
      </div>
    </form>
  );
}
