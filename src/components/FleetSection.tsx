import React from 'react';
import { Users, Briefcase, Phone, Check } from 'lucide-react';
import { FLEET_DETAILS, TAXI_HOTLINE, TAXI_HOTLINE_DISPLAY } from '../data/taxiData';

interface FleetSectionProps {
  onSelectCarType: (type: string) => void;
}

export const FleetSection: React.FC<FleetSectionProps> = ({ onSelectCarType }) => {
  return (
    <section id="dich-vu" className="py-14 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">
            Đội Xe Phục Vụ
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Dịch Vụ Xe 4 Chỗ &amp; 7 Chỗ Châu Đốc
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Tất cả xe đều là dòng xe đời mới, bảo dưỡng định kỳ, nội thất sạch sẽ, không mùi hôi say xe.
          </p>
        </div>

        {/* 2-Column Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FLEET_DETAILS.map((vehicle, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition duration-200 flex flex-col"
            >
              {/* Vehicle Image with fallback */}
              <div className="relative aspect-4/3 bg-slate-100 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.type}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-xs font-bold px-3 py-1 rounded-md">
                  {vehicle.type}
                </div>
              </div>

              {/* Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{vehicle.type}</h3>
                  <p className="text-xs text-slate-500 mt-1 mb-4">
                    Các dòng: {vehicle.models}
                  </p>

                  <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 mb-6">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>{vehicle.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="font-semibold text-slate-900">
                        {vehicle.priceOpen}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{vehicle.priceUnder30}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{vehicle.priceOver30}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-amber-600 shrink-0" />
                      <span className="text-amber-800 font-semibold bg-amber-50 px-2 py-0.5 rounded">
                        {vehicle.roundTripDiscount}
                      </span>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-600 mb-6">
                    <span className="font-bold text-slate-800">Phù hợp: </span>
                    {vehicle.suitedFor}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                  <a
                    href={`tel:${TAXI_HOTLINE}`}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-amber-400 hover:bg-amber-300 font-bold text-slate-950 rounded-lg text-xs sm:text-sm transition shadow-xs"
                  >
                    <Phone className="w-4 h-4 fill-slate-950" />
                    <span>Gọi {TAXI_HOTLINE_DISPLAY}</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      onSelectCarType(idx === 0 ? '4-cho' : '7-cho');
                      const heroElem = document.getElementById('hero');
                      heroElem?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg text-xs sm:text-sm transition"
                  >
                    <span>Đặt xe này</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Fare Notice */}
        <div id="bang-gia" className="mt-12 bg-white rounded-2xl p-6 border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span>Bảng Giá Cước Taxi Châu Đốc Tham Khảo</span>
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900 font-semibold border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Cự ly di chuyển</th>
                  <th className="py-3 px-4">Xe 4 Chỗ (Sedan)</th>
                  <th className="py-3 px-4">Xe 7 Chỗ (MPV)</th>
                  <th className="py-3 px-4">Ghi chú</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 tabular-nums">
                <tr>
                  <td className="py-3 px-4 font-medium">Giá mở cửa (0.5 km đầu)</td>
                  <td className="py-3 px-4 text-amber-700 font-bold">12.000 đ</td>
                  <td className="py-3 px-4 text-amber-700 font-bold">14.000 đ</td>
                  <td className="py-3 px-4 text-slate-500">Áp dụng nội ô Châu Đốc</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Từ km thứ 2 đến km 30</td>
                  <td className="py-3 px-4 text-amber-700 font-bold">13.000 đ / km</td>
                  <td className="py-3 px-4 text-amber-700 font-bold">15.000 đ / km</td>
                  <td className="py-3 px-4 text-slate-500">Tuyến Núi Sam, Trà Sư, Chợ Tịnh Biên</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Từ km thứ 31 trở đi (Đường dài)</td>
                  <td className="py-3 px-4 text-amber-700 font-bold">10.500 đ / km</td>
                  <td className="py-3 px-4 text-amber-700 font-bold">12.000 đ / km</td>
                  <td className="py-3 px-4 text-slate-500">Tuyến Long Xuyên, Cần Thơ, Sài Gòn</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Khứ hồi 2 chiều trong ngày</td>
                  <td className="py-3 px-4 text-emerald-700 font-bold">Giảm 50% - 70% chiều về</td>
                  <td className="py-3 px-4 text-emerald-700 font-bold">Giảm 50% - 60% chiều về</td>
                  <td className="py-3 px-4 text-slate-500">Đã bao gồm thời gian chờ linh hoạt</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[12px] text-slate-500 mt-4 italic">
            * Lưu ý: Giá cước có thể thương lượng trọn gói bao cầu đường tùy theo lộ trình thực tế. Vui lòng gọi trực tiếp hotline <strong className="text-slate-800">0879 999 646</strong> để nhận báo giá tốt nhất cho chuyến đi của bạn.
          </p>
        </div>
      </div>
    </section>
  );
};
