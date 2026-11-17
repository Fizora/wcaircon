"use client";

import Link from "next/link";
import { landingContentByLang, contactInfo } from "@/app/const/data";
import { useLanguage } from "@/app/context/LanguageContext";
import { LuPhone, LuMail, LuClock } from "react-icons/lu";

const Footer = () => {
  const { lang } = useLanguage();
  const { footer } = landingContentByLang[lang];

  return (
    <footer className="bg-gray-950 text-gray-300 border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10">
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="text-2xl font-bold text-white tracking-wide"
            >
              WC Aircon
            </Link>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              {footer.description}
            </p>
            <p className="mt-4 text-xs font-medium text-blue-400">
              {footer.license}
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              {footer.navTitle}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {footer.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              {footer.servicesTitle}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {footer.serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              {footer.contactTitle}
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-2.5 text-white font-semibold hover:text-blue-400 transition-colors"
                >
                  <LuPhone className="text-blue-400 shrink-0" />
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors"
                >
                  <LuMail className="text-blue-400 shrink-0" />
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-gray-400">
                <LuClock className="text-blue-400 shrink-0 mt-0.5" />
                <span>{contactInfo.operationalHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>{footer.copyright}</p>
          <div className="flex items-center gap-6">
            <Link
              href="/#booking"
              className="hover:text-gray-300 transition-colors"
            >
              {footer.privacyLabel}
            </Link>
            <Link
              href="/#booking"
              className="hover:text-gray-300 transition-colors"
            >
              {footer.termsLabel}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
