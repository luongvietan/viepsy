export type BookingFormData = {
  name: string;
  email: string;
  phone: string;
  serviceId: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
};

export type BookingFormErrors = Partial<Record<keyof BookingFormData, string>>;

export type BookingApiResponse =
  | { ok: true; message: string }
  | { ok: false; message: string; errors?: BookingFormErrors };
