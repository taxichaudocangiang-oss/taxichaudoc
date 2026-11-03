import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Phone, MessageSquare, Mail, MapPin } from 'lucide-react';
import { FAQS, TAXI_HOTLINE, TAXI_HOTLINE_DISPLAY, TAXI_ZALO_URL, TAXI_EMAIL, TAXI_ADDRESS } from '../data/taxiData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="hoi-dap" className="py-14 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* FAQ Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wider mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>Giải Đáp Thắc Mắc</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-6">
              Câu Hỏi Thường Gặp Khi Đi Taxi Châu Đốc
            </h2>

            <div className="space-y-3">
              {FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-xl overflow-hidden transition"
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full py-4 px-5 text-left font-bold text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-50 transition"
                  >
                    <span className="text-sm sm:text-base">{faq.question}</span>
                    {openIndex === idx ? (
                      <ChevronUp className="w-5 h-5 text-amber-500 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {openIndex === idx && (
                    <div className="px-5 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Box Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-lg">
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block mb-2">
                Tổng Đài Trực Tuyến 24/7
              </span>
              <h3 className="text-xl font-bold mb-2">Liên Hệ Đặt Xe Châu Đốc</h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                Đội xe túc trực 24/24 sẵn sàng phục vụ quý khách. Đón nhanh tận nơi, báo giá trung thực.
              </p>

              <div className="space-y-4 mb-6">
                <a
                  href={`tel:${TAXI_HOTLINE}`}
                  className="flex items-center gap-3 p-3 bg-slate-800 hover:bg-slate-700/80 rounded-xl transition border border-slate-700"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 fill-slate-950" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">Hotline gọi xe trực tiếp</span>
                    <span className="text-base font-extrabold text-amber-400 tabular-nums">
                      {TAXI_HOTLINE_DISPLAY}
                    </span>
                  </div>
                </a>

                <a
                  href={TAXI_ZALO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-slate-800 hover:bg-slate-700/80 rounded-xl transition border border-slate-700"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">Zalo tư vấn &amp; gửi định vị</span>
                    <span className="text-base font-bold text-white tabular-nums">
                      {TAXI_HOTLINE_DISPLAY}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 text-slate-300 text-xs">
                  <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{TAXI_EMAIL}</span>
                </div>

                <div className="flex items-center gap-3 p-3 text-slate-300 text-xs">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{TAXI_ADDRESS}</span>
                </div>
              </div>

              <a
                href={`tel:${TAXI_HOTLINE}`}
                className="w-full py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm rounded-xl text-center flex items-center justify-center gap-2 transition"
              >
                <Phone className="w-4 h-4 fill-slate-950" />
                <span>BẤM GỌI XE NGAY</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
