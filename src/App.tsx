/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Commitments } from './components/Commitments';
import { FleetSection } from './components/FleetSection';
import { PopularRoutes } from './components/PopularRoutes';
import { FareCalculator } from './components/FareCalculator';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingCallBar } from './components/FloatingCallBar';
import { BookingModal } from './components/BookingModal';
import { PopularRoute } from './data/taxiData';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [bookingData, setBookingData] = useState<{
    pickup: string;
    dropoff: string;
    carType: string;
    phone: string;
    roundTrip: boolean;
    estPrice: number;
  } | null>(null);

  const handleBookSuccess = (data: {
    pickup: string;
    dropoff: string;
    carType: string;
    phone: string;
    roundTrip: boolean;
    estPrice: number;
  }) => {
    setBookingData(data);
    setModalOpen(true);
  };

  const handleSelectRoute = (route: PopularRoute) => {
    const heroElem = document.getElementById('hero');
    heroElem?.scrollIntoView({ behavior: 'smooth' });
    setBookingData({
      pickup: 'Trung tâm Châu Đốc / Khách sạn',
      dropoff: route.name,
      carType: 'Xe 4 Chỗ (Sedan)',
      phone: '0879999646',
      roundTrip: false,
      estPrice: route.price4Seater,
    });
    setModalOpen(true);
  };

  const handleSelectCarType = (_type: string) => {
    const heroElem = document.getElementById('hero');
    heroElem?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleQuickBookClick = () => {
    const heroElem = document.getElementById('hero');
    heroElem?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 pb-16 sm:pb-0">
      {/* Top Bar Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero with quick booking and direct call */}
        <Hero onBookSuccess={handleBookSuccess} />

        {/* 4 Core commitments */}
        <Commitments />

        {/* Fleet & Price Table */}
        <FleetSection onSelectCarType={handleSelectCarType} />

        {/* Popular Tourist & Provincial Routes */}
        <PopularRoutes onSelectRoute={handleSelectRoute} />

        {/* Quick interactive Fare Calculator */}
        <FareCalculator />

        {/* FAQs & Direct Contact Block */}
        <FaqSection />
      </main>

      {/* Quiet Footer */}
      <Footer />

      {/* Floating Bottom Quick Action Bar */}
      <FloatingCallBar onQuickBookClick={handleQuickBookClick} />

      {/* Booking Confirmation Popup */}
      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        bookingData={bookingData}
      />
    </div>
  );
}
