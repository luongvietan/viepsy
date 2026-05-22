import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VIEPSY — Sức khỏe tinh thần",
  description:
    "Viepsy hỗ trợ chăm sóc sức khỏe tinh thần thông qua Lắng nghe tích cực, Định hướng cá nhân hóa và Tham vấn chuyên sâu.",
  openGraph: {
    title: "VIEPSY — Sức khỏe tinh thần",
    description:
      "Nơi mà bạn thoải mái nói ra tâm trí của mình, với sự đồng hành của Viepsy.",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
