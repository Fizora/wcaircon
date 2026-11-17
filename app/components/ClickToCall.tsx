"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { contactInfo } from "@/app/const/data";
import {
  LuPhoneCall,
  LuCalendarCheck,
  LuX,
  LuExternalLink,
  LuInfo,
  LuMail,
  LuGlobe,
} from "react-icons/lu";

type LangCode = "en" | "id" | "ja" | "zh" | "th" | "vi";

const translations: Record<
  LangCode,
  {
    label: string;
    badge: string;
    title: string;
    introPrefix: string;
    introBold: string;
    introSuffix: string;
    disclaimerTitle: string;
    disclaimerPart1: string;
    disclaimerPart2: string;
    disclaimerPart3: string;
    visitBtn: string;
    contactBtn: string;
    closeBtn: string;
  }
> = {
  en: {
    label: "EN",
    badge: "Demo Project Notice",
    title: "Demo Website & Content by Lexentify",
    introPrefix:
      "The entire website design, fictional brand name (WC Aircon), and written content on this page are a portfolio ",
    introBold: "demo project",
    introSuffix: " created by ",
    disclaimerTitle: "Image Asset Disclaimer:",
    disclaimerPart1:
      "All photos and visual assets used in this demo are free assets sourced from ",
    disclaimerPart2:
      ". If you are the copyright owner or object to the use of any image or content, please contact us at ",
    disclaimerPart3: " so we can remove it immediately.",
    visitBtn: "Visit Lexentify.com",
    contactBtn: "Contact Us",
    closeBtn: "I Understand, Continue to Demo",
  },
  id: {
    label: "ID",
    badge: "Pemberitahuan Demo",
    title: "Website & Konten Demo by Lexentify",
    introPrefix:
      "Seluruh tampilan website, nama merek fiktif (WC Aircon), serta teks konten di dalam halaman ini merupakan ",
    introBold: "demo project",
    introSuffix: " portofolio yang dibuat oleh ",
    disclaimerTitle: "Penafikan Aset Gambar (Disclaimer):",
    disclaimerPart1:
      "Seluruh aset foto/gambar yang digunakan dalam demo ini merupakan aset gratis yang diperoleh melalui ",
    disclaimerPart2:
      ". Apabila Anda adalah pemilik hak cipta atau merasa keberatan dengan penggunaan gambar/konten tertentu, silakan hubungi kami melalui ",
    disclaimerPart3: " agar dapat segera kami hapus.",
    visitBtn: "Kunjungi Lexentify.com",
    contactBtn: "Hubungi Kami",
    closeBtn: "Saya Mengerti, Lanjutkan Melihat Demo",
  },
  ja: {
    label: "日本語",
    badge: "デモプロジェクトのお知らせ",
    title: "Lexentifyによるデモサイトおよびコンテンツ",
    introPrefix:
      "当ページのウェブサイトデザイン、架空のブランド名（WC Aircon）、およびすべてのテキストコンテンツは、",
    introBold: "デモプロジェクト",
    introSuffix: "（ポートフォリオ作品）として制作されたものです：",
    disclaimerTitle: "画像素材に関する免責事項：",
    disclaimerPart1:
      "本デモで使用されているすべての写真・画像素材は、フリー素材サイト ",
    disclaimerPart2:
      " より取得したものです。著作権者の方で、画像やコンテンツの使用に異議がある場合は、",
    disclaimerPart3: " までご連絡いただければ速やかに削除いたします。",
    visitBtn: "Lexentify.com を訪問",
    contactBtn: "お問い合わせ",
    closeBtn: "理解しました（デモを見る）",
  },
  zh: {
    label: "中文",
    badge: "演示项目声明",
    title: "由 Lexentify 制作的演示网站与内容",
    introPrefix:
      "本页面的整体网站设计、虚构品牌名称（WC Aircon）以及所有文字内容均为作品集",
    introBold: "演示项目",
    introSuffix: "，制作方为 ",
    disclaimerTitle: "图片素材免责声明：",
    disclaimerPart1: "本演示中使用的所有照片与视觉素材均来自免费素材平台 ",
    disclaimerPart2:
      "。如果您是版权所有者或对某些图片/内容的使用有异议，请通过 ",
    disclaimerPart3: " 与我们联系，我们将立即予以删除。",
    visitBtn: "访问 Lexentify.com",
    contactBtn: "联系我们",
    closeBtn: "我已了解，继续浏览演示",
  },
  th: {
    label: "ไทย",
    badge: "ประกาศโปรเจกต์ตัวอย่าง",
    title: "เว็บไซต์และเนื้อหาตัวอย่างโดย Lexentify",
    introPrefix:
      "การออกแบบเว็บไซต์ทั้งหมด ชื่อแบรนด์สมมติ (WC Aircon) และเนื้อหาข้อความในหน้านี้เป็น",
    introBold: "โปรเจกต์ตัวอย่าง (Demo Project)",
    introSuffix: " สำหรับพอร์ตโฟลิโอที่สร้างโดย ",
    disclaimerTitle: "ข้อจำกัดความรับผิดชอบเกี่ยวกับรูปภาพ:",
    disclaimerPart1: "รูปภาพและสื่อทั้งหมดที่ใช้ในเดโมนี้เป็นทรัพยากรฟรีจาก ",
    disclaimerPart2:
      " หากคุณเป็นเจ้าของลิขสิทธิ์หรือไม่พึงพอใจกับการใช้รูปภาพหรือเนื้อหาใดๆ โปรดติดต่อเราที่ ",
    disclaimerPart3: " เพื่อดำเนินการลบออกทันที",
    visitBtn: "เยี่ยมชม Lexentify.com",
    contactBtn: "ติดต่อเรา",
    closeBtn: "ฉันเข้าใจแล้ว เข้าสู่หน้าตัวอย่าง",
  },
  vi: {
    label: "VI",
    badge: "Thông báo Dự án Mẫu",
    title: "Website & Nội dung Demo bởi Lexentify",
    introPrefix:
      "Toàn bộ giao diện website, tên thương hiệu hư cấu (WC Aircon) và nội dung văn bản trên trang này là ",
    introBold: "dự án demo",
    introSuffix: " thuộc danh mục sản phẩm được thực hiện bởi ",
    disclaimerTitle: "Tuyên bố miễn trừ trách nhiệm hình ảnh:",
    disclaimerPart1:
      "Tất cả hình ảnh được sử dụng trong bản demo này đều là tài nguyên miễn phí từ ",
    disclaimerPart2:
      ". Nếu bạn là chủ sở hữu bản quyền hoặc không hài lòng với việc sử dụng bất kỳ hình ảnh/nội dung nào, vui lòng liên hệ qua ",
    disclaimerPart3: " để chúng tôi gỡ bỏ ngay lập tức.",
    visitBtn: "Truy cập Lexentify.com",
    contactBtn: "Liên hệ",
    closeBtn: "Tôi đã hiểu, Tiếp tục xem Demo",
  },
};

const languages: { code: LangCode; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "id", label: "ID" },
  { code: "ja", label: "日本語" },
  { code: "zh", label: "中文" },
  { code: "th", label: "ไทย" },
  { code: "vi", label: "VI" },
];

const ClickToCall = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [lang, setLang] = useState<LangCode>("en");

  useEffect(() => {
    setShowDisclaimer(true);
  }, []);

  const handleCloseDisclaimer = () => {
    setShowDisclaimer(false);
  };

  const t = translations[lang];

  return (
    <>
      {/* 1. Floating Click-to-Call Bar Informatif */}
      <div className="fixed bottom-4 inset-x-3 sm:inset-x-auto sm:right-6 sm:bottom-6 z-40">
        <div className="bg-gray-950/95 backdrop-blur-md text-white p-2 sm:p-2.5 rounded-2xl shadow-2xl border border-gray-800 flex items-center justify-between sm:justify-start gap-2 sm:gap-3">
          <a
            href={`tel:${contactInfo.phone}`}
            className="flex items-center gap-3 pl-2 pr-3 py-1.5 rounded-xl hover:bg-gray-900 transition-colors group"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600 text-white shrink-0 group-hover:scale-105 transition-transform">
              <LuPhoneCall className="text-lg" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border-2 border-gray-950" />
              </span>
            </div>

            <div className="text-left">
              <div className="flex items-center gap-1.5 text-[11px] font-medium text-green-400 leading-none">
                <span>Live Dispatch • Same-Day</span>
              </div>
              <div className="text-sm sm:text-base font-bold tracking-tight text-white mt-1">
                {contactInfo.phone}
              </div>
            </div>
          </a>

          <div className="h-8 w-px bg-gray-800 hidden sm:block" />

          <Link
            href="#booking"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold px-4 py-3 rounded-xl transition-colors shrink-0 shadow-lg shadow-blue-600/20"
          >
            <LuCalendarCheck className="text-base shrink-0" />
            <span>Book Online</span>
          </Link>
        </div>
      </div>

      {/* 2. Popup Modal Disclaimer Multi-Bahasa di Tengah Layar */}
      {showDisclaimer && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="demo-modal-title"
        >
          <div className="bg-white rounded-3xl max-w-lg w-full p-5 sm:p-8 shadow-2xl border border-gray-200 relative max-h-[90vh] overflow-y-auto">
            {/* Baris Atas: Language Switcher & Tombol Close */}
            <div className="flex items-center justify-between gap-2 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-1.5 flex-wrap">
                <LuGlobe className="text-gray-400 text-base mr-0.5 shrink-0" />
                {languages.map((item) => (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => setLang(item.code)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      lang === item.code
                        ? "bg-blue-600 text-white shadow-2xs"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <button
                onClick={handleCloseDisclaimer}
                className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors cursor-pointer shrink-0"
                aria-label="Close disclaimer"
              >
                <LuX className="text-xl" />
              </button>
            </div>

            {/* Icon & Badge */}
            <div className="mt-5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl border border-blue-100 shrink-0">
                <LuInfo />
              </div>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                {t.badge}
              </span>
            </div>

            <h3
              id="demo-modal-title"
              className="mt-3 text-xl sm:text-2xl font-bold text-gray-900 tracking-tight"
            >
              {t.title}
            </h3>

            {/* Isi Pemberitahuan & Penafikan */}
            <div className="mt-3.5 space-y-3 text-sm text-gray-600 leading-relaxed">
              <p>
                {t.introPrefix}
                <strong className="text-gray-900">{t.introBold}</strong>
                {t.introSuffix}
                <a
                  href="https://lexentify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold underline underline-offset-2 inline-flex items-center gap-1"
                >
                  lexentify.com
                  <LuExternalLink className="text-xs" />
                </a>
                .
              </p>

              <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200/80 text-xs sm:text-sm text-gray-600">
                <strong className="text-gray-900 block mb-1">
                  {t.disclaimerTitle}
                </strong>
                {t.disclaimerPart1}
                <span className="font-medium text-gray-800">Pexels</span>
                {t.disclaimerPart2}
                <a
                  href="mailto:info@lexentify.com"
                  className="text-blue-600 hover:text-blue-700 font-semibold underline underline-offset-2"
                >
                  info@lexentify.com
                </a>
                {t.disclaimerPart3}
              </div>
            </div>

            {/* Tombol Aksi Modal */}
            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
              <a
                href="https://lexentify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-colors shadow-md shadow-blue-600/20"
              >
                <span>{t.visitBtn}</span>
                <LuExternalLink className="text-base" />
              </a>

              <a
                href="mailto:info@lexentify.com"
                className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold text-sm px-4 py-3 rounded-xl transition-colors"
              >
                <LuMail className="text-base text-gray-600" />
                <span>{t.contactBtn}</span>
              </a>
            </div>

            <button
              onClick={handleCloseDisclaimer}
              className="mt-3 w-full text-center text-xs font-medium text-gray-500 hover:text-gray-800 py-1.5 cursor-pointer"
            >
              {t.closeBtn}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ClickToCall;
