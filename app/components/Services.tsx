"use client";

import Image from "next/image";
import Link from "next/link";
import { landingContentByLang } from "@/app/const/data";
import { useLanguage } from "@/app/context/LanguageContext";
import { LuArrowUpRight, LuTag } from "react-icons/lu";

const Services = () => {
  const { lang } = useLanguage();
  const { services } = landingContentByLang[lang];

  return (
    <section
      id="services"
      className="py-16 sm:py-24 bg-gray-50 border-t border-gray-200/70"
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6">
          <div className="max-w-2xl">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs sm:text-sm font-semibold px-3.5 py-1 rounded-full mb-4">
              {services.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
              {services.heading}
            </h2>
          </div>
          <p className="max-w-md text-base text-gray-600 leading-relaxed">
            {services.subheading}
          </p>
        </div>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.items.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200/80 shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-52 sm:h-56 w-full bg-gray-200 overflow-hidden">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-gray-950/60 via-gray-950/10 to-transparent" />

                  <span className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 bg-white/95 backdrop-blur-xs text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-2xs">
                    {item.tag}
                  </span>

                  <div className="absolute bottom-3 left-3.5 sm:left-4 flex items-center gap-1.5 text-white text-xs font-semibold">
                    <LuTag className="text-blue-300" />
                    <span>{item.priceHint}</span>
                  </div>
                </div>

                <div className="p-5 sm:p-7 pb-3 sm:pb-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 sm:mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="px-5 sm:px-7 pb-5 sm:pb-7 pt-3 sm:pt-4">
                <Link
                  href={item.href}
                  className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-gray-50 group-hover:bg-blue-600 text-gray-900 group-hover:text-white font-semibold text-sm transition-colors border border-gray-200/80 group-hover:border-blue-600"
                >
                  <span>{item.cta}</span>
                  <LuArrowUpRight className="text-lg" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
