import React from 'react';
import { Clock, Receipt, Sparkles, ShieldCheck, PhoneCall } from 'lucide-react';
import { CORE_BENEFITS, TAXI_HOTLINE, TAXI_HOTLINE_DISPLAY } from '../data/taxiData';

export const Commitments: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clock':
        return <Clock className="w-6 h-6 text-amber-500" />;
      case 'Receipt':
        return <Receipt className="w-6 h-6 text-amber-500" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-amber-500" />;
      default:
        return <Clock className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Vì Sao Khách Hàng Tin Chọn Taxi Châu Đốc?
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Đơn giản, đúng giờ, chu đáo – Chúng tôi mang lại chuyến đi thoải mái nhất cho bà con và du khách.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_BENEFITS.map((benefit, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-amber-300 hover:shadow-md transition duration-200 flex flex-col"
            >
              <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
                {getIcon(benefit.icon)}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Quick Hotline Call strip */}
        <div className="mt-8 bg-amber-500 text-slate-950 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-slate-950 text-amber-400 flex items-center justify-center shrink-0">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <p className="font-extrabold text-base sm:text-lg">Cần xe gấp tại Châu Đốc? Gọi ngay có xe!</p>
              <p className="text-xs text-slate-900 font-medium">Tài xế sẵn sàng trực tại trung tâm, Núi Sam, bến xe</p>
            </div>
          </div>
          <a
            href={`tel:${TAXI_HOTLINE}`}
            className="px-6 py-2.5 bg-slate-950 hover:bg-slate-800 text-white font-bold rounded-lg text-sm transition shadow-sm whitespace-nowrap shrink-0"
          >
            Gọi {TAXI_HOTLINE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
};
