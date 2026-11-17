"use client";

import Image from "next/image";
import Link from "next/link";
import { landingContentByLang } from "@/app/const/data";
import { useLanguage } from "@/app/context/LanguageContext";
import { LuPhone, LuArrowRight } from "react-icons/lu";

const Hero = () => {
  const { lang } = useLanguage();
  const { hero } = landingContentByLang[lang];

  return (
    <section className="pt-36 sm:pt-40 pb-14 sm:pb-16 bg-linear-to-b from-blue-50/50 to-white">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full mb-4">
            {hero.badge}
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
            {hero.title}
          </h1>

          <p className="mt-5 sm:mt-6 text-lg sm:text-xl leading-relaxed text-gray-600">
            {hero.description}
          </p>

          <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <Link
              href={hero.primaryCta.href}
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3.5 rounded-xl shadow-lg shadow-blue-600/20 transition-all text-base"
            >
              {hero.primaryCta.text}
              <LuArrowRight className="text-lg" />
            </Link>

            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 font-medium px-6 py-3.5 rounded-xl border border-gray-300 shadow-2xs transition-all text-base"
            >
              <LuPhone className="text-blue-600 text-lg" />
              {hero.secondaryCta.text}
            </a>
          </div>
        </div>

        <div className="mt-10 sm:mt-12">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              width={1300}
              height={500}
              className="w-full h-75 sm:h-112.5 lg:h-125 object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
