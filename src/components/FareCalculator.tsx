import React, { useState } from 'react';
import { Calculator, Phone, CheckCircle, ArrowRightLeft } from 'lucide-react';
import { TAXI_HOTLINE, TAXI_HOTLINE_DISPLAY } from '../data/taxiData';

export const FareCalculator: React.FC = () => {
  const [km, setKm] = useState<number>(15);
  const [carType, setCarType] = useState<'4' | '7'>('4');
  const [isRoundTrip, setIsRoundTrip] = useState<boolean>(false);

  // Fare logic
  // 4 chỗ: 0.5km đầu 12k, km 2-30: 13k/km, km 31+: 10.5k/km
  // 7 chỗ: 0.5km đầu 14k, km 2-30: 15k/km, km 31+: 12k/km
  const calculateOneWay = (dist: number, type: '4' | '7') => {
    if (dist <= 0) return 0;
    if (dist <= 1) return type === '4' ? 12000 : 14000;

    let total = 0;
    if (type === '4') {
      const firstTier = Math.min(dist, 30);
      total += 12000 + (firstTier - 1) * 13000;
      if (dist > 30) {
        total += (dist - 30) * 10500;
      }
    } else {
      const firstTier = Math.min(dist, 30);
      total += 14000 + (firstTier - 1) * 15000;
      if (dist > 30) {
        total += (dist - 30) * 12000;
      }
    }
    return Math.round(total / 1000) * 1000;
  };

  const oneWayFare = calculateOneWay(km, carType);
  const totalFare = isRoundTrip
    ? Math.round((oneWayFare * 1.5) / 1000) * 1000
    : oneWayFare;

  return (
    <section id="tinh-cuoc" className="py-14 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Ước Tính Cước Phí Nhanh
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Kéo chỉnh số km để biết cước phí dự tính trước khi lên xe
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Controls */}
            <div className="space-y-6">
              {/* Car type */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Loại xe di chuyển:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setCarType('4')}
                    className={`py-2.5 px-4 rounded-xl text-sm font-bold border transition ${
                      carType === '4'
                        ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-xs'
                        : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    Xe 4 Chỗ (Sedan)
                  </button>
                  <button
                    type="button"
                    onClick={() => setCarType('7')}
                    className={`py-2.5 px-4 rounded-xl text-sm font-bold border transition ${
                      carType === '7'
                        ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-xs'
                        : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    Xe 7 Chỗ (MPV/SUV)
                  </button>
                </div>
              </div>

              {/* Distance Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Khoảng cách dự kiến:
                  </label>
                  <span className="text-base font-extrabold text-amber-600 tabular-nums">
                    {km} km
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="200"
                  value={km}
                  onChange={(e) => setKm(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>1 km (Nội ô)</span>
                  <span>50 km</span>
                  <span>100 km</span>
                  <span>200 km</span>
                </div>
              </div>

              {/* Quick distances */}
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="text-slate-500 py-1">Gợi ý nhanh:</span>
                {[
                  { name: 'Núi Sam (5km)', val: 5 },
                  { name: 'Trà Sư (28km)', val: 28 },
                  { name: 'Tri Tôn (42km)', val: 42 },
                  { name: 'Long Xuyên (55km)', val: 55 },
                  { name: 'Cần Thơ (115km)', val: 115 }
                ].map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setKm(item.val)}
                    className="px-2.5 py-1 bg-slate-100 hover:bg-amber-100 text-slate-700 hover:text-amber-900 rounded-md transition font-medium text-[11px]"
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              {/* Round Trip toggle */}
              <div className="pt-2">
                <label className="flex items-center gap-3 p-3 bg-amber-50/70 border border-amber-200/60 rounded-xl cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isRoundTrip}
                    onChange={(e) => setIsRoundTrip(e.target.checked)}
                    className="w-4 h-4 text-amber-500 rounded focus:ring-amber-500"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                      <ArrowRightLeft className="w-3.5 h-3.5 text-amber-600" />
                      Đi 2 chiều (Khứ hồi trong ngày)
                    </span>
                    <span className="text-amber-800">
                      Được giảm đến 50% cước lượt về kèm thời gian chờ linh hoạt
                    </span>
                  </div>
                </label>
              </div>
            </div>

            {/* Fare Summary Display */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs text-slate-400 font-medium block mb-1">
                  Ước tính cước chuyến đi ({carType === '4' ? 'Xe 4 Chỗ' : 'Xe 7 Chỗ'}):
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 tabular-nums">
                  {totalFare.toLocaleString('vi-VN')} đ
                </div>
                <p className="text-xs text-slate-300 mt-2">
                  {isRoundTrip
                    ? `Bao gồm khứ hồi 2 chiều (~${km * 2} km) có giảm giá lượt về.`
                    : `Cước ước tính 1 chiều (${km} km).`}
                </p>
              </div>

              <div className="space-y-2 text-xs text-slate-300 border-t border-slate-800 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Không phụ phí vô lý - Báo giá trước</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Có thể thỏa thuận giá trọn gói bao cầu đường</span>
                </div>
              </div>

              <a
                href={`tel:${TAXI_HOTLINE}`}
                className="w-full py-3 px-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl text-center transition flex items-center justify-center gap-2 shadow-md active:scale-98"
              >
                <Phone className="w-4 h-4 fill-slate-950" />
                <span>Gọi Đặt Giá Này: {TAXI_HOTLINE_DISPLAY}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
