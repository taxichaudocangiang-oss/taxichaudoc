import React from 'react';
import { Phone, MessageSquare, Mail, MapPin } from 'lucide-react';
import { TAXI_HOTLINE, TAXI_HOTLINE_DISPLAY, TAXI_ZALO_URL, TAXI_EMAIL, TAXI_ADDRESS } from '../data/taxiData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs py-10 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2 text-white font-extrabold text-base">
              <span className="w-7 h-7 rounded bg-amber-400 text-slate-950 flex items-center justify-center text-xs font-black">
                TX
              </span>
              <span>Taxi Châu Đốc</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Dịch vụ taxi đưa đón nhanh, giá rẻ, uy tín tại TP. Châu Đốc và các huyện tỉnh An Giang. Hoạt động 24/7.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Dịch Vụ</h4>
            <ul className="space-y-1.5 text-slate-400">
              <li><a href="#dich-vu" className="hover:text-white transition">Taxi 4 chỗ nội ô</a></li>
              <li><a href="#dich-vu" className="hover:text-white transition">Taxi 7 chỗ gia đình</a></li>
              <li><a href="#tuyen-duong" className="hover:text-white transition">Xe đi Miếu Bà Núi Sam</a></li>
              <li><a href="#tuyen-duong" className="hover:text-white transition">Xe du lịch Rừng Tràm Trà Sư</a></li>
              <li><a href="#tuyen-duong" className="hover:text-white transition">Xe liên tỉnh &amp; Sân bay</a></li>
            </ul>
          </div>

          {/* Popular Tourist Destinations */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Điểm Đến Du Lịch</h4>
            <ul className="space-y-1.5 text-slate-400">
              <li><a href="#tuyen-duong" className="hover:text-white transition">Miếu Bà Chúa Xứ Núi Sam</a></li>
              <li><a href="#tuyen-duong" className="hover:text-white transition">Lăng Thoại Ngọc Hầu</a></li>
              <li><a href="#tuyen-duong" className="hover:text-white transition">Chùa Hang &amp; Cáp Treo</a></li>
              <li><a href="#tuyen-duong" className="hover:text-white transition">Cửa khẩu Tịnh Biên</a></li>
              <li><a href="#tuyen-duong" className="hover:text-white transition">Chùa Xà Tón - Tri Tôn</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-2.5">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Thông Tin Liên Hệ</h4>
            <p className="flex items-center gap-2 text-slate-300">
              <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <a href={`tel:${TAXI_HOTLINE}`} className="hover:text-amber-400 font-bold tabular-nums">
                {TAXI_HOTLINE_DISPLAY}
              </a>
            </p>
            <p className="flex items-center gap-2 text-slate-300">
              <MessageSquare className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <a href={TAXI_ZALO_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Zalo: {TAXI_HOTLINE_DISPLAY}
              </a>
            </p>
            <p className="flex items-center gap-2 text-slate-300">
              <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>{TAXI_EMAIL}</span>
            </p>
            <p className="flex items-center gap-2 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>{TAXI_ADDRESS}</span>
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} Taxi Châu Đốc An Giang. Số điện thoại: {TAXI_HOTLINE_DISPLAY}.</p>
          <p>Phục vụ 24/24 · Đón nhanh · An toàn · Giá tốt</p>
        </div>
      </div>
    </footer>
  );
};
