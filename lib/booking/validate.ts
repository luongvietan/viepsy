import type { BookingFormData, BookingFormErrors } from "@/lib/booking/types";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[\d\s+()-]{8,20}$/;

export function validateBookingForm(
  data: BookingFormData,
): BookingFormErrors | null {
  const errors: BookingFormErrors = {};

  const name = data.name.trim();
  if (!name) {
    errors.name = "Vui lòng nhập họ và tên.";
  } else if (name.length < 2) {
    errors.name = "Họ và tên quá ngắn.";
  }

  const email = data.email.trim();
  if (!email) {
    errors.email = "Vui lòng nhập email.";
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = "Email không hợp lệ.";
  }

  const phone = data.phone.trim();
  if (!phone) {
    errors.phone = "Vui lòng nhập số điện thoại.";
  } else if (!PHONE_PATTERN.test(phone)) {
    errors.phone = "Số điện thoại không hợp lệ.";
  }

  if (!data.serviceId) {
    errors.serviceId = "Vui lòng chọn gói dịch vụ.";
  }

  if (!data.preferredDate) {
    errors.preferredDate = "Vui lòng chọn ngày mong muốn.";
  } else {
    const selected = new Date(`${data.preferredDate}T00:00:00`);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (Number.isNaN(selected.getTime())) {
      errors.preferredDate = "Ngày không hợp lệ.";
    } else if (selected < today) {
      errors.preferredDate = "Ngày mong muốn phải từ hôm nay trở đi.";
    }
  }

  if (!data.preferredTime) {
    errors.preferredTime = "Vui lòng chọn khung giờ.";
  }

  if (data.message.trim().length > 1000) {
    errors.message = "Ghi chú không được quá 1000 ký tự.";
  }

  return Object.keys(errors).length > 0 ? errors : null;
}
