import React from 'react';
import { Phone, MessageSquare, CalendarClock } from 'lucide-react';
import { TAXI_HOTLINE, TAXI_HOTLINE_DISPLAY, TAXI_ZALO_URL } from '../data/taxiData';

interface FloatingCallBarProps {
  onQuickBookClick: () => void;
}

export const FloatingCallBar: React.FC<FloatingCallBarProps> = ({ onQuickBookClick }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-xl px-3 py-2 sm:py-2.5">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-2">
        {/* Direct Call Button (Hotline) */}
        <a
          href={`tel:${TAXI_HOTLINE}`}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 bg-amber-400 hover:bg-amber-300 active:scale-95 text-slate-950 font-extrabold text-sm sm:text-base rounded-xl shadow-sm transition"
        >
          <div className="w-6 h-6 rounded-full bg-slate-950 text-amber-400 flex items-center justify-center">
            <Phone className="w-3.5 h-3.5 fill-amber-400" />
          </div>
          <span className="truncate">Gọi {TAXI_HOTLINE_DISPLAY}</span>
        </a>

        {/* Direct Zalo Button */}
        <a
          href={TAXI_ZALO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-none flex items-center justify-center gap-1.5 py-2.5 px-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm rounded-xl transition shadow-xs"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="hidden xs:inline">Chat</span> Zalo
        </a>

        {/* Scroll to book form */}
        <button
          type="button"
          onClick={onQuickBookClick}
          className="flex-none flex items-center justify-center gap-1.5 py-2.5 px-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm rounded-xl transition shadow-xs"
        >
          <CalendarClock className="w-4 h-4 text-amber-400" />
          <span>Đặt xe</span>
        </button>
      </div>
    </div>
  );
};
