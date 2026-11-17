"use client";

import { landingContentByLang } from "@/app/const/data";
import { useLanguage } from "@/app/context/LanguageContext";
import { LuStar, LuCircleCheck } from "react-icons/lu";

const Testimonials = () => {
  const { lang } = useLanguage();
  const { testimonials } = landingContentByLang[lang];

  return (
    <section
      id="reviews"
      className="py-16 sm:py-20 bg-gray-50 border-t border-gray-100"
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full mb-4">
              {testimonials.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
              {testimonials.heading}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-600">
              {testimonials.subheading}
            </p>
          </div>

          <div className="bg-white px-4 sm:px-5 py-3.5 sm:py-4 rounded-2xl border border-gray-200 shadow-2xs flex items-center gap-4 self-start md:self-auto shrink-0">
            <div className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.13 0-5.78-2.11-6.73-4.96H1.19v3.15C3.18 21.35 7.22 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.27 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.6H1.19C.43 8.13 0 9.87 0 12s.43 3.87 1.19 5.4l4.08-3.16z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.22 0 3.18 2.65 1.19 6.6l4.08 3.15c.95-2.85 3.6-4.96 6.73-4.96z"
                />
              </svg>
              {testimonials.overallRating}
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-400 text-base">
                {[...Array(5)].map((_, i) => (
                  <LuStar key={i} className="fill-amber-400" />
                ))}
              </div>
              <p className="text-xs font-medium text-gray-600 mt-1">
                {testimonials.basedOnLabel} {testimonials.totalReviews}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {testimonials.reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 sm:p-7 border border-gray-200/80 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3.5 sm:mb-4">
                  <div className="flex items-center gap-1 text-amber-400 text-sm">
                    {[...Array(review.rating)].map((_, i) => (
                      <LuStar key={i} className="fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-400">
                    {review.timeAgo}
                  </span>
                </div>

                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-gray-100 flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <div className="font-bold text-gray-900 text-sm flex items-center gap-1.5">
                    <span className="truncate">{review.name}</span>
                    <LuCircleCheck
                      className="text-blue-600 text-sm shrink-0"
                      title="Verified Customer"
                    />
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5 truncate">
                    {review.suburb} • {review.service}
                  </div>
                </div>

                <a
                  href={review.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-blue-600 transition-colors bg-gray-50 hover:bg-blue-50 px-2.5 py-1.5 rounded-lg border border-gray-200/60 shrink-0"
                  title="View review on Google Maps"
                >
                  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.13 0-5.78-2.11-6.73-4.96H1.19v3.15C3.18 21.35 7.22 24 12 24z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.27 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.6H1.19C.43 8.13 0 9.87 0 12s.43 3.87 1.19 5.4l4.08-3.16z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.22 0 3.18 2.65 1.19 6.6l4.08 3.15c.95-2.85 3.6-4.96 6.73-4.96z"
                    />
                  </svg>
                  <span>Google</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
