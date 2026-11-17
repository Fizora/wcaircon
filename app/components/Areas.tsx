"use client";

import Link from "next/link";
import { landingContentByLang } from "@/app/const/data";
import { useLanguage } from "@/app/context/LanguageContext";
import { LuMapPin, LuArrowRight } from "react-icons/lu";

const Areas = () => {
  const { lang } = useLanguage();
  const { areas } = landingContentByLang[lang];

  return (
    <section
      id="areas"
      className="py-16 sm:py-20 bg-white border-t border-gray-100"
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full mb-4">
              {areas.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
              {areas.heading}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              {areas.subheading}
            </p>
            <p className="mt-3 sm:mt-4 text-sm text-gray-500">{areas.note}</p>
            <div className="mt-7 sm:mt-8">
              <Link
                href={areas.cta.href}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3.5 rounded-xl transition-colors text-sm sm:text-base"
              >
                {areas.cta.text}
                <LuArrowRight className="text-lg" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-gray-50 rounded-2xl p-4 sm:p-8 border border-gray-200/80">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-4">
                {areas.suburbs.map((suburb, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 sm:gap-2.5 bg-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200/70 text-gray-800 font-medium text-sm shadow-2xs"
                  >
                    <LuMapPin className="text-blue-600 shrink-0 text-base" />
                    <span className="truncate">{suburb}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Areas;
