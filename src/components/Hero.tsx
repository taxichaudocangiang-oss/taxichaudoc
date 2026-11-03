import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Navigation, Car, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { TAXI_HOTLINE, TAXI_HOTLINE_DISPLAY, TAXI_ZALO_URL, POPULAR_ROUTES } from '../data/taxiData';

interface HeroProps {
  onBookSuccess: (bookingData: {
    pickup: string;
    dropoff: string;
    carType: string;
    phone: string;
    roundTrip: boolean;
    estPrice: number;
  }) => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookSuccess }) => {
  const [pickup, setPickup] = useState('Chợ Châu Đốc');
  const [dropoff, setDropoff] = useState('Miếu Bà Chúa Xứ Núi Sam');
  const [carType, setCarType] = useState<'4-cho' | '7-cho'>('4-cho');
  const [phone, setPhone] = useState('');
  const [roundTrip, setRoundTrip] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  // Estimate price dynamically based on route or defaults
  const matchedRoute = POPULAR_ROUTES.find(
    (r) => r.name.toLowerCase().includes(dropoff.toLowerCase()) || dropoff.toLowerCase().includes(r.name.toLowerCase())
  );

  const basePrice = matchedRoute
    ? carType === '4-cho'
      ? matchedRoute.price4Seater
      : matchedRoute.price7Seater
    : carType === '4-cho'
    ? 70000
    : 90000;

  const estPrice = roundTrip ? Math.round(basePrice * 1.5) : basePrice;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.trim().length < 9) {
      setPhoneError('Vui lòng nhập số điện thoại hợp lệ để tài xế gọi đón.');
      return;
    }
    setPhoneError('');

    onBookSuccess({
      pickup: pickup || 'Nội ô Châu Đốc',
      dropoff: dropoff || 'Theo yêu cầu',
      carType: carType === '4-cho' ? 'Xe 4 Chỗ (Sedan)' : 'Xe 7 Chỗ (MPV)',
      phone,
      roundTrip,
      estPrice,
    });
  };

  return (
    <section id="hero" className="relative pt-6 pb-12 lg:pt-10 lg:pb-16 bg-slate-900 text-white overflow-hidden">
      {/* Background with measured contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_taxi_chaudoc_1793677845140.jpg"
          alt="Taxi Châu Đốc đón khách tại An Giang"
          className="w-full h-full object-cover object-center opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900/70" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Value proposition, Quick Call */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1.5 rounded-md">
              <Clock className="w-3.5 h-3.5" />
              <span>Phục vụ 24/7 · Có mặt sau 5 - 10 phút</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Taxi Châu Đốc <br />
              <span className="text-amber-400">Gọi Xe Nhanh - Giá Trọn Gói</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed">
              Dịch vụ taxi gia đình 4 chỗ và 7 chỗ chất lượng cao tại TP. Châu Đốc. Đưa đón chu đáo đi viếng Miếu Bà Chúa Xứ Núi Sam, Rừng Tràm Trà Sư, bệnh viện, bến xe &amp; liên tỉnh giá rẻ.
            </p>

            {/* Direct Big Call Banner */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`tel:${TAXI_HOTLINE}`}
                className="animate-call-pulse flex items-center justify-center gap-3 px-6 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-lg rounded-xl shadow-lg transition active:scale-95"
              >
                <Phone className="w-6 h-6 fill-slate-950" />
                <span>GỌI XE: {TAXI_HOTLINE_DISPLAY}</span>
              </a>

              <a
                href={TAXI_ZALO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-5 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-base rounded-xl transition shadow-md"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Nhắn Tin Zalo</span>
              </a>
            </div>

            {/* Trust bullet points */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-800 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Xe đời mới thơm tho</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Không chém giá cước</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Tài xế bản xứ nhiệt tình</span>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Booking Form */}
          <div className="lg:col-span-5">
            <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-7 shadow-2xl border border-slate-200">
              <div className="border-b border-slate-100 pb-4 mb-5">
                <h2 className="text-xl font-bold text-slate-900 flex items-center justify-between">
                  <span>Đặt Xe Nhanh Châu Đốc</span>
                  <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-1 rounded">
                    Có xe ngay
                  </span>
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Nhập điểm đi và số điện thoại, tài xế sẽ liên hệ xác nhận ngay
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Car Type Selector */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Chọn loại xe:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setCarType('4-cho')}
                      className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg border text-sm font-semibold transition ${
                        carType === '4-cho'
                          ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-xs'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <Car className="w-4 h-4" />
                      <span>Xe 4 Chỗ</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setCarType('7-cho')}
                      className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg border text-sm font-semibold transition ${
                        carType === '7-cho'
                          ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-xs'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <Car className="w-4 h-4" />
                      <span>Xe 7 Chỗ</span>
                    </button>
                  </div>
                </div>

                {/* Pickup Location */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Điểm đón:
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-amber-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      placeholder="Ví dụ: Chợ Châu Đốc, Khách sạn, Bến xe..."
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      required
                    />
                  </div>
                  {/* Quick suggestions */}
                  <div className="flex flex-wrap gap-1 mt-1.5">
                    {['Chợ Châu Đốc', 'Bến xe', 'Khách sạn'].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setPickup(item)}
                        className="text-[11px] text-slate-500 hover:text-amber-700 hover:bg-amber-50 px-2 py-0.5 rounded border border-slate-200 transition"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Dropoff Location */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Điểm đến:
                  </label>
                  <div className="relative">
                    <Navigation className="w-4 h-4 text-emerald-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      value={dropoff}
                      onChange={(e) => setDropoff(e.target.value)}
                      placeholder="Ví dụ: Miếu Bà Chúa Xứ, Rừng Tràm Trà Sư..."
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      required
                    />
                  </div>
                  {/* Quick destinations */}
                  <div className="flex flex-wrap gap-1 mt-1.5">
                    {['Miếu Bà Chúa Xứ', 'Trà Sư', 'Tịnh Biên', 'Long Xuyên'].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setDropoff(item)}
                        className="text-[11px] text-slate-500 hover:text-amber-700 hover:bg-amber-50 px-2 py-0.5 rounded border border-slate-200 transition"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Trip Type (1 way vs round trip) */}
                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="font-semibold text-slate-700">Loại hành trình:</span>
                  <div className="flex items-center gap-3">
                    <label className="inline-flex items-center gap-1 cursor-pointer">
                      <input
                        type="radio"
                        checked={!roundTrip}
                        onChange={() => setRoundTrip(false)}
                        className="text-amber-500 focus:ring-amber-500"
                      />
                      <span>1 Chiều</span>
                    </label>
                    <label className="inline-flex items-center gap-1 cursor-pointer">
                      <input
                        type="radio"
                        checked={roundTrip}
                        onChange={() => setRoundTrip(true)}
                        className="text-amber-500 focus:ring-amber-500"
                      />
                      <span className="text-amber-700 font-semibold">2 Chiều (Ưu đãi)</span>
                    </label>
                  </div>
                </div>

                {/* Customer Phone */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Số điện thoại của bạn:
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (phoneError) setPhoneError('');
                      }}
                      placeholder="Nhập số điện thoại để tài xế gọi..."
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 font-medium"
                      required
                    />
                  </div>
                  {phoneError && (
                    <p className="text-xs text-red-600 mt-1">{phoneError}</p>
                  )}
                </div>

                {/* Estimated Fare Preview */}
                <div className="bg-amber-50 border border-amber-200/60 rounded-xl p-3 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-amber-800 font-medium block">Ước tính giá cước:</span>
                    <span className="text-lg font-black text-amber-700 tabular-nums">
                      {estPrice.toLocaleString('vi-VN')} đ
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-500 text-right">
                    {roundTrip ? 'Khứ hồi trọn gói' : 'Giá 1 chiều tham khảo'}
                  </span>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-md transition active:scale-98 flex items-center justify-center gap-2"
                >
                  <Car className="w-4 h-4 text-amber-400" />
                  <span>Xác Nhận Đặt Xe</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
