export type ShopProduct = {
  id: string;
  name: string;
  description: string;
  price?: string;
  status: "available" | "coming_soon";
  href?: string;
};

/** Sản phẩm phụ — cập nhật giá/link khi bắt đầu bán */
export const shopProducts: ShopProduct[] = [
  {
    id: "journal",
    name: "Sổ ghi cảm xúc",
    description: "Ghi chép nhẹ nhàng sau mỗi phiên — hỗ trợ nhìn lại cảm xúc hằng ngày.",
    status: "coming_soon",
  },
  {
    id: "relax-kit",
    name: "Bộ thư giãn Viepsy",
    description: "Tài liệu và gợi ý thực hành ngắn để tự chăm sóc tinh thần tại nhà.",
    status: "coming_soon",
  },
  {
    id: "companion",
    name: "Gói đồng hành bổ sung",
    description: "Tài nguyên bổ trợ sau phiên tư vấn — cập nhật theo từng giai đoạn.",
    status: "coming_soon",
  },
];
