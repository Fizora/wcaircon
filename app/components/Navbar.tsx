"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  LuMenu,
  LuX,
  LuPhone,
  LuMail,
  LuClock,
  LuGlobe,
  LuChevronDown,
  LuCheck,
} from "react-icons/lu";
import { navLinksByLang, contactInfo, languagesList } from "@/app/const/data";
import { useLanguage } from "@/app/context/LanguageContext";

const Navbar = () => {
  const { lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = navLinksByLang[lang];
  const currentLangObj = languagesList.find((l) => l.code === lang);

  // Efek hide/show navbar saat scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
        setIsOpen(false);
        setLangDropdownOpen(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Tutup dropdown bahasa jika klik di luar
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header
        className={`w-full fixed top-0 left-0 z-50 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Top Banner (Jam Operasional, Email, Telepon) */}
        <div className="bg-blue-900 text-blue-100 text-xs sm:text-sm py-2 border-b border-blue-800">
          <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5">
                <LuClock className="text-blue-400 shrink-0" />
                {contactInfo.operationalHours}
              </span>
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <LuMail className="text-blue-400 shrink-0" />
                {contactInfo.email}
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors font-medium"
              >
                <LuPhone className="text-blue-400 shrink-0" />
                {contactInfo.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="bg-blue-700 text-white shadow-md">
          <div className="py-3.5 sm:py-4 mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold tracking-wide">
              WC Aircon
            </Link>

            {/* Grup Kanan: Language Switcher + Tombol Menu */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Dropdown Pemilih Bahasa */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="inline-flex items-center gap-1.5 bg-blue-800/80 hover:bg-blue-600 text-white text-xs sm:text-sm font-semibold px-3 py-2 rounded-lg border border-blue-600/70 transition-colors cursor-pointer"
                  aria-label="Select Language"
                >
                  <LuGlobe className="text-blue-200 text-base shrink-0" />
                  <span>{currentLangObj?.label}</span>
                  <LuChevronDown
                    className={`text-sm transition-transform duration-200 ${
                      langDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Menu Dropdown Bahasa */}
                {langDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded-xl shadow-xl border border-gray-200 py-1.5 z-50">
                    {languagesList.map((item) => (
                      <button
                        key={item.code}
                        type="button"
                        onClick={() => {
                          setLang(item.code);
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full px-3.5 py-2 text-left text-xs sm:text-sm flex items-center justify-between hover:bg-blue-50 transition-colors cursor-pointer ${
                          lang === item.code
                            ? "font-bold text-blue-600 bg-blue-50/50"
                            : "font-medium text-gray-700"
                        }`}
                      >
                        <span>{item.name}</span>
                        {lang === item.code && (
                          <LuCheck className="text-blue-600 text-base" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Tombol Hamburger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-2xl focus:outline-none hover:bg-blue-600 rounded-lg transition-colors cursor-pointer"
                aria-label="Toggle Menu"
              >
                {isOpen ? <LuX /> : <LuMenu />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-xs z-60 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer Sidebar (Muncul dari kiri ke kanan) */}
      <div
        className={`fixed top-0 left-0 h-full w-72 sm:w-80 bg-blue-800 text-white shadow-2xl z-70 flex flex-col justify-between p-6 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          {/* Header Drawer */}
          <div className="flex items-center justify-between pb-6 border-b border-blue-700">
            <span className="text-xl font-bold tracking-wide">Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-2xl hover:bg-blue-700 rounded-lg transition-colors cursor-pointer"
              aria-label="Close Menu"
            >
              <LuX />
            </button>
          </div>

          {/* Daftar Link Navigasi */}
          <nav className="flex flex-col gap-2 mt-6">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium py-2.5 px-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Pemilih Bahasa di Bagian Bawah Drawer */}
        <div className="pt-6 border-t border-blue-700">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-300 mb-3">
            <LuGlobe className="text-sm" />
            <span>Language</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {languagesList.map((item) => (
              <button
                key={item.code}
                type="button"
                onClick={() => {
                  setLang(item.code);
                  setIsOpen(false);
                }}
                className={`py-2 px-2 rounded-lg text-xs font-semibold text-center transition-colors cursor-pointer ${
                  lang === item.code
                    ? "bg-white text-blue-800 shadow-xs"
                    : "bg-blue-900/60 text-blue-100 hover:bg-blue-700"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
