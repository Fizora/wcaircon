"use client";

import { useState, useEffect } from "react";
import { landingContentByLang, contactInfo } from "@/app/const/data";
import { useLanguage } from "@/app/context/LanguageContext";
import { LuPhone, LuCircleCheck, LuCalendarCheck } from "react-icons/lu";

const Booking = () => {
  const { lang } = useLanguage();
  const { booking } = landingContentByLang[lang];

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    suburb: "",
    service: booking.serviceOptions[0],
    urgency: booking.urgencyOptions[0],
    notes: "",
  });

  // Sinkronkan pilihan default dropdown saat bahasa diganti
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      service: booking.serviceOptions[0],
      urgency: booking.urgencyOptions[0],
    }));
  }, [lang, booking.serviceOptions, booking.urgencyOptions]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="booking"
      className="py-16 sm:py-20 bg-white border-t border-gray-100"
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="bg-blue-900 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5 p-6 sm:p-12 text-white flex flex-col justify-between bg-linear-to-br from-blue-900 to-blue-800">
            <div>
              <span className="inline-block bg-blue-800 text-blue-200 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full mb-4 border border-blue-700">
                {booking.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
                {booking.heading}
              </h2>
              <p className="mt-4 text-blue-100 text-base leading-relaxed">
                {booking.subheading}
              </p>
            </div>

            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-blue-800">
              <p className="text-xs uppercase tracking-wider text-blue-300 font-semibold">
                {booking.urgentCallLabel}
              </p>
              <a
                href={`tel:${contactInfo.phone}`}
                className="mt-2.5 sm:mt-3 inline-flex items-center gap-2.5 sm:gap-3 text-2xl sm:text-3xl font-bold text-white hover:text-blue-200 transition-colors"
              >
                <LuPhone className="text-blue-400 shrink-0" />
                {contactInfo.phone}
              </a>
              <p className="mt-2 text-sm text-blue-200">
                {contactInfo.operationalHours}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-6 sm:p-12">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10 sm:py-12">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-3xl mb-4">
                  <LuCircleCheck />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {booking.successState.title}
                </h3>
                <p className="mt-2 text-gray-600 max-w-md">
                  {booking.successState.thanks}{" "}
                  <span className="font-semibold text-gray-900">
                    {formData.name}
                  </span>
                  . {booking.successState.desc1}{" "}
                  <span className="font-semibold text-gray-900">
                    {formData.phone}
                  </span>{" "}
                  {booking.successState.desc2}{" "}
                  <span className="font-semibold text-gray-900">
                    {formData.service}
                  </span>
                  .
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-semibold text-blue-600 hover:text-blue-700 cursor-pointer"
                >
                  {booking.successState.resetBtn}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      {booking.formLabels.name}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={booking.formLabels.namePlaceholder}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-3.5 sm:px-4 py-3 rounded-xl border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      {booking.formLabels.phone}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={booking.formLabels.phonePlaceholder}
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-3.5 sm:px-4 py-3 rounded-xl border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      {booking.formLabels.suburb}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={booking.formLabels.suburbPlaceholder}
                      value={formData.suburb}
                      onChange={(e) =>
                        setFormData({ ...formData, suburb: e.target.value })
                      }
                      className="w-full px-3.5 sm:px-4 py-3 rounded-xl border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      {booking.formLabels.service}
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-3.5 sm:px-4 py-3 rounded-xl border border-gray-300 text-gray-900 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    >
                      {booking.serviceOptions.map((option, idx) => (
                        <option key={idx} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {booking.formLabels.urgency}
                  </label>
                  <select
                    value={formData.urgency}
                    onChange={(e) =>
                      setFormData({ ...formData, urgency: e.target.value })
                    }
                    className="w-full px-3.5 sm:px-4 py-3 rounded-xl border border-gray-300 text-gray-900 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  >
                    {booking.urgencyOptions.map((option, idx) => (
                      <option key={idx} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {booking.formLabels.notes}
                  </label>
                  <textarea
                    rows={3}
                    placeholder={booking.formLabels.notesPlaceholder}
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    className="w-full px-3.5 sm:px-4 py-3 rounded-xl border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg shadow-blue-600/20 transition-all cursor-pointer"
                >
                  <LuCalendarCheck className="text-lg" />
                  {booking.submitText}
                </button>

                <p className="text-xs text-center text-gray-500">
                  {booking.disclaimer}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
