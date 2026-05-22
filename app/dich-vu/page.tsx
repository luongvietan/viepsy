"use client";

import { useEffect } from "react";
import { routes } from "@/config/landing/routes";

/** Legacy URL — chuyển về khối dịch vụ trên trang chủ */
export default function ServicesRedirectPage() {
  useEffect(() => {
    window.location.replace(routes.services);
  }, []);

  return (
    <p className="px-6 py-24 text-center text-body-sm opacity-70">
      Đang chuyển về trang chủ…
    </p>
  );
}
