import React from 'react';
import { MapPin, Clock, ArrowRight, Phone } from 'lucide-react';
import { POPULAR_ROUTES, TAXI_HOTLINE, TAXI_HOTLINE_DISPLAY, PopularRoute } from '../data/taxiData';

interface PopularRoutesProps {
  onSelectRoute: (route: PopularRoute) => void;
}

export const PopularRoutes: React.FC<PopularRoutesProps> = ({ onSelectRoute }) => {
  return (
    <section id="tuyen-duong" className="py-14 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">
              Tuyến Đi Phổ Biến
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Điểm Đến Du Lịch &amp; Liên Tỉnh Châu Đốc
            </h2>
            <p className="mt-2 text-slate-600 text-sm max-w-xl">
              Giá trọn gói tham khảo từ trung tâm Châu Đốc. Tài xế rành đường, sẵn sàng dừng chân chụp ảnh, ghé quán ăn ngon đặc sản.
            </p>
          </div>
          <a
            href={`tel:${TAXI_HOTLINE}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-900 text-white rounded-xl text-xs sm:text-sm font-semibold hover:bg-slate-800 transition whitespace-nowrap self-start sm:self-auto"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>Tư vấn lộ trình: {TAXI_HOTLINE_DISPLAY}</span>
          </a>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {POPULAR_ROUTES.map((route) => (
            <div
              key={route.id}
              className="group border border-slate-200 rounded-xl p-5 hover:border-amber-400 hover:shadow-md transition duration-200 flex flex-col justify-between bg-slate-50/40 hover:bg-white"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                    {route.tag}
                  </span>
                  <span className="tabular-nums flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {route.estTime}
                  </span>
                </div>

                <h3 className="font-bold text-base text-slate-900 group-hover:text-amber-600 transition">
                  {route.name}
                </h3>

                <div className="flex items-center gap-2 text-xs text-slate-500 mt-1 mb-3">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Khoảng cách: ~{route.distanceKm} km</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                  {route.highlight}
                </p>
              </div>

              <div>
                <div className="border-t border-slate-100 pt-3 mb-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-500">Xe 4 chỗ:</span>
                    <span className="font-bold text-slate-900 tabular-nums">
                      {route.price4Seater.toLocaleString('vi-VN')} đ
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Xe 7 chỗ:</span>
                    <span className="font-bold text-amber-700 tabular-nums">
                      {route.price7Seater.toLocaleString('vi-VN')} đ
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectRoute(route)}
                  className="w-full py-2 px-3 text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition flex items-center justify-center gap-1.5"
                >
                  <span>Chọn tuyến này</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
