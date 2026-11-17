"use client";

import Image from "next/image";
import Link from "next/link";
import { landingContentByLang } from "@/app/const/data";
import { useLanguage } from "@/app/context/LanguageContext";
import {
  LuShieldCheck,
  LuClock,
  LuSparkles,
  LuAward,
  LuArrowRight,
} from "react-icons/lu";

const About = () => {
  const { lang } = useLanguage();
  const { about } = landingContentByLang[lang];

  const pillarIcons = [
    <LuClock key="0" className="text-blue-600 text-xl" />,
    <LuSparkles key="1" className="text-blue-600 text-xl" />,
    <LuShieldCheck key="2" className="text-blue-600 text-xl" />,
    <LuAward key="3" className="text-blue-600 text-xl" />,
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-24 bg-white border-t border-gray-100"
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-gray-200/80 bg-gray-100">
              <Image
                src={about.image.src}
                alt={about.image.alt}
                width={650}
                height={750}
                className="w-full h-80 sm:h-125 object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-gray-950/40 via-transparent to-transparent" />
            </div>

            <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-right-6 bg-blue-600 text-white p-5 sm:p-6 rounded-2xl shadow-xl sm:max-w-xs border border-blue-500">
              <div className="text-3xl font-extrabold tracking-tight">
                {about.floatingBadge.number}
              </div>
              <div className="mt-1 text-sm font-medium text-blue-100 leading-snug">
                {about.floatingBadge.text}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <span className="inline-block bg-blue-50 text-blue-700 border border-blue-200/60 text-xs sm:text-sm font-semibold px-3.5 py-1 rounded-full mb-4">
              {about.badge}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-gray-900 leading-tight">
              {about.heading}
            </h2>

            <p className="mt-3 text-lg font-medium text-blue-600">
              {about.subheadline}
            </p>

            <div className="mt-5 space-y-4 text-base text-gray-600 leading-relaxed">
              {about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-7 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {about.pillars.map((pillar, index) => (
                <div
                  key={index}
                  className="p-4 rounded-2xl bg-gray-50 border border-gray-200/70 hover:border-blue-200 hover:bg-blue-50/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white shadow-2xs border border-gray-200/80 flex items-center justify-center shrink-0">
                      {pillarIcons[index]}
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 sm:mt-8">
              <Link
                href={about.cta.href}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-blue-600 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors text-sm sm:text-base group"
              >
                {about.cta.text}
                <LuArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 sm:mt-20 pt-8 sm:pt-10 border-t border-gray-200 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {about.stats.map((stat, index) => (
            <div key={index} className="text-center sm:text-left">
              <div className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-medium text-gray-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
