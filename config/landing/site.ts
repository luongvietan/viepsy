const CONTACT_PHONE = "0985015926";
const ZALO_URL = `https://zalo.me/${CONTACT_PHONE}`;

export const siteConfig = {
  name: "VIEPSY",
  tagline: "Nơi bạn có thể nói ra điều đang giữ trong lòng — được lắng nghe, không bị phán xét.",
  description:
    "Viepsy là không gian chăm sóc sức khỏe tinh thần gần gũi: lắng nghe tích cực, định hướng cá nhân hóa và tham vấn chuyên sâu — phù hợp từng người, từng nhịp sống.",
  motto: "Cảm, rồi hiểu!",
  contact: {
    email: "camroihieu@viepsy.vn",
    phone: CONTACT_PHONE,
    location: "Online Service (Vietnam)",
    hours: "Thứ 2 – Chủ nhật (theo lịch đặt hẹn)",
    zalo: ZALO_URL,
    facebook: "",
  },
  social: [{ label: "Zalo", href: ZALO_URL }],
} as const;
