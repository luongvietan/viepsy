export const routes = {
  home: "/",
  /** Khối giới thiệu thương hiệu trên trang chủ */
  about: "/#ve-viepsy",
  /** Legacy — redirect về trang chủ */
  brand: "/thuong-hieu",
  /** Khối dịch vụ trên trang chủ */
  services: "/#dich-vu",
  /** Khối phản hồi trên trang chủ */
  feedback: "/#phan-hoi",
  /** Khối đặt lịch trên trang chủ */
  book: "/#dat-lich",
  faq: "/#faq",
  process: "/#quy-trinh",
} as const;

export type AppRoute = (typeof routes)[keyof typeof routes];
