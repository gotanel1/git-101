import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "คณะเทคโนโลยีสารสนเทศ | มหาวิทยาลัยราชภัฏเพชรบุรี (PBRU IT)",
  description: "เปิดรับสมัครนักศึกษาใหม่ คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยราชภัฏเพชรบุรี หลักสูตรปริญญาตรี 5 แขนงวิชา และปริญญาโท สร้างมืออาชีพด้วยนวัตกรรมดิจิทัลเพื่อชุมชนท้องถิ่น",
  keywords: ["คณะเทคโนโลยีสารสนเทศ", "มรภ.เพชรบุรี", "PBRU IT", "รับสมัครนักศึกษาใหม่", "วิทยาการคอมพิวเตอร์", "เทคโนโลยีสารสนเทศ", "ครูคอมพิวเตอร์", "เพชรบุรี"],
  openGraph: {
    title: "คณะเทคโนโลยีสารสนเทศ | มหาวิทยาลัยราชภัฏเพชรบุรี",
    description: "ซื่อสัตย์ มีวินัย ใฝ่เรียนรู้ คู่จิตอาสาธารณะ ก้าวสู่มืออาชีพ",
    url: "https://www.pbru.ac.th/pbru/faculty/faculty-of-information-technology",
    siteName: "คณะเทคโนโลยีสารสนเทศ มรภ.เพชรบุรี",
    locale: "th_TH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
