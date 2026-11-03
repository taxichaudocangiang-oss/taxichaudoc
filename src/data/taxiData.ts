export interface PopularRoute {
  id: string;
  name: string;
  tag: string;
  distanceKm: number;
  estTime: string;
  price4Seater: number;
  price7Seater: number;
  highlight: string;
}

export const TAXI_HOTLINE = "0879999646";
export const TAXI_HOTLINE_DISPLAY = "0879 999 646";
export const TAXI_HOTLINE_DOT = "0879.999.646";
export const TAXI_ZALO_URL = "https://zalo.me/0879999646";
export const TAXI_EMAIL = "taxichaudocangiang@gmail.com";
export const TAXI_ADDRESS = "Trung tâm TP. Châu Đốc, Tỉnh An Giang";

export const POPULAR_ROUTES: PopularRoute[] = [
  {
    id: "mieu-ba",
    name: "Miếu Bà Chúa Xứ Núi Sam",
    tag: "Tâm linh số 1",
    distanceKm: 5,
    estTime: "10 - 15 phút",
    price4Seater: 60000,
    price7Seater: 80000,
    highlight: "Đón tại khách sạn/bến xe, đưa đến cổng Miếu Bà, chờ rước về linh hoạt"
  },
  {
    id: "tra-su",
    name: "Rừng Tràm Trà Sư",
    tag: "Sinh thái nổi tiếng",
    distanceKm: 28,
    estTime: "35 - 45 phút",
    price4Seater: 320000,
    price7Seater: 380000,
    highlight: "Đi qua kênh Vĩnh Tế, tham quan cầu tre xuyên rừng & tắc ráng"
  },
  {
    id: "chua-hang",
    name: "Chùa Hang (Phước Điền Tự)",
    tag: "Thắng cảnh Núi Sam",
    distanceKm: 6,
    estTime: "12 - 15 phút",
    price4Seater: 70000,
    price7Seater: 90000,
    highlight: "Ngắm toàn cảnh đồng bằng biên giới Châu Đốc thơ mộng"
  },
  {
    id: "tinh-bien",
    name: "Cửa Khẩu Quốc Tế Tịnh Biên",
    tag: "Mua sắm & Biên giới",
    distanceKm: 25,
    estTime: "30 - 40 phút",
    price4Seater: 280000,
    price7Seater: 340000,
    highlight: "Chợ đầu mối Tịnh Biên, mua sắm hàng miễn thuế và đặc sản Campuchia"
  },
  {
    id: "tri-ton",
    name: "Tri Tôn - Hàng Thốt Nốt Trái Tim",
    tag: "Check-in hot",
    distanceKm: 42,
    estTime: "50 - 60 phút",
    price4Seater: 480000,
    price7Seater: 560000,
    highlight: "Đồi Tà Pạ, Hồ Soài Chek, chùa Xà Tón, đặc sản gà đốt Ô Thum"
  },
  {
    id: "long-xuyen",
    name: "TP. Long Xuyên",
    tag: "Tuyến liên huyện",
    distanceKm: 55,
    estTime: "1 giờ 15 phút",
    price4Seater: 600000,
    price7Seater: 700000,
    highlight: "Tuyến Quốc lộ 91 thông thoáng, xe chạy êm, hỗ trợ khứ hồi trong ngày"
  },
  {
    id: "can-tho",
    name: "Sân Bay Cần Thơ / TP. Cần Thơ",
    tag: "Đưa đón sân bay",
    distanceKm: 115,
    estTime: "2 giờ 30 phút",
    price4Seater: 1200000,
    price7Seater: 1400000,
    highlight: "Đúng giờ chuyến bay, nhận đón từ sảnh sân bay Cần Thơ về Châu Đốc"
  },
  {
    id: "sai-gon",
    name: "Sài Gòn (TP. Hồ Chí Minh)",
    tag: "Liên tỉnh trọn gói",
    distanceKm: 240,
    estTime: "4 giờ 30 phút",
    price4Seater: 2400000,
    price7Seater: 2800000,
    highlight: "Tuyến cao tốc, bao vé cầu đường, tài xế kinh nghiệm chạy đường dài"
  }
];

export const FLEET_DETAILS = [
  {
    type: "4 Chỗ (Sedan)",
    models: "Toyota Vios, Hyundai Accent, Honda City",
    image: "/src/assets/images/car_sedan_4seater_1793677846844.jpg",
    capacity: "Tối đa 4 hành khách + 2 vali",
    priceOpen: "12.000đ / km đầu",
    priceUnder30: "13.000đ / km (từ km 2 - 30)",
    priceOver30: "10.500đ / km (từ km 31 trở đi)",
    roundTripDiscount: "Giảm 50% - 70% chiều về",
    suitedFor: "Cá nhân, cặp đôi, gia đình nhỏ đi chợ, viếng chùa, đi công việc."
  },
  {
    type: "7 Chỗ (MPV / SUV)",
    models: "Mitsubishi Xpander, Toyota Innova, Toyota Veloz",
    image: "/src/assets/images/car_suv_7seater_1793677843690.jpg",
    capacity: "Tối đa 7 hành khách + 3-4 vali",
    priceOpen: "14.000đ / km đầu",
    priceUnder30: "15.000đ / km (từ km 2 - 30)",
    priceOver30: "12.000đ / km (từ km 31 trở đi)",
    roundTripDiscount: "Giảm 50% - 60% chiều về",
    suitedFor: "Đoàn gia đình đông người, chở đồ lễ viếng Bà, hành lý nhiều."
  }
];

export const CORE_BENEFITS = [
  {
    title: "Đón Nhanh 5 - 10 Phút",
    desc: "Tài xế túc trực khắp các phường nội ô Châu Đốc, Bến xe, Núi Sam. Gọi là có xe ngay, không chờ đợi.",
    icon: "Clock"
  },
  {
    title: "Giá Rõ Ràng - Tiết Kiệm",
    desc: "Báo giá trọn gói trước khi khởi hành. Đồng hồ chuẩn, không phát sinh chi phí vô lý, không chém giá khách du lịch.",
    icon: "Receipt"
  },
  {
    title: "Xe Đời Mới Sạch Sẽ",
    desc: "Đội ngũ xe 4-7 chỗ sạch bóng, máy lạnh mát rượi, không mùi thuốc lá, đảm bảo êm ái cho người già và trẻ nhỏ.",
    icon: "Sparkles"
  },
  {
    title: "Tài Xế Địa Phương Thân Thiện",
    desc: "Bác tài Châu Đốc bản địa rành từng ngõ hẻm, sẵn sàng chỉ dẫn quán ăn ngon, đồ cúng lễ Bà chuẩn giá và địa điểm đẹp.",
    icon: "ShieldCheck"
  }
];

export const FAQS = [
  {
    question: "Tôi gọi xe ở Châu Đốc thì bao lâu xe tới đón?",
    answer: "Thông thường xe sẽ có mặt tại điểm đón chỉ từ 5 đến 10 phút sau khi quý khách gọi điện. Đối với khu vực Núi Sam, trung tâm chợ Châu Đốc hay bến xe, thời gian đón cực kỳ nhanh chóng."
  },
  {
    question: "Đi khứ hồi 2 chiều có được giảm giá không?",
    answer: "Có! Quý khách đi 2 chiều trong ngày (như đi viếng Miếu Bà, đi Trà Sư, đi Cần Thơ...) sẽ được giảm từ 50% đến 70% giá cước chiều về kèm thời gian chờ linh hoạt theo thỏa thuận."
  },
  {
    question: "Taxi Châu Đốc có phục vụ ban đêm không?",
    answer: "Dịch vụ hoạt động 24/24 tất cả các ngày trong tuần, kể cả đêm khuya, sáng sớm, ngày Lễ hội Vía Bà Chúa Xứ và dịp Tết Nguyên Đán."
  },
  {
    question: "Tôi có thể hẹn giờ đón trước được không?",
    answer: "Quý khách có thể đặt xe trước bất cứ lúc nào qua số điện thoại 0879 999 646 hoặc Zalo. Tài xế sẽ đến đúng giờ hẹn tại khách sạn, nhà riêng hoặc bến xe."
  }
];
