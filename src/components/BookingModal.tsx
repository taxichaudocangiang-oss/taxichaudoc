import React from 'react';
import { CheckCircle2, Phone, MessageSquare, X, Clock, MapPin, Car } from 'lucide-react';
import { TAXI_HOTLINE, TAXI_HOTLINE_DISPLAY, TAXI_ZALO_URL } from '../data/taxiData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingData: {
    pickup: string;
    dropoff: string;
    carType: string;
    phone: string;
    roundTrip: boolean;
    estPrice: number;
  } | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  bookingData,
}) => {
  if (!isOpen || !bookingData) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100 relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition"
          aria-label="Đóng"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-5">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-extrabold text-slate-900">
            Đặt Xe Thành Công!
          </h3>
          <p className="text-xs text-slate-600 mt-1">
            Tổng đài Taxi Châu Đốc đã nhận thông tin. Bác tài sẽ gọi điện xác nhận trong 1 - 3 phút.
          </p>
        </div>

        {/* Trip Summary Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2.5 text-xs text-slate-700 mb-6">
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-400 block text-[11px]">Điểm đón:</span>
              <strong className="text-slate-900">{bookingData.pickup}</strong>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-400 block text-[11px]">Điểm đến:</span>
              <strong className="text-slate-900">{bookingData.dropoff}</strong>
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-slate-200 pt-2 text-[11px]">
            <span className="flex items-center gap-1.5">
              <Car className="w-3.5 h-3.5 text-slate-500" />
              {bookingData.carType} ({bookingData.roundTrip ? '2 chiều' : '1 chiều'})
            </span>
            <span>
              SĐT: <strong className="text-slate-900">{bookingData.phone}</strong>
            </span>
          </div>
          <div className="flex items-center justify-between border-t border-slate-200 pt-2 font-bold text-slate-900">
            <span>Cước ước tính:</span>
            <span className="text-amber-600 text-sm tabular-nums">
              {bookingData.estPrice.toLocaleString('vi-VN')} đ
            </span>
          </div>
        </div>

        {/* Immediate Call option */}
        <div className="space-y-2">
          <p className="text-center text-[11px] text-slate-500">
            Nếu quý khách đang cần đón gấp ngay bây giờ:
          </p>
          <a
            href={`tel:${TAXI_HOTLINE}`}
            className="w-full py-3 bg-amber-400 hover:bg-amber-300 active:scale-98 text-slate-950 font-bold rounded-xl text-center flex items-center justify-center gap-2 transition shadow-sm text-sm"
          >
            <Phone className="w-4 h-4 fill-slate-950" />
            <span>GỌI NGAY: {TAXI_HOTLINE_DISPLAY}</span>
          </a>

          <a
            href={TAXI_ZALO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold rounded-xl text-center flex items-center justify-center gap-2 transition text-xs"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Gửi vị trí qua Zalo</span>
          </a>

          <button
            type="button"
            onClick={onClose}
            className="w-full py-2 text-slate-500 hover:text-slate-800 text-xs font-medium transition mt-1"
          >
            Đóng cửa sổ
          </button>
        </div>
      </div>
    </div>
  );
};
