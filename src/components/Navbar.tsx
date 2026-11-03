import React, { useState } from 'react';
import { Phone, Menu, X, MessageSquare } from 'lucide-react';
import { TAXI_HOTLINE, TAXI_HOTLINE_DISPLAY, TAXI_ZALO_URL } from '../data/taxiData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Bar 3-Zone Contract */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a href="#hero" className="text-xl font-extrabold tracking-tight text-slate-900 whitespace-nowrap shrink-0 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-black text-sm shadow-xs">
            TX
          </span>
          <span>Taxi Châu Đốc</span>
        </a>

        {/* Zone 2: 4-5 Nav Links (Single-line text) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a href="#dich-vu" className="hover:text-amber-600 transition-colors whitespace-nowrap shrink-0">
            Dịch Vụ Xe
          </a>
          <a href="#bang-gia" className="hover:text-amber-600 transition-colors whitespace-nowrap shrink-0">
            Bảng Giá
          </a>
          <a href="#tuyen-duong" className="hover:text-amber-600 transition-colors whitespace-nowrap shrink-0">
            Tuyến Phổ Biến
          </a>
          <a href="#tinh-cuoc" className="hover:text-amber-600 transition-colors whitespace-nowrap shrink-0">
            Tính Cước Nhanh
          </a>
          <a href="#hoi-dap" className="hover:text-amber-600 transition-colors whitespace-nowrap shrink-0">
            Hỏi Đáp
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action (Hotline call) */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={`tel:${TAXI_HOTLINE}`}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition rounded-lg shadow-sm whitespace-nowrap shrink-0"
          >
            <Phone className="w-4 h-4 fill-slate-950" />
            <span>{TAXI_HOTLINE_DISPLAY}</span>
          </a>

          <a
            href={TAXI_ZALO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition whitespace-nowrap shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Chat Zalo</span>
          </a>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition"
            aria-label="Mở danh mục điều hướng"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 animate-in fade-in duration-150">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-100">
            <a
              href={`tel:${TAXI_HOTLINE}`}
              className="flex items-center justify-center gap-2 py-2.5 px-3 bg-amber-400 font-bold text-slate-950 rounded-lg text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Phone className="w-4 h-4 fill-slate-950" />
              <span>Gọi {TAXI_HOTLINE_DISPLAY}</span>
            </a>
            <a
              href={TAXI_ZALO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 bg-blue-600 font-bold text-white rounded-lg text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Nhắn Zalo</span>
            </a>
          </div>
          <nav className="flex flex-col space-y-2 text-slate-700 text-sm font-medium">
            <a
              href="#dich-vu"
              className="px-2 py-1.5 hover:text-amber-600 rounded transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dịch Vụ Xe 4 & 7 Chỗ
            </a>
            <a
              href="#bang-gia"
              className="px-2 py-1.5 hover:text-amber-600 rounded transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Bảng Giá Cước
            </a>
            <a
              href="#tuyen-duong"
              className="px-2 py-1.5 hover:text-amber-600 rounded transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Các Tuyến Du Lịch Núi Sam & Trà Sư
            </a>
            <a
              href="#tinh-cuoc"
              className="px-2 py-1.5 hover:text-amber-600 rounded transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Ước Tính Cước Phí
            </a>
            <a
              href="#hoi-dap"
              className="px-2 py-1.5 hover:text-amber-600 rounded transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hỏi Đáp & Đặt Xe
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
