import { LangCode } from "@/app/context/LanguageContext";

export interface NavItem {
  label: string;
  href: string;
}

export const languagesList: { code: LangCode; label: string; name: string }[] =
  [
    { code: "en", label: "EN", name: "English" },
    { code: "id", label: "ID", name: "Indonesia" },
    { code: "ja", label: "日本語", name: "日本語" },
    { code: "zh", label: "中文", name: "中文" },
    { code: "th", label: "ไทย", name: "ไทย" },
    { code: "vi", label: "VI", name: "Tiếng Việt" },
  ];

export const navLinksByLang: Record<LangCode, NavItem[]> = {
  en: [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Areas", href: "/#areas" },
    { label: "Reviews", href: "/#reviews" },
    { label: "Book Now", href: "/#booking" },
  ],
  id: [
    { label: "Beranda", href: "/" },
    { label: "Tentang Kami", href: "/#about" },
    { label: "Layanan", href: "/#services" },
    { label: "Area Layanan", href: "/#areas" },
    { label: "Ulasan", href: "/#reviews" },
    { label: "Pesan Sekarang", href: "/#booking" },
  ],
  ja: [
    { label: "ホーム", href: "/" },
    { label: "会社概要", href: "/#about" },
    { label: "サービス", href: "/#services" },
    { label: "対応エリア", href: "/#areas" },
    { label: "口コミ", href: "/#reviews" },
    { label: "予約する", href: "/#booking" },
  ],
  zh: [
    { label: "首页", href: "/" },
    { label: "关于我们", href: "/#about" },
    { label: "服务项目", href: "/#services" },
    { label: "服务区域", href: "/#areas" },
    { label: "客户评价", href: "/#reviews" },
    { label: "立即预约", href: "/#booking" },
  ],
  th: [
    { label: "หน้าแรก", href: "/" },
    { label: "เกี่ยวกับเรา", href: "/#about" },
    { label: "บริการ", href: "/#services" },
    { label: "พื้นที่ให้บริการ", href: "/#areas" },
    { label: "รีวิว", href: "/#reviews" },
    { label: "จองบริการ", href: "/#booking" },
  ],
  vi: [
    { label: "Trang chủ", href: "/" },
    { label: "Về chúng tôi", href: "/#about" },
    { label: "Dịch vụ", href: "/#services" },
    { label: "Khu vực", href: "/#areas" },
    { label: "Đánh giá", href: "/#reviews" },
    { label: "Đặt lịch", href: "/#booking" },
  ],
};

export const contactInfo = {
  phone: "+44 555 777 999",
  email: "support@wcaircon.com",
  operationalHours: "Mon - Sat: 08:00 AM - 06:00 PM",
};

const enContent = {
  hero: {
    badge: "Same-Day Emergency Dispatch Available",
    title: "Fast, Reliable Home Air Conditioning Repairs & Servicing",
    description:
      "Don't let a breakdown ruin your comfort. From emergency repairs to deep chemical cleans and new energy-efficient split systems, our licensed technicians deliver transparent, upfront pricing with zero hidden fees.",
    primaryCta: { text: "Book a Free Quote", href: "#booking" },
    secondaryCta: { text: "Call Us Now", href: `tel:${contactInfo.phone}` },
    image: {
      src: "/img/hero.jpg",
      alt: "WC Aircon licensed technician inspecting and servicing a residential air conditioning unit",
    },
  },
  about: {
    badge: "About WC Aircon",
    heading: "Raising the Standard for Home Air Conditioning Care",
    subheadline:
      "No late arrivals, no vague hourly billing, and zero mess left behind.",
    paragraphs: [
      "WC Aircon was built to eliminate the biggest headaches homeowners face when calling a tradie. Instead of giving you a 4-hour arrival window and a surprise bill at the end, we operate on precision scheduling and transparent flat-rate pricing.",
      "Every technician who enters your home is ARCtick-licensed, background-checked, and equipped with floor protectors and shoe covers—treating your living space with the exact same care we give our own.",
    ],
    floatingBadge: { number: "100%", text: "Upfront Fixed-Price Guarantee" },
    pillars: [
      {
        title: "Punctual Dispatch",
        description:
          "Live SMS tracking so you know the exact minute our van arrives.",
      },
      {
        title: "Spotless Workmanship",
        description:
          "Protective drop sheets and full clean-up after every single job.",
      },
      {
        title: "12-Month Warranty",
        description:
          "Complete peace of mind covering both parts and our labour.",
      },
      {
        title: "All Major Brands",
        description:
          "Certified to service Daikin, Mitsubishi, Fujitsu, LG, and Panasonic.",
      },
    ],
    stats: [
      { value: "12+", label: "Years Local Experience" },
      { value: "4.9★", label: "Average Google Rating" },
      { value: "3,400+", label: "Homes Cooled" },
      { value: "60 Min", label: "Emergency Response" },
    ],
    cta: { text: "Book a Licensed Technician", href: "#booking" },
    image: {
      src: "/img/about.jpg",
      alt: "WC Aircon uniformed technician explaining repair options to a homeowner",
    },
  },
  services: {
    badge: "Comprehensive Solutions",
    heading: "Complete Residential Aircon Services",
    subheading:
      "Whether it's an urgent midnight breakdown or a brand-new multi-split installation, we provide fixed quotes before any work starts.",
    items: [
      {
        title: "Emergency Breakdown Repair",
        tag: "Same-Day Dispatch",
        priceHint: "Fixed Diagnostic & Quote",
        description:
          "Unit blowing warm air, tripping the breaker, or displaying error codes? We carry common parts in our vans for on-the-spot fixes.",
        image: {
          src: "/img/service.jpg",
          alt: "Technician diagnosing an outdoor air conditioning compressor",
        },
        cta: "Book Urgent Repair",
        href: "#booking",
      },
      {
        title: "Deep Hydro-Chemical Wash",
        tag: "Most Popular",
        priceHint: "From $149 / unit",
        description:
          "Full coil sanitization and pressurized bag wash to strip away hidden black mold, allergens, and restore maximum airflow.",
        image: {
          src: "/img/service.jpg",
          alt: "Technician performing a deep chemical wash on a split system indoor unit",
        },
        cta: "Schedule Deep Clean",
        href: "#booking",
      },
      {
        title: "New Split System Installation",
        tag: "5-Year Install Warranty",
        priceHint: "Free On-Site Measure",
        description:
          "Supply and neat back-to-back installation of whisper-quiet, energy-efficient inverter systems sized perfectly for your rooms.",
        image: {
          src: "/img/service.jpg",
          alt: "Newly installed modern white wall-mounted split system air conditioner",
        },
        cta: "Get Free Install Quote",
        href: "#booking",
      },
      {
        title: "Refrigerant Leak Detection & Regas",
        tag: "ARCtick Certified",
        priceHint: "Pressure Tested",
        description:
          "Precision electronic leak detection, pipe brazing, and R32 / R410A refrigerant recharging to stop ice buildup and weak cooling.",
        image: {
          src: "/img/service.jpg",
          alt: "Digital manifold gauges connected to an AC unit checking refrigerant pressure",
        },
        cta: "Book Gas Check",
        href: "#booking",
      },
      {
        title: "Water Leak & Drain Unblocking",
        tag: "Fast Fix",
        priceHint: "No-Mess Guarantee",
        description:
          "Stop water dripping down your interior walls. We flush blocked condensate drains, sanitize drip trays, and test drainage flow.",
        image: {
          src: "/img/service.jpg",
          alt: "Technician clearing and testing an air conditioner condensate drain line",
        },
        cta: "Fix Water Leak",
        href: "#booking",
      },
      {
        title: "Annual Preventive Care Plan",
        tag: "Save 15% on Parts",
        priceHint: "Pre-Summer Tune-Up",
        description:
          "Complete 18-point mechanical, electrical, and thermostat inspection to prevent costly breakdowns before peak summer heat hits.",
        image: {
          src: "/img/service.jpg",
          alt: "Technician inspecting aircon filters and electrical terminals",
        },
        cta: "Book Annual Tune-Up",
        href: "#booking",
      },
    ],
  },
  areas: {
    badge: "Service Coverage",
    heading: "Areas We Serve Across the Metro Region",
    subheading:
      "Our mobile vans are stationed across key suburbs for rapid same-day dispatch without extra travel fees.",
    suburbs: [
      "Northbridge",
      "Westwood",
      "Oak Park",
      "Riverside",
      "Southbank",
      "Eastvale",
      "Bayside",
      "Highland Park",
      "Meadowbrook",
      "Sunnyvale",
      "Greenwich",
      "Harbor View",
    ],
    note: "Not sure if your suburb is covered? Give our dispatch team a quick call to confirm availability.",
    cta: { text: "Check Your Suburb Availability", href: "#booking" },
  },
  testimonials: {
    badge: "Verified Google Reviews",
    heading: "Rated 4.9★ by Local Homeowners",
    subheading:
      "Real feedback from customers who trusted WC Aircon with their home comfort.",
    overallRating: "4.9",
    basedOnLabel: "Based on",
    totalReviews: "340+ Google Reviews",
    reviews: [
      {
        name: "Sarah Jenkins",
        suburb: "Oak Park",
        service: "Emergency Breakdown Repair",
        rating: 5,
        timeAgo: "2 weeks ago",
        text: "Our split system died during a 36°C heatwave. WC Aircon arrived within 2 hours, diagnosed a faulty capacitor, quoted an exact flat price upfront, and had cold air blowing again in 40 minutes.",
        googleMapsUrl: "https://maps.google.com/?q=WC+Aircon+Oak+Park",
      },
      {
        name: "Marcus Thorne",
        suburb: "Riverside",
        service: "Deep Chemical Cleaning",
        rating: 5,
        timeAgo: "1 month ago",
        text: "Super tidy and professional. They used drop sheets everywhere so not a single drop of water hit our floorboards. Our two units smell fresh and cool twice as fast now.",
        googleMapsUrl: "https://maps.google.com/?q=WC+Aircon+Riverside",
      },
      {
        name: "Elena Rostova",
        suburb: "Bayside",
        service: "New System Installation",
        rating: 5,
        timeAgo: "3 weeks ago",
        text: "Zero hidden charges. The quote we received on Tuesday was the exact amount on the invoice. Neat pipework outside and they walked me through how to use the smart timer.",
        googleMapsUrl: "https://maps.google.com/?q=WC+Aircon+Bayside",
      },
      {
        name: "Liam O'Connor",
        suburb: "Sunnyvale",
        service: "Routine Maintenance / Gas Check",
        rating: 5,
        timeAgo: "2 months ago",
        text: "Prompt arrival and extremely thorough maintenance service. They checked the refrigerant gas levels and cleaned out the filters completely. Great communication throughout.",
        googleMapsUrl: "https://maps.google.com/?q=WC+Aircon+Sunnyvale",
      },
      {
        name: "Chloe Henderson",
        suburb: "Greenwich",
        service: "Emergency Breakdown Repair",
        rating: 5,
        timeAgo: "3 weeks ago",
        text: "Lifesavers! Woke up to a leaking indoor unit right above our living room sofa. They managed to fit us in for an urgent callout same day and fixed the drainage blockage.",
        googleMapsUrl: "https://maps.google.com/?q=WC+Aircon+Greenwich",
      },
      {
        name: "David Vance",
        suburb: "Harbor View",
        service: "New System Installation",
        rating: 5,
        timeAgo: "1 month ago",
        text: "Replaced our old noisy units with modern inverter systems. The team was efficient, left the place spotless, and the house has never felt more comfortable during hot days.",
        googleMapsUrl: "https://maps.google.com/?q=WC+Aircon+Harbor+View",
      },
    ],
  },
  booking: {
    badge: "Fast Online Booking",
    heading: "Book Your Aircon Service in 60 Seconds",
    subheading:
      "Tell us what you need and our dispatch team will confirm your appointment slot within 15 minutes.",
    urgentCallLabel: "Need Urgent Assistance? Call Dispatch",
    formLabels: {
      name: "Full Name *",
      namePlaceholder: "John Smith",
      phone: "Phone Number *",
      phonePlaceholder: "0400 000 000",
      suburb: "Suburb / Postcode *",
      suburbPlaceholder: "e.g. Oak Park",
      service: "Service Needed",
      urgency: "How Urgent Is This?",
      notes: "Brief Issue Description (Optional)",
      notesPlaceholder:
        "e.g. Split system in living room is blowing warm air...",
    },
    successState: {
      title: "Quote Request Received!",
      thanks: "Thanks",
      desc1: "Our dispatch team will call or text",
      desc2: "within 15 minutes to confirm your",
      resetBtn: "Submit another request",
    },
    serviceOptions: [
      "Emergency Breakdown Repair",
      "Deep Hydro-Chemical Wash",
      "New Split System Installation",
      "Refrigerant Leak Detection & Regas",
      "Water Leak & Drain Unblocking",
      "Annual Preventive Care Plan",
    ],
    urgencyOptions: [
      "Urgent (Same-Day Dispatch)",
      "Within 2–3 Days",
      "Flexible / Just a Free Quote",
    ],
    submitText: "Request My Free Quote",
    disclaimer:
      "No obligation. Upfront pricing confirmed before any work begins.",
  },
  footer: {
    description:
      "Licensed residential air conditioning specialists delivering honest upfront pricing, clean workmanship, and same-day repairs.",
    license: "ARCtick Licensed & Fully Insured • Lic #AU-49281",
    navTitle: "Navigation",
    servicesTitle: "Services",
    contactTitle: "Contact Dispatch",
    privacyLabel: "Privacy Policy",
    termsLabel: "Terms of Service",
    quickLinks: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/#about" },
      { label: "Our Services", href: "/#services" },
      { label: "Service Areas", href: "/#areas" },
      { label: "Book Online", href: "/#booking" },
    ],
    serviceLinks: [
      { label: "Emergency Breakdown Repair", href: "/#services" },
      { label: "Deep Hydro-Chemical Wash", href: "/#services" },
      { label: "Split System Installation", href: "/#services" },
      { label: "Refrigerant Leak & Regas", href: "/#services" },
    ],
    copyright: "© 2026 WC Aircon. All rights reserved.",
  },
};

export type LandingContentType = typeof enContent;

export const landingContentByLang: Record<LangCode, LandingContentType> = {
  en: enContent,
  id: {
    hero: {
      badge: "Layanan Darurat Hari yang Sama Tersedia",
      title: "Perbaikan & Servis AC Rumah yang Cepat dan Terpercaya",
      description:
        "Jangan biarkan AC rusak mengganggu kenyamanan Anda. Mulai dari perbaikan darurat, cuci kimia mendalam, hingga pemasangan unit split hemat energi, teknisi berlisensi kami memberikan harga transparan di awal tanpa biaya tersembunyi.",
      primaryCta: { text: "Minta Penawaran Gratis", href: "#booking" },
      secondaryCta: {
        text: "Hubungi Sekarang",
        href: `tel:${contactInfo.phone}`,
      },
      image: enContent.hero.image,
    },
    about: {
      badge: "Tentang WC Aircon",
      heading: "Meningkatkan Standar Perawatan AC Rumah Anda",
      subheadline:
        "Tanpa keterlambatan, tanpa hitungan per jam yang membingungkan, dan tanpa kotoran tersisa.",
      paragraphs: [
        "WC Aircon hadir untuk menghilangkan masalah terbesar pemilik rumah saat memanggil teknisi. Alih-alih memberi jendela kedatangan 4 jam dan tagihan mengejutkan di akhir, kami bekerja dengan jadwal presisi dan tarif tetap yang transparan.",
        "Setiap teknisi yang masuk ke rumah Anda berlisensi resmi ARCtick, terverifikasi, dan dilengkapi pelindung lantai serta penutup sepatu—merawat rumah Anda dengan sepenuh hati.",
      ],
      floatingBadge: { number: "100%", text: "Jaminan Harga Tetap di Awal" },
      pillars: [
        {
          title: "Kedatangan Tepat Waktu",
          description:
            "Pelacakan SMS langsung agar Anda tahu menit pasti armada kami tiba.",
        },
        {
          title: "Pengerjaan Bersih",
          description:
            "Alas pelindung lantai dan pembersihan menyeluruh setelah setiap pekerjaan.",
        },
        {
          title: "Garansi 12 Bulan",
          description:
            "Ketenangan penuh yang mencakup suku cadang maupun jasa pengerjaan.",
        },
        {
          title: "Semua Merek Utama",
          description:
            "Tersertifikasi untuk menangani Daikin, Mitsubishi, Fujitsu, LG, dan Panasonic.",
        },
      ],
      stats: [
        { value: "12+", label: "Tahun Pengalaman" },
        { value: "4.9★", label: "Rating Rata-Rata Google" },
        { value: "3,400+", label: "Rumah Terlayani" },
        { value: "60 Mnt", label: "Respons Darurat" },
      ],
      cta: { text: "Pesan Teknisi Berlisensi", href: "#booking" },
      image: enContent.about.image,
    },
    services: {
      badge: "Solusi Menyeluruh",
      heading: "Layanan AC Residensial Lengkap",
      subheading:
        "Baik perbaikan mendadak maupun pemasangan unit multi-split baru, kami memberikan harga pasti sebelum pekerjaan dimulai.",
      items: [
        {
          title: "Perbaikan Kerusakan Darurat",
          tag: "Kunjungan Hari Ini",
          priceHint: "Diagnosa & Harga Tetap",
          description:
            "AC mengeluarkan angin panas, memutus sekring, atau muncul kode error? Kami membawa suku cadang utama di mobil untuk perbaikan langsung.",
          image: enContent.services.items[0].image,
          cta: "Pesan Perbaikan Darurat",
          href: "#booking",
        },
        {
          title: "Cuci Hidro-Kimia Mendalam",
          tag: "Paling Populer",
          priceHint: "Mulai $149 / unit",
          description:
            "Sanitasi koil menyeluruh dan pencucian bertekanan untuk menghilangkan jamur hitam, alergen, dan mengembalikan embusan angin maksimal.",
          image: enContent.services.items[1].image,
          cta: "Jadwalkan Cuci AC",
          href: "#booking",
        },
        {
          title: "Pemasangan AC Split Baru",
          tag: "Garansi Pasang 5 Tahun",
          priceHint: "Survei Lokasi Gratis",
          description:
            "Pengadaan dan pemasangan rapi sistem inverter hemat energi yang senyap dan disesuaikan dengan ukuran ruangan Anda.",
          image: enContent.services.items[2].image,
          cta: "Minta Penawaran Pasang",
          href: "#booking",
        },
        {
          title: "Deteksi Kebocoran & Isi Freon",
          tag: "Bersertifikat ARCtick",
          priceHint: "Uji Tekanan Presisi",
          description:
            "Deteksi kebocoran elektronik, pengelasan pipa, serta pengisian ulang freon R32 / R410A untuk mencegah bunga es dan AC kurang dingin.",
          image: enContent.services.items[3].image,
          cta: "Pesan Cek Freon",
          href: "#booking",
        },
        {
          title: "Perbaikan AC Bocor & Saluran Air",
          tag: "Penanganan Cepat",
          priceHint: "Jaminan Tanpa Kotor",
          description:
            "Hentikan tetesan air di dinding ruangan Anda. Kami membilas saluran pembuangan tersumbat, membersihkan bak air, dan menguji aliran.",
          image: enContent.services.items[4].image,
          cta: "Atasi Kebocoran Air",
          href: "#booking",
        },
        {
          title: "Paket Perawatan Berkala Tahunan",
          tag: "Hemat 15% Suku Cadang",
          priceHint: "Tune-Up Pra-Musim Panas",
          description:
            "Inspeksi mekanis, kelistrikan, dan termostat 18 titik untuk mencegah kerusakan mahal sebelum cuaca panas ekstrem tiba.",
          image: enContent.services.items[5].image,
          cta: "Pesan Perawatan Tahunan",
          href: "#booking",
        },
      ],
    },
    areas: {
      badge: "Cakupan Wilayah",
      heading: "Area Layanan Kami di Seluruh Wilayah Metro",
      subheading:
        "Armada mobil kami bersiaga di berbagai kawasan utama untuk pengiriman cepat di hari yang sama tanpa biaya perjalanan tambahan.",
      suburbs: enContent.areas.suburbs,
      note: "Belum yakin apakah area Anda terjangkau? Hubungi tim pengiriman kami untuk konfirmasi ketersediaan.",
      cta: { text: "Cek Ketersediaan Area Anda", href: "#booking" },
    },
    testimonials: {
      badge: "Ulasan Google Terverifikasi",
      heading: "Dinilai 4.9★ oleh Pemilik Rumah Lokal",
      subheading:
        "Ulasan nyata dari pelanggan yang mempercayakan kenyamanan rumah mereka kepada WC Aircon.",
      overallRating: "4.9",
      basedOnLabel: "Berdasarkan",
      totalReviews: "340+ Ulasan Google",
      reviews: [
        {
          name: "Sarah Jenkins",
          suburb: "Oak Park",
          service: "Perbaikan Kerusakan Darurat",
          rating: 5,
          timeAgo: "2 minggu lalu",
          text: "AC split kami mati saat gelombang panas 36°C. WC Aircon tiba dalam 2 jam, menemukan kapasitor rusak, memberi harga pasti di awal, dan udara dingin kembali dalam 40 menit.",
          googleMapsUrl: "https://maps.google.com/?q=WC+Aircon+Oak+Park",
        },
        {
          name: "Marcus Thorne",
          suburb: "Riverside",
          service: "Cuci Kimia Mendalam",
          rating: 5,
          timeAgo: "1 bulan lalu",
          text: "Sangat rapi dan profesional. Mereka memakai alas pelindung di mana-mana sehingga tidak setetes pun air mengenai lantai kayu kami. Dua unit kami kini wangi dan dingin dua kali lebih cepat.",
          googleMapsUrl: "https://maps.google.com/?q=WC+Aircon+Riverside",
        },
        {
          name: "Elena Rostova",
          suburb: "Bayside",
          service: "Pemasangan Sistem Baru",
          rating: 5,
          timeAgo: "3 minggu lalu",
          text: "Tanpa biaya tersembunyi. Penawaran yang kami terima hari Selasa persis sama dengan total tagihan. Pipa luar terpasang sangat rapi dan mereka mengajari cara pakai timer pintarnya.",
          googleMapsUrl: "https://maps.google.com/?q=WC+Aircon+Bayside",
        },
        {
          name: "Liam O'Connor",
          suburb: "Sunnyvale",
          service: "Perawatan Rutin / Cek Freon",
          rating: 5,
          timeAgo: "2 bulan lalu",
          text: "Datang tepat waktu dan servis perawatannya sangat teliti. Mereka mengecek tekanan freon dan membersihkan filter hingga bersih total. Komunikasi sangat baik.",
          googleMapsUrl: "https://maps.google.com/?q=WC+Aircon+Sunnyvale",
        },
        {
          name: "Chloe Henderson",
          suburb: "Greenwich",
          service: "Perbaikan Kerusakan Darurat",
          rating: 5,
          timeAgo: "3 minggu lalu",
          text: "Penyelamat! Bangun tidur mendapati unit indoor bocor tepat di atas sofa ruang tamu. Mereka berhasil menjadwalkan kunjungan darurat di hari yang sama dan memperbaiki sumbatannya.",
          googleMapsUrl: "https://maps.google.com/?q=WC+Aircon+Greenwich",
        },
        {
          name: "David Vance",
          suburb: "Harbor View",
          service: "Pemasangan Sistem Baru",
          rating: 5,
          timeAgo: "1 bulan lalu",
          text: "Mengganti unit lama kami yang berisik dengan sistem inverter modern. Tim bekerja sangat efisien, meninggalkan rumah tetap bersih, dan ruangan terasa jauh lebih sejuk.",
          googleMapsUrl: "https://maps.google.com/?q=WC+Aircon+Harbor+View",
        },
      ],
    },
    booking: {
      badge: "Pemesanan Online Cepat",
      heading: "Pesan Layanan AC Anda dalam 60 Detik",
      subheading:
        "Beri tahu kebutuhan Anda dan tim kami akan mengonfirmasi jadwal kedatangan dalam 15 menit.",
      urgentCallLabel: "Butuh Bantuan Darurat? Hubungi Tim Kami",
      formLabels: {
        name: "Nama Lengkap *",
        namePlaceholder: "Budi Santoso",
        phone: "Nomor Telepon *",
        phonePlaceholder: "0400 000 000",
        suburb: "Area / Kode Pos *",
        suburbPlaceholder: "mis. Oak Park",
        service: "Layanan yang Dibutuhkan",
        urgency: "Seberapa Mendesak?",
        notes: "Deskripsi Singkat Masalah (Opsional)",
        notesPlaceholder:
          "mis. AC di ruang tamu hanya mengeluarkan angin biasa...",
      },
      successState: {
        title: "Permintaan Penawaran Diterima!",
        thanks: "Terima kasih",
        desc1: "Tim kami akan menelepon atau mengirim pesan ke",
        desc2: "dalam 15 menit untuk mengonfirmasi layanan",
        resetBtn: "Kirim permintaan lainnya",
      },
      serviceOptions: [
        "Perbaikan Kerusakan Darurat",
        "Cuci Hidro-Kimia Mendalam",
        "Pemasangan AC Split Baru",
        "Deteksi Kebocoran & Isi Freon",
        "Perbaikan AC Bocor & Saluran Air",
        "Paket Perawatan Berkala Tahunan",
      ],
      urgencyOptions: [
        "Darurat (Kunjungan Hari Ini)",
        "Dalam 2–3 Hari",
        "Fleksibel / Tanya Harga Gratis",
      ],
      submitText: "Minta Penawaran Gratis",
      disclaimer:
        "Tanpa kewajiban. Harga pasti dikonfirmasi sebelum pekerjaan dimulai.",
    },
    footer: {
      description:
        "Spesialis pendingin ruangan residensial berlisensi yang memberikan harga transparan di awal, pengerjaan bersih, dan perbaikan di hari yang sama.",
      license: "Berlisensi ARCtick & Diasuransikan Penuh • Lic #AU-49281",
      navTitle: "Navigasi",
      servicesTitle: "Layanan",
      contactTitle: "Kontak Layanan",
      privacyLabel: "Kebijakan Privasi",
      termsLabel: "Syarat & Ketentuan",
      quickLinks: [
        { label: "Beranda", href: "/" },
        { label: "Tentang Kami", href: "/#about" },
        { label: "Layanan Kami", href: "/#services" },
        { label: "Area Layanan", href: "/#areas" },
        { label: "Pesan Online", href: "/#booking" },
      ],
      serviceLinks: [
        { label: "Perbaikan Kerusakan Darurat", href: "/#services" },
        { label: "Cuci Hidro-Kimia Mendalam", href: "/#services" },
        { label: "Pemasangan AC Split Baru", href: "/#services" },
        { label: "Deteksi Kebocoran & Isi Freon", href: "/#services" },
      ],
      copyright: "© 2026 WC Aircon. Hak cipta dilindungi undang-undang.",
    },
  },
  ja: {
    hero: {
      badge: "即日緊急出動に対応",
      title: "迅速で信頼できる家庭用エアコン修理・クリーニング",
      description:
        "エアコンの故障で快適さを損なわないでください。緊急修理から徹底的な高圧薬品洗浄、最新の省エネエアコン設置まで、有資格の技術者が隠れた費用のない明確な事前見積もりをご提供します。",
      primaryCta: { text: "無料見積もりを予約", href: "#booking" },
      secondaryCta: {
        text: "今すぐ電話する",
        href: `tel:${contactInfo.phone}`,
      },
      image: enContent.hero.image,
    },
    about: {
      badge: "WC Airconについて",
      heading: "家庭用エアコンケアの基準を引き上げる",
      subheadline:
        "遅刻なし、不明瞭な時間制請求なし、作業後の汚れも一切残しません。",
      paragraphs: [
        "WC Airconは、業者を呼ぶ際にお客様が抱える最大の不満を解消するために設立されました。4時間もの曖昧な到着枠や作業後の追加請求ではなく、正確なスケジュール管理と明瞭な定額料金制を採用しています。",
        "ご自宅に伺うすべての技術者はARCtickライセンスと身元確認を完了しており、床保護シートとシューズカバーを徹底使用し、大切なお住まいを丁寧に扱います。",
      ],
      floatingBadge: { number: "100%", text: "事前定額料金保証" },
      pillars: [
        {
          title: "時間厳守の派遣",
          description:
            "SMSライブ追跡により、作業車の正確な到着時刻が分かります。",
        },
        {
          title: "清潔な作業品質",
          description:
            "養生シートを使用し、すべての作業後に徹底した清掃を行います。",
        },
        {
          title: "12ヶ月間の保証",
          description: "部品と作業工賃の両方をカバーする安心の保証制度です。",
        },
        {
          title: "主要全メーカー対応",
          description:
            "ダイキン、三菱、富士通、LG、パナソニックの認定技術者が対応。",
        },
      ],
      stats: [
        { value: "12+", label: "年の地域実績" },
        { value: "4.9★", label: "Google平均評価" },
        { value: "3,400+", label: "件の施工実績" },
        { value: "60分", label: "緊急対応スピード" },
      ],
      cta: { text: "有資格技術者を予約する", href: "#booking" },
      image: enContent.about.image,
    },
    services: {
      badge: "総合ソリューション",
      heading: "家庭用エアコンのトータルサービス",
      subheading:
        "深夜の緊急故障から最新のマルチエアコン設置まで、作業開始前に必ず確定見積もりをご提示します。",
      items: [
        {
          title: "緊急故障修理",
          tag: "即日対応",
          priceHint: "定額診断＆お見積もり",
          description:
            "温風しか出ない、ブレーカーが落ちる、エラーコードが表示されるなどのトラブルに主要部品を常備した車両で即日対応します。",
          image: enContent.services.items[0].image,
          cta: "緊急修理を予約",
          href: "#booking",
        },
        {
          title: "高圧薬品ディープ洗浄",
          tag: "一番人気",
          priceHint: "$149〜 / 1台",
          description:
            "熱交換器の除菌と専用カバーによる高圧洗浄で、内部の黒カビやアレルゲンを除去し、風量と冷房効率を回復させます。",
          image: enContent.services.items[1].image,
          cta: "洗浄を予約する",
          href: "#booking",
        },
        {
          title: "新規エアコン取り付け工事",
          tag: "5年間工事保証",
          priceHint: "現地調査無料",
          description:
            "お部屋の広さに最適な静音・省エネインバーターエアコンの販売から美しい配管仕上げの設置工事まで一貫対応します。",
          image: enContent.services.items[2].image,
          cta: "無料設置見積もり",
          href: "#booking",
        },
        {
          title: "冷媒ガス漏れ点検・補充",
          tag: "ARCtick認定",
          priceHint: "耐圧テスト実施",
          description:
            "高精度な電子リーク検知器による漏れ特定、配管溶接修理、およびR32 / R410A冷媒ガスの適正補充を行います。",
          image: enContent.services.items[3].image,
          cta: "ガス点検を予約",
          href: "#booking",
        },
        {
          title: "水漏れ・ドレン詰まり解消",
          tag: "スピード解決",
          priceHint: "汚さない保証",
          description:
            "室内機からの水漏れを即座に解決。詰まったドレンホースの高圧洗浄、ドレンパンの除菌、排水テストを実施します。",
          image: enContent.services.items[4].image,
          cta: "水漏れ修理を依頼",
          href: "#booking",
        },
        {
          title: "年間予防メンテナンスプラン",
          tag: "部品代15%OFF",
          priceHint: "夏前の定期点検",
          description:
            "真夏のピーク前に高額な故障を防ぐため、機械・電気系統・サーモスタットの18項目を徹底点検します。",
          image: enContent.services.items[5].image,
          cta: "定期点検を予約",
          href: "#booking",
        },
      ],
    },
    areas: {
      badge: "対応エリア",
      heading: "メトロ地域全域のサービス対応エリア",
      subheading:
        "主要な郊外エリアにサービスカーを配備しており、追加出張費なしで迅速な即日対応が可能です。",
      suburbs: enContent.areas.suburbs,
      note: "お住まいの地域が対象かご不明な場合は、お気軽にお電話でお問い合わせください。",
      cta: { text: "対応エリアを確認する", href: "#booking" },
    },
    testimonials: {
      badge: "認証済みGoogleレビュー",
      heading: "地域の皆様から 4.9★ の高評価",
      subheading:
        "WC Airconに快適な空間づくりをお任せいただいたお客様からのリアルな声です。",
      overallRating: "4.9",
      basedOnLabel: "評価件数",
      totalReviews: "340件以上のGoogleレビュー",
      reviews: [
        {
          name: "Sarah Jenkins",
          suburb: "Oak Park",
          service: "緊急故障修理",
          rating: 5,
          timeAgo: "2週間前",
          text: "36℃の猛暑日にエアコンが故障しましたが、2時間以内に到着してコンデンサの不具合を特定。事前に正確な定額料金を提示してくれ、40分で冷風が戻りました。",
          googleMapsUrl: "https://maps.google.com/?q=WC+Aircon+Oak+Park",
        },
        {
          name: "Marcus Thorne",
          suburb: "Riverside",
          service: "高圧薬品ディープ洗浄",
          rating: 5,
          timeAgo: "1ヶ月前",
          text: "非常に丁寧でプロフェッショナルでした。床全体に養生シートを敷いてくれたので水滴一つ落ちず、2台のエアコンが新品のように爽やかで2倍速く冷えるようになりました。",
          googleMapsUrl: "https://maps.google.com/?q=WC+Aircon+Riverside",
        },
        {
          name: "Elena Rostova",
          suburb: "Bayside",
          service: "新規エアコン取り付け",
          rating: 5,
          timeAgo: "3週間前",
          text: "追加料金は一切ありませんでした。火曜日の見積もり通りの金額で、屋外の配管も非常に美しく仕上げてくれました。スマートタイマーの使い方も親切に教えてくれました。",
          googleMapsUrl: "https://maps.google.com/?q=WC+Aircon+Bayside",
        },
        {
          name: "Liam O'Connor",
          suburb: "Sunnyvale",
          service: "定期メンテナンス・ガス点検",
          rating: 5,
          timeAgo: "2ヶ月前",
          text: "時間通りに到着し、非常に丁寧なメンテナンスをしてくれました。冷媒ガス圧の確認からフィルターの完全洗浄まで完璧で、終始安心できました。",
          googleMapsUrl: "https://maps.google.com/?q=WC+Aircon+Sunnyvale",
        },
        {
          name: "Chloe Henderson",
          suburb: "Greenwich",
          service: "緊急故障修理",
          rating: 5,
          timeAgo: "3週間前",
          text: "本当に助かりました！朝起きるとリビングのソファの真上の室内機から水漏れしていましたが、当日中に緊急枠で対応してドレンの詰まりを直してくれました。",
          googleMapsUrl: "https://maps.google.com/?q=WC+Aircon+Greenwich",
        },
        {
          name: "David Vance",
          suburb: "Harbor View",
          service: "新規エアコン取り付け",
          rating: 5,
          timeAgo: "1ヶ月前",
          text: "古くてうるさいエアコンを最新のインバーター式に交換しました。作業はスピーディーで部屋もピカピカのまま、暑い日でも驚くほど快適になりました。",
          googleMapsUrl: "https://maps.google.com/?q=WC+Aircon+Harbor+View",
        },
      ],
    },
    booking: {
      badge: "60秒オンライン予約",
      heading: "わずか60秒でエアコンサービスを予約",
      subheading:
        "ご希望の内容をお知らせいただければ、15分以内に担当チームより予約枠をご連絡いたします。",
      urgentCallLabel: "お急ぎですか？お電話でのご依頼はこちら",
      formLabels: {
        name: "お名前 *",
        namePlaceholder: "山田 太郎",
        phone: "電話番号 *",
        phonePlaceholder: "0400 000 000",
        suburb: "地域・郵便番号 *",
        suburbPlaceholder: "例: Oak Park",
        service: "ご希望のサービス",
        urgency: "ご希望の対応時期",
        notes: "症状の詳細（任意）",
        notesPlaceholder: "例: リビングのエアコンから冷たい風が出ない...",
      },
      successState: {
        title: "お見積もり依頼を受け付けました！",
        thanks: "ありがとうございます、",
        desc1: "15分以内に担当チームよりお電話またはSMSにて",
        desc2: "へご連絡し、以下の内容を確認いたします：",
        resetBtn: "別の依頼を送信する",
      },
      serviceOptions: [
        "緊急故障修理",
        "高圧薬品ディープ洗浄",
        "新規エアコン取り付け工事",
        "冷媒ガス漏れ点検・補充",
        "水漏れ・ドレン詰まり解消",
        "年間予防メンテナンスプラン",
      ],
      urgencyOptions: [
        "緊急（即日対応希望）",
        "2〜3日以内",
        "急ぎではない・無料見積もりのみ",
      ],
      submitText: "無料見積もりを依頼する",
      disclaimer:
        "お見積もりは無料です。作業開始前に必ず確定料金をご提示します。",
    },
    footer: {
      description:
        "明瞭な事前見積もり、清潔な施工、即日修理を提供する有資格の家庭用エアコン専門業者です。",
      license: "ARCtick認定ライセンス＆賠償責任保険完備 • Lic #AU-49281",
      navTitle: "ナビゲーション",
      servicesTitle: "サービス一覧",
      contactTitle: "お問い合わせ",
      privacyLabel: "プライバシーポリシー",
      termsLabel: "利用規約",
      quickLinks: [
        { label: "ホーム", href: "/" },
        { label: "会社概要", href: "/#about" },
        { label: "サービス", href: "/#services" },
        { label: "対応エリア", href: "/#areas" },
        { label: "オンライン予約", href: "/#booking" },
      ],
      serviceLinks: [
        { label: "緊急故障修理", href: "/#services" },
        { label: "高圧薬品ディープ洗浄", href: "/#services" },
        { label: "新規エアコン取り付け", href: "/#services" },
        { label: "冷媒ガス漏れ点検・補充", href: "/#services" },
      ],
      copyright: "© 2026 WC Aircon. All rights reserved.",
    },
  },
  zh: {
    hero: {
      badge: "支持当日紧急上门服务",
      title: "快速、可靠的家用空调维修与深度保养服务",
      description:
        "别让空调故障影响您的居家舒适。从紧急故障维修、深度化学清洗到全新节能分体式空调安装，我们的持牌技师均提供透明的预先一口价，绝无任何隐形收费。",
      primaryCta: { text: "预约免费报价", href: "#booking" },
      secondaryCta: { text: "立即致电", href: `tel:${contactInfo.phone}` },
      image: enContent.hero.image,
    },
    about: {
      badge: "关于 WC Aircon",
      heading: "树立家用空调护理服务的行业新标杆",
      subheadline: "绝不迟到、绝不按小时模糊计费、施工后绝不留下任何杂乱。",
      paragraphs: [
        "WC Aircon 的创立旨在彻底解决房主在预约维修工时最头疼的问题。我们摒弃了长达4小时的漫长等待窗口和完工后的意外账单，坚持精准预约与透明一口价制度。",
        "每一位进入您家的技师均持有 ARCtick 官方执照并通过严格背景审查，全程配备地板保护垫与鞋套，像爱护自己家一样呵护您的居住空间。",
      ],
      floatingBadge: { number: "100%", text: "预先固定一口价保证" },
      pillars: [
        {
          title: "准时上门调度",
          description: "提供实时短信追踪，让您精确掌握服务车到达的每一分钟。",
        },
        {
          title: "一尘不染的工艺",
          description: "全程铺设防尘保护布，每次完工后均进行彻底清理。",
        },
        {
          title: "12个月质保",
          description: "配件与人工双重保障，让您享受完全无忧的售后体验。",
        },
        {
          title: "全品牌专业认证",
          description: "精通大金、三菱、富士通、LG 及松下等所有主流空调品牌。",
        },
      ],
      stats: [
        { value: "12+", label: "年本地服务经验" },
        { value: "4.9★", label: "Google 平均评分" },
        { value: "3,400+", label: "服务家庭数量" },
        { value: "60分钟", label: "紧急响应速度" },
      ],
      cta: { text: "预约持牌技师", href: "#booking" },
      image: enContent.about.image,
    },
    services: {
      badge: "全方位解决方案",
      heading: "一站式家用空调专业服务",
      subheading:
        "无论是深夜突发故障还是全新多联机安装，我们均在动工前为您提供明确固定报价。",
      items: [
        {
          title: "紧急故障快速维修",
          tag: "当日急速上门",
          priceHint: "固定检测与一口价",
          description:
            "空调吹热风、频繁跳闸或显示故障代码？我们的服务车常备原厂常用配件，现场快速修复。",
          image: enContent.services.items[0].image,
          cta: "预约紧急维修",
          href: "#booking",
        },
        {
          title: "深度水刀化学清洗",
          tag: "最受欢迎",
          priceHint: "$149 / 台起",
          description:
            "全方位蒸发器杀菌与高压接水袋冲洗，彻底清除隐藏黑霉与过敏原，恢复强劲冷风与空气清新。",
          image: enContent.services.items[1].image,
          cta: "预约深度清洗",
          href: "#booking",
        },
        {
          title: "全新分体式空调安装",
          tag: "5年安装质保",
          priceHint: "免费上门测量",
          description:
            "提供超静音、高能效变频空调供应及标准背靠背美观安装，根据房间面积精准匹配冷量。",
          image: enContent.services.items[2].image,
          cta: "获取免费安装报价",
          href: "#booking",
        },
        {
          title: "冷媒检漏与加注雪种",
          tag: "ARCtick 认证",
          priceHint: "专业保压测试",
          description:
            "采用精密电子检漏仪定位漏点、铜管焊接修复及 R32 / R410A 制冷剂加注，解决内机结冰与制冷不足。",
          image: enContent.services.items[3].image,
          cta: "预约冷媒检测",
          href: "#booking",
        },
        {
          title: "内机漏水与排水管疏通",
          tag: "快速修复",
          priceHint: "无污渍保证",
          description:
            "彻底解决空调向室内墙壁滴水问题。我们高压疏通堵塞的冷凝水管、消毒接水盘并测试排水顺畅度。",
          image: enContent.services.items[4].image,
          cta: "预约漏水维修",
          href: "#booking",
        },
        {
          title: "年度预防性保养计划",
          tag: "配件享85折",
          priceHint: "夏季前全面体检",
          description:
            "涵盖机械、电气及温控系统的18项全面检测，在盛夏高温来临前消除高昂故障隐患。",
          image: enContent.services.items[5].image,
          cta: "预约年度保养",
          href: "#booking",
        },
      ],
    },
    areas: {
      badge: "服务覆盖范围",
      heading: "覆盖大都会区的专业空调服务网络",
      subheading:
        "我们的移动服务车驻扎在各大核心社区，实现当日快速调度且不收取额外路费。",
      suburbs: enContent.areas.suburbs,
      note: "不确定您所在的社区是否在覆盖范围内？欢迎随时致电我们的调度中心确认。",
      cta: { text: "查询您所在区域服务", href: "#booking" },
    },
    testimonials: {
      badge: "Google 真实认证评价",
      heading: "本地房主一致给出 4.9★ 高分好评",
      subheading: "来自信任 WC Aircon 守护居家舒适的客户真实反馈。",
      overallRating: "4.9",
      basedOnLabel: "基于",
      totalReviews: "340+ 条 Google 评价",
      reviews: [
        {
          name: "Sarah Jenkins",
          suburb: "Oak Park",
          service: "紧急故障快速维修",
          rating: 5,
          timeAgo: "2周前",
          text: "在36°C高温热浪期间我们的分体式空调突然罢工。WC Aircon 在2小时内赶到，查出电容故障并提前给出明确一口价，40分钟内就恢复了冷风！",
          googleMapsUrl: "https://maps.google.com/?q=WC+Aircon+Oak+Park",
        },
        {
          name: "Marcus Thorne",
          suburb: "Riverside",
          service: "深度水刀化学清洗",
          rating: 5,
          timeAgo: "1个月前",
          text: "非常整洁专业！他们在地板上铺满了保护垫，没有一滴水洒在我们的木地板上。两台空调现在吹出的风非常清新，制冷速度也快了一倍。",
          googleMapsUrl: "https://maps.google.com/?q=WC+Aircon+Riverside",
        },
        {
          name: "Elena Rostova",
          suburb: "Bayside",
          service: "全新分体式空调安装",
          rating: 5,
          timeAgo: "3周前",
          text: "零隐形消费。周二收到的报价和最终账单分毫不差。室外管线走得非常整齐，技师还耐心教我如何使用智能定时功能。",
          googleMapsUrl: "https://maps.google.com/?q=WC+Aircon+Bayside",
        },
        {
          name: "Liam O'Connor",
          suburb: "Sunnyvale",
          service: "常规保养 / 冷媒检测",
          rating: 5,
          timeAgo: "2个月前",
          text: "准时到达，保养服务极其细致。他们检查了制冷剂压力并把过滤网彻底清洗干净，全程沟通非常顺畅。",
          googleMapsUrl: "https://maps.google.com/?q=WC+Aircon+Sunnyvale",
        },
        {
          name: "Chloe Henderson",
          suburb: "Greenwich",
          service: "紧急故障快速维修",
          rating: 5,
          timeAgo: "3周前",
          text: "真是救星！早上醒来发现客厅沙发正上方的内机在漏水，他们当天就为我们安排了紧急上门，迅速疏通了排水管堵塞。",
          googleMapsUrl: "https://maps.google.com/?q=WC+Aircon+Greenwich",
        },
        {
          name: "David Vance",
          suburb: "Harbor View",
          service: "全新分体式空调安装",
          rating: 5,
          timeAgo: "1个月前",
          text: "把家里老旧吵闹的空调换成了现代变频系统。团队效率很高，完工后现场一尘不染，大热天家里从未如此凉爽舒适过。",
          googleMapsUrl: "https://maps.google.com/?q=WC+Aircon+Harbor+View",
        },
      ],
    },
    booking: {
      badge: "60秒极速在线预约",
      heading: "只需60秒即可预约您的空调服务",
      subheading:
        "告诉我们您的需求，我们的调度团队将在15分钟内与您确认上门时间。",
      urgentCallLabel: "需要紧急协助？立即致电调度中心",
      formLabels: {
        name: "您的姓名 *",
        namePlaceholder: "张伟",
        phone: "联系电话 *",
        phonePlaceholder: "0400 000 000",
        suburb: "所在区域 / 邮编 *",
        suburbPlaceholder: "例如: Oak Park",
        service: "所需服务项目",
        urgency: "紧急程度",
        notes: "故障简要描述（选填）",
        notesPlaceholder: "例如：客厅分体式空调只吹热风...",
      },
      successState: {
        title: "报价预约请求已收到！",
        thanks: "感谢您，",
        desc1: "我们的调度团队将在15分钟内致电或发送短信至",
        desc2: "为您确认以下服务预约：",
        resetBtn: "提交另一项预约",
      },
      serviceOptions: [
        "紧急故障快速维修",
        "深度水刀化学清洗",
        "全新分体式空调安装",
        "冷媒检漏与加注雪种",
        "内机漏水与排水管疏通",
        "年度预防性保养计划",
      ],
      urgencyOptions: [
        "非常紧急（当日上门）",
        "2–3天内",
        "时间灵活 / 仅需免费报价",
      ],
      submitText: "获取我的免费报价",
      disclaimer: "无任何强制消费，所有固定价格均在动工前与您确认。",
    },
    footer: {
      description:
        "持牌家用空调专业服务商，提供透明预先定价、整洁施工工艺与当日快速维修。",
      license: "ARCtick 官方持牌与全额保险 • 执照号 #AU-49281",
      navTitle: "网站导航",
      servicesTitle: "核心服务",
      contactTitle: "联系调度中心",
      privacyLabel: "隐私政策",
      termsLabel: "服务条款",
      quickLinks: [
        { label: "首页", href: "/" },
        { label: "关于我们", href: "/#about" },
        { label: "服务项目", href: "/#services" },
        { label: "服务区域", href: "/#areas" },
        { label: "在线预约", href: "/#booking" },
      ],
      serviceLinks: [
        { label: "紧急故障快速维修", href: "/#services" },
        { label: "深度水刀化学清洗", href: "/#services" },
        { label: "全新分体式空调安装", href: "/#services" },
        { label: "冷媒检漏与加注雪种", href: "/#services" },
      ],
      copyright: "© 2026 WC Aircon. 保留所有权利。",
    },
  },
  th: {
    hero: {
      badge: "พร้อมให้บริการฉุกเฉินภายในวันเดียว",
      title: "บริการซ่อมและล้างแอร์บ้าน รวดเร็ว เชื่อถือได้",
      description:
        "อย่าปล่อยให้แอร์เสียมาทำลายความสบายในบ้านของคุณ ตั้งแต่ซ่อมด่วนฉุกเฉิน ล้างแอร์ด้วยน้ำยาฆ่าเชื้อ ไปจนถึงติดตั้งแอร์ระบบอินเวอร์เตอร์ประหยัดไฟ ช่างผู้มีใบอนุญาตของเราแจ้งราคาชัดเจนก่อนเริ่มงาน ไม่มีค่าใช้จ่ายแอบแฝง",
      primaryCta: { text: "ขอใบเสนอราคาฟรี", href: "#booking" },
      secondaryCta: {
        text: "โทรหาเราตอนนี้",
        href: `tel:${contactInfo.phone}`,
      },
      image: enContent.hero.image,
    },
    about: {
      badge: "เกี่ยวกับ WC Aircon",
      heading: "ยกระดับมาตรฐานการดูแลเครื่องปรับอากาศในบ้าน",
      subheadline:
        "ไม่มาสาย ไม่คิดค่าบริการรายชั่วโมงที่คลุมเครือ และไม่ทิ้งคราบสกปรกไว้เบื้องหลัง",
      paragraphs: [
        "WC Aircon ก่อตั้งขึ้นเพื่อแก้ปัญหาที่เจ้าของบ้านกังวลที่สุดเมื่อเรียกช่าง แทนที่จะให้คุณรอคอยนานถึง 4 ชั่วโมงหรือเจอบิลเก็บเงินเพิ่มทีหลัง เราทำงานด้วยตารางเวลาที่แม่นยำและราคาเหมาจ่ายที่โปร่งใส",
        "ช่างเทคนิคทุกคนที่เข้าบ้านคุณมีใบอนุญาต ARCtick ผ่านการตรวจสอบประวัติ และเตรียมผ้าปูกันเปื้อนพร้อมที่คลุมรองเท้า เพื่อดูแลบ้านของคุณอย่างดีที่สุด",
      ],
      floatingBadge: {
        number: "100%",
        text: "รับประกันราคาคงที่ชัดเจนก่อนเริ่มงาน",
      },
      pillars: [
        {
          title: "ตรงต่อเวลา",
          description:
            "ระบบแจ้งเตือน SMS แบบเรียลไทม์ ให้คุณรู้เวลาที่รถบริการจะไปถึงอย่างแม่นยำ",
        },
        {
          title: "งานสะอาดเรียบร้อย",
          description:
            "ปูผ้ากันเปื้อนทุกจุดและทำความสะอาดพื้นที่ให้เรียบร้อยหลังจบงาน",
        },
        {
          title: "รับประกัน 12 เดือน",
          description: "อุ่นใจเต็มที่ด้วยความคุ้มครองทั้งอะไหล่และค่าแรงช่าง",
        },
        {
          title: "รองรับทุกแบรนด์ชั้นนำ",
          description:
            "ผ่านการรับรองการดูแลแอร์ Daikin, Mitsubishi, Fujitsu, LG และ Panasonic",
        },
      ],
      stats: [
        { value: "12+", label: "ปีประสบการณ์ในพื้นที่" },
        { value: "4.9★", label: "คะแนนรีวิวเฉลี่ยบน Google" },
        { value: "3,400+", label: "บ้านที่ไว้วางใจเรา" },
        { value: "60 นาที", label: "เวลาตอบสนองฉุกเฉิน" },
      ],
      cta: { text: "จองช่างผู้มีใบอนุญาต", href: "#booking" },
      image: enContent.about.image,
    },
    services: {
      badge: "บริการครบวงจร",
      heading: "บริการเครื่องปรับอากาศสำหรับที่พักอาศัยอย่างครบครัน",
      subheading:
        "ไม่ว่าจะเป็นงานซ่อมด่วนหรือติดตั้งแอร์ใหม่ทั้งหลัง เราแจ้งราคาที่แน่นอนให้คุณทราบก่อนเริ่มงานเสมอ",
      items: [
        {
          title: "ซ่อมแอร์เสียฉุกเฉิน",
          tag: "บริการด่วนวันเดียว",
          priceHint: "ตรวจเช็กและแจ้งราคาคงที่",
          description:
            "แอร์ไม่เย็น มีแต่ลมร้อน เบรกเกอร์ตัด หรือขึ้นรหัส Error เรามีอะไหล่พื้นฐานพร้อมในรถเพื่อซ่อมแซมให้เสร็จทันที",
          image: enContent.services.items[0].image,
          cta: "จองซ่อมด่วน",
          href: "#booking",
        },
        {
          title: "ล้างแอร์ฆ่าเชื้อแบบล้ำลึก",
          tag: "ยอดนิยมที่สุด",
          priceHint: "เริ่มต้น $149 / เครื่อง",
          description:
            "ทำความสะอาดคอยล์เย็นและล้างด้วยถุงรองน้ำแรงดันสูง ขจัดเชื้อราดำและสารก่อภูมิแพ้ คืนความเย็นฉ่ำและอากาศบริสุทธิ์",
          image: enContent.services.items[1].image,
          cta: "จองคิวล้างแอร์",
          href: "#booking",
        },
        {
          title: "ติดตั้งแอร์ติดผนังเครื่องใหม่",
          tag: "รับประกันงานติดตั้ง 5 ปี",
          priceHint: "สำรวจหน้างานฟรี",
          description:
            "จำหน่ายและติดตั้งแอร์ระบบอินเวอร์เตอร์เสียงเงียบ ประหยัดไฟ เดินท่อสวยงามเรียบร้อย เหมาะสมกับขนาดห้องของคุณ",
          image: enContent.services.items[2].image,
          cta: "ขอใบเสนอราคาติดตั้ง",
          href: "#booking",
        },
        {
          title: "ตรวจเช็กรอยรั่วและเติมน้ำยาแอร์",
          tag: "รับรองโดย ARCtick",
          priceHint: "ทดสอบแรงดันมาตรฐาน",
          description:
            "ตรวจหารอยรั่วด้วยเครื่องมืออิเล็กทรอนิกส์ เชื่อมท่อทองแดง และเติมน้ำยาแอร์ R32 / R410A แก้ปัญหาแอร์เป็นน้ำแข็งและไม่เย็น",
          image: enContent.services.items[3].image,
          cta: "จองเช็กน้ำยาแอร์",
          href: "#booking",
        },
        {
          title: "ซ่อมแอร์น้ำหยดและล้างท่อน้ำทิ้ง",
          tag: "แก้ไขรวดเร็ว",
          priceHint: "รับประกันความสะอาด",
          description:
            "หยุดปัญหาน้ำแอร์หยดเลอะผนังบ้าน เราเป่าล้างท่อน้ำทิ้งที่อุดตัน ฆ่าเชื้อถาดรองน้ำทิ้ง และทดสอบการระบายน้ำอย่างละเอียด",
          image: enContent.services.items[4].image,
          cta: "แจ้งซ่อมแอร์น้ำหยด",
          href: "#booking",
        },
        {
          title: "แผนบำรุงรักษาประจำปี",
          tag: "ลดค่าอะไหล่ 15%",
          priceHint: "ตรวจเช็กก่อนหน้าร้อน",
          description:
            "ตรวจสอบระบบกลไก ไฟฟ้า และเทอร์โมสตัทครบ 18 จุด เพื่อป้องกันความเสียหายค่าใช้จ่ายสูงก่อนถึงช่วงอากาศร้อนจัด",
          image: enContent.services.items[5].image,
          cta: "จองตรวจเช็กประจำปี",
          href: "#booking",
        },
      ],
    },
    areas: {
      badge: "พื้นที่ให้บริการ",
      heading: "พื้นที่ที่เราให้บริการทั่วเขตเมโทร",
      subheading:
        "รถบริการเคลื่อนที่ของเราประจำการอยู่ตามย่านสำคัญต่างๆ เพื่อเข้าถึงหน้างานได้ภายในวันเดียวโดยไม่คิดค่าเดินทางเพิ่ม",
      suburbs: enContent.areas.suburbs,
      note: "ไม่แน่ใจว่าพื้นที่ของคุณอยู่ในเขตบริการหรือไม่? โทรสอบถามทีมงานของเราได้ทันที",
      cta: { text: "ตรวจสอบพื้นที่ให้บริการของคุณ", href: "#booking" },
    },
    testimonials: {
      badge: "รีวิวที่ยืนยันแล้วบน Google",
      heading: "ได้รับคะแนน 4.9★ จากเจ้าของบ้านในพื้นที่",
      subheading:
        "เสียงตอบรับจริงจากลูกค้าที่ไว้วางใจให้ WC Aircon ดูแลความเย็นสบายในบ้าน",
      overallRating: "4.9",
      basedOnLabel: "อ้างอิงจาก",
      totalReviews: "340+ รีวิวบน Google",
      reviews: [
        {
          name: "Sarah Jenkins",
          suburb: "Oak Park",
          service: "ซ่อมแอร์เสียฉุกเฉิน",
          rating: 5,
          timeAgo: "2 สัปดาห์ที่แล้ว",
          text: "แอร์ของเราเสียในช่วงที่อากาศร้อนจัดถึง 36°C ทีม WC Aircon มาถึงภายใน 2 ชั่วโมง ตรวจพบคาปาซิเตอร์เสีย แจ้งราคาชัดเจนก่อนซ่อม และแอร์กลับมาเย็นฉ่ำใน 40 นาที",
          googleMapsUrl: "https://maps.google.com/?q=WC+Aircon+Oak+Park",
        },
        {
          name: "Marcus Thorne",
          suburb: "Riverside",
          service: "ล้างแอร์ฆ่าเชื้อแบบล้ำลึก",
          rating: 5,
          timeAgo: "1 เดือนที่แล้ว",
          text: "ทำงานสะอาดและเป็นมืออาชีพมาก ปูผ้ากันเปื้อนทุกจุดทำให้ไม่มีน้ำหยดลงพื้นไม้เลยแม้แต่หยดเดียว แอร์ทั้งสองเครื่องหอมสดชื่นและเย็นเร็วขึ้นกว่าเดิมเท่าตัว",
          googleMapsUrl: "https://maps.google.com/?q=WC+Aircon+Riverside",
        },
        {
          name: "Elena Rostova",
          suburb: "Bayside",
          service: "ติดตั้งแอร์ติดผนังเครื่องใหม่",
          rating: 5,
          timeAgo: "3 สัปดาห์ที่แล้ว",
          text: "ไม่มีค่าใช้จ่ายแอบแฝงเลย ราคาที่เสนอมาในวันอังคารตรงกับบิลเป๊ะ งานเดินท่อด้านนอกเรียบร้อยมาก และช่างยังสอนวิธีตั้งเวลาอัจฉริยะให้อย่างละเอียด",
          googleMapsUrl: "https://maps.google.com/?q=WC+Aircon+Bayside",
        },
        {
          name: "Liam O'Connor",
          suburb: "Sunnyvale",
          service: "บำรุงรักษาประจำปี / เช็กน้ำยา",
          rating: 5,
          timeAgo: "2 เดือนที่แล้ว",
          text: "มาตรงเวลาและตรวจเช็กอย่างละเอียดมาก ตรวจสอบระดับน้ำยาแอร์และล้างแผ่นกรองจนสะอาดเอี่ยม การสื่อสารดีเยี่ยมตลอดกระบวนการ",
          googleMapsUrl: "https://maps.google.com/?q=WC+Aircon+Sunnyvale",
        },
        {
          name: "Chloe Henderson",
          suburb: "Greenwich",
          service: "ซ่อมแอร์เสียฉุกเฉิน",
          rating: 5,
          timeAgo: "3 สัปดาห์ที่แล้ว",
          text: "ช่วยชีวิตไว้ได้จริงๆ! ตื่นมาเจอแอร์รั่วเหนือโซฟาห้องนั่งเล่นพอดี ทางร้านจัดคิวฉุกเฉินเข้ามาแก้ไขท่อน้ำทิ้งอุดตันให้เสร็จภายในวันเดียวกัน",
          googleMapsUrl: "https://maps.google.com/?q=WC+Aircon+Greenwich",
        },
        {
          name: "David Vance",
          suburb: "Harbor View",
          service: "ติดตั้งแอร์ติดผนังเครื่องใหม่",
          rating: 5,
          timeAgo: "1 เดือนที่แล้ว",
          text: "เปลี่ยนแอร์เก่าเสียงดังเป็นระบบอินเวอร์เตอร์รุ่นใหม่ ทีมงานทำงานไว เก็บกวาดสะอาดเรียบร้อย บ้านเย็นสบายอย่างที่ไม่เคยเป็นมาก่อน",
          googleMapsUrl: "https://maps.google.com/?q=WC+Aircon+Harbor+View",
        },
      ],
    },
    booking: {
      badge: "จองคิวออนไลน์รวดเร็ว",
      heading: "จองบริการล้างและซ่อมแอร์ได้ใน 60 วินาที",
      subheading:
        "แจ้งรายละเอียดบริการที่คุณต้องการ แล้วทีมงานของเราจะติดต่อกลับเพื่อยืนยันคิวภายใน 15 นาที",
      urgentCallLabel: "ต้องการความช่วยเหลือเร่งด่วน? โทรหาศูนย์บริการ",
      formLabels: {
        name: "ชื่อ-นามสกุล *",
        namePlaceholder: "สมชาย ใจดี",
        phone: "เบอร์โทรศัพท์ *",
        phonePlaceholder: "0400 000 000",
        suburb: "ย่านที่พัก / รหัสไปรษณีย์ *",
        suburbPlaceholder: "เช่น Oak Park",
        service: "บริการที่ต้องการ",
        urgency: "ความเร่งด่วน",
        notes: "รายละเอียดอาการเบื้องต้น (ไม่บังคับ)",
        notesPlaceholder: "เช่น แอร์ในห้องนั่งเล่นมีแต่ลมร้อน...",
      },
      successState: {
        title: "ได้รับคำขอใบเสนอราคาเรียบร้อยแล้ว!",
        thanks: "ขอบคุณคุณ",
        desc1: "ทีมงานของเราจะโทรหรือส่งข้อความไปยังเบอร์",
        desc2: "ภายใน 15 นาที เพื่อยืนยันคิวบริการ",
        resetBtn: "ส่งคำขออื่นเพิ่มเติม",
      },
      serviceOptions: [
        "ซ่อมแอร์เสียฉุกเฉิน",
        "ล้างแอร์ฆ่าเชื้อแบบล้ำลึก",
        "ติดตั้งแอร์ติดผนังเครื่องใหม่",
        "ตรวจเช็กรอยรั่วและเติมน้ำยาแอร์",
        "ซ่อมแอร์น้ำหยดและล้างท่อน้ำทิ้ง",
        "แผนบำรุงรักษาประจำปี",
      ],
      urgencyOptions: [
        "ด่วนที่สุด (เข้าบริการภายในวันนี้)",
        "ภายใน 2–3 วัน",
        "ไม่รีบ / ขอใบเสนอราคาฟรี",
      ],
      submitText: "ขอใบเสนอราคาฟรี",
      disclaimer:
        "ไม่มีข้อผูกมัด ยืนยันราคาที่แน่นอนให้ทราบก่อนเริ่มงานทุกครั้ง",
    },
    footer: {
      description:
        "ผู้เชี่ยวชาญด้านเครื่องปรับอากาศที่พักอาศัยที่มีใบอนุญาต มอบราคาที่โปร่งใส งานสะอาดเรียบร้อย และบริการซ่อมด่วนภายในวันเดียว",
      license: "ได้รับใบอนุญาต ARCtick และมีประกันภัยครบถ้วน • Lic #AU-49281",
      navTitle: "เมนูนำทาง",
      servicesTitle: "บริการของเรา",
      contactTitle: "ติดต่อศูนย์บริการ",
      privacyLabel: "นโยบายความเป็นส่วนตัว",
      termsLabel: "ข้อกำหนดการให้บริการ",
      quickLinks: [
        { label: "หน้าแรก", href: "/" },
        { label: "เกี่ยวกับเรา", href: "/#about" },
        { label: "บริการของเรา", href: "/#services" },
        { label: "พื้นที่ให้บริการ", href: "/#areas" },
        { label: "จองออนไลน์", href: "/#booking" },
      ],
      serviceLinks: [
        { label: "ซ่อมแอร์เสียฉุกเฉิน", href: "/#services" },
        { label: "ล้างแอร์ฆ่าเชื้อแบบล้ำลึก", href: "/#services" },
        { label: "ติดตั้งแอร์ติดผนังเครื่องใหม่", href: "/#services" },
        { label: "ตรวจเช็กรอยรั่วและเติมน้ำยาแอร์", href: "/#services" },
      ],
      copyright: "© 2026 WC Aircon. สงวนลิขสิทธิ์",
    },
  },
  vi: {
    hero: {
      badge: "Hỗ trợ điều phối khẩn cấp trong ngày",
      title:
        "Dịch vụ Sửa chữa & Bảo dưỡng Máy lạnh Gia đình Nhanh chóng, Uy tín",
      description:
        "Đừng để sự cố máy lạnh làm gián đoạn sự thoải mái của bạn. Từ sửa chữa khẩn cấp, vệ sinh hóa chất chuyên sâu đến lắp đặt máy lạnh Inverter tiết kiệm điện, kỹ thuật viên có chứng chỉ của chúng tôi luôn báo giá minh bạch từ đầu, không phát sinh chi phí ẩn.",
      primaryCta: { text: "Nhận Báo Giá Miễn Phí", href: "#booking" },
      secondaryCta: { text: "Gọi Ngay", href: `tel:${contactInfo.phone}` },
      image: enContent.hero.image,
    },
    about: {
      badge: "Về WC Aircon",
      heading: "Nâng Tầm Tiêu Chuẩn Chăm Sóc Máy Lạnh Gia Đình",
      subheadline:
        "Không trễ hẹn, không tính phí theo giờ mập mờ và không để lại bừa bộn.",
      paragraphs: [
        "WC Aircon được thành lập để xóa bỏ những phiền toái lớn nhất của chủ nhà khi gọi thợ sửa chữa. Thay vì khung giờ chờ đợi 4 tiếng và hóa đơn bất ngờ lúc thanh toán, chúng tôi làm việc với lịch hẹn chính xác và bảng giá trọn gói minh bạch.",
        "Mọi kỹ thuật viên đến nhà bạn đều có chứng chỉ hành nghề ARCtick, lý lịch rõ ràng, được trang bị tấm lót bảo vệ sàn và bọc giày—trân trọng không gian sống của bạn như chính ngôi nhà của mình.",
      ],
      floatingBadge: {
        number: "100%",
        text: "Cam Kết Báo Giá Cố Định Trước Khi Làm",
      },
      pillars: [
        {
          title: "Điều Phối Đúng Giờ",
          description:
            "Theo dõi SMS trực tiếp giúp bạn biết chính xác từng phút xe kỹ thuật tới.",
        },
        {
          title: "Thi Công Sạch Sẽ",
          description:
            "Sử dụng bạt che bảo vệ và dọn dẹp sạch sẽ sau mỗi công việc.",
        },
        {
          title: "Bảo Hành 12 Tháng",
          description:
            "An tâm tuyệt đối với chính sách bảo hành cả linh kiện lẫn công thợ.",
        },
        {
          title: "Đa Dạng Thương Hiệu",
          description:
            "Chứng nhận sửa chữa Daikin, Mitsubishi, Fujitsu, LG và Panasonic.",
        },
      ],
      stats: [
        { value: "12+", label: "Năm Kinh Nghiệm" },
        { value: "4.9★", label: "Đánh Giá Google" },
        { value: "3,400+", label: "Hộ Gia Đình Phục Vụ" },
        { value: "60 Phút", label: "Phản Hồi Khẩn Cấp" },
      ],
      cta: { text: "Đặt Lịch Kỹ Thuật Viên", href: "#booking" },
      image: enContent.about.image,
    },
    services: {
      badge: "Giải Pháp Toàn Diện",
      heading: "Dịch Vụ Máy Lạnh Dân Dụng Trọn Gói",
      subheading:
        "Dù là sự cố hỏng hóc đột xuất hay lắp đặt hệ thống máy lạnh mới, chúng tôi luôn báo giá cố định trước khi bắt đầu.",
      items: [
        {
          title: "Sửa Chữa Sự Cố Khẩn Cấp",
          tag: "Có Mặt Trong Ngày",
          priceHint: "Kiểm Tra & Báo Giá Cố Định",
          description:
            "Máy lạnh thổi hơi nóng, nhảy aptomat hay báo mã lỗi? Xe lưu động của chúng tôi luôn mang sẵn linh kiện để sửa chữa ngay tại chỗ.",
          image: enContent.services.items[0].image,
          cta: "Đặt Sửa Khẩn Cấp",
          href: "#booking",
        },
        {
          title: "Vệ Sinh Hóa Chất Chuyên Sâu",
          tag: "Phổ Biến Nhất",
          priceHint: "Từ $149 / máy",
          description:
            "Khử khuẩn dàn lạnh toàn diện và xịt rửa áp lực cao giúp loại bỏ nấm mốc đen, tác nhân dị ứng và khôi phục luồng gió mát tối đa.",
          image: enContent.services.items[1].image,
          cta: "Đặt Lịch Vệ Sinh",
          href: "#booking",
        },
        {
          title: "Lắp Đặt Máy Lạnh Mới",
          tag: "Bảo Hành Lắp Đặt 5 Năm",
          priceHint: "Khảo Sát Tận Nơi Miễn Phí",
          description:
            "Cung cấp và lắp đặt thẩm mỹ các dòng máy lạnh Inverter vận hành êm ái, tiết kiệm điện, công suất chuẩn xác cho từng phòng.",
          image: enContent.services.items[2].image,
          cta: "Nhận Báo Giá Lắp Đặt",
          href: "#booking",
        },
        {
          title: "Dò Tìm Rò Rỉ & Nạp Gas Lạnh",
          tag: "Chứng Nhận ARCtick",
          priceHint: "Kiểm Tra Áp Suất Chuẩn",
          description:
            "Dò tìm rò rỉ bằng thiết bị điện tử chính xác, hàn ống đồng và nạp bổ sung gas R32 / R410A khắc phục tình trạng bám tuyết, kém lạnh.",
          image: enContent.services.items[3].image,
          cta: "Đặt Kiểm Tra Gas",
          href: "#booking",
        },
        {
          title: "Xử Lý Chảy Nước & Thông Tắc Ống Thoát",
          tag: "Khắc Phục Nhanh",
          priceHint: "Cam Kết Không Bẩn",
          description:
            "Chấm dứt tình trạng nước nhỏ giọt xuống tường nhà. Chúng tôi thông rửa đường ống thoát nước ngưng, vệ sinh máng nước và kiểm tra độ thoát.",
          image: enContent.services.items[4].image,
          cta: "Sửa Lỗi Chảy Nước",
          href: "#booking",
        },
        {
          title: "Gói Bảo Dưỡng Định Kỳ Hàng Năm",
          tag: "Giảm 15% Linh Kiện",
          priceHint: "Bảo Dưỡng Trước Mùa Hè",
          description:
            "Kiểm tra toàn diện 18 hạng mục cơ khí, điện và cảm biến nhiệt nhằm ngăn ngừa hư hỏng tốn kém trước đỉnh điểm nắng nóng.",
          image: enContent.services.items[5].image,
          cta: "Đặt Bảo Dưỡng Năm",
          href: "#booking",
        },
      ],
    },
    areas: {
      badge: "Phạm Vi Phục Vụ",
      heading: "Khu Vực Phục Vụ Khắp Vùng Đô Thị",
      subheading:
        "Đội xe lưu động của chúng tôi túc trực tại các khu vực trọng điểm để điều phối nhanh trong ngày mà không thu thêm phí di chuyển.",
      suburbs: enContent.areas.suburbs,
      note: "Chưa rõ khu vực của bạn có được hỗ trợ không? Hãy gọi nhanh cho tổng đài để xác nhận.",
      cta: { text: "Kiểm Tra Khu Vực Của Bạn", href: "#booking" },
    },
    testimonials: {
      badge: "Đánh Giá Google Xác Thực",
      heading: "Đạt 4.9★ Từ Các Chủ Nhà Địa Phương",
      subheading:
        "Phản hồi thực tế từ những khách hàng đã tin tưởng giao sự thoải mái của gia đình cho WC Aircon.",
      overallRating: "4.9",
      basedOnLabel: "Dựa trên",
      totalReviews: "340+ Đánh giá Google",
      reviews: [
        {
          name: "Sarah Jenkins",
          suburb: "Oak Park",
          service: "Sửa Chữa Sự Cố Khẩn Cấp",
          rating: 5,
          timeAgo: "2 tuần trước",
          text: "Máy lạnh nhà tôi hỏng đúng đợt nắng nóng 36°C. WC Aircon có mặt trong vòng 2 giờ, phát hiện hỏng tụ điện, báo giá trọn gói rõ ràng từ đầu và máy lạnh mát trở lại sau 40 phút.",
          googleMapsUrl: "https://maps.google.com/?q=WC+Aircon+Oak+Park",
        },
        {
          name: "Marcus Thorne",
          suburb: "Riverside",
          service: "Vệ Sinh Hóa Chất Chuyên Sâu",
          rating: 5,
          timeAgo: "1 tháng trước",
          text: "Cực kỳ gọn gàng và chuyên nghiệp. Họ trải bạt bảo vệ khắp nơi nên không một giọt nước nào rơi xuống sàn gỗ. Hai máy lạnh thơm mát và làm lạnh nhanh gấp đôi.",
          googleMapsUrl: "https://maps.google.com/?q=WC+Aircon+Riverside",
        },
        {
          name: "Elena Rostova",
          suburb: "Bayside",
          service: "Lắp Đặt Máy Lạnh Mới",
          rating: 5,
          timeAgo: "3 tuần trước",
          text: "Không hề có chi phí ẩn. Báo giá nhận được hôm thứ Ba khớp hoàn toàn với hóa đơn. Đường ống bên ngoài đi rất gọn đẹp và kỹ thuật viên hướng dẫn dùng hẹn giờ thông minh rất tận tình.",
          googleMapsUrl: "https://maps.google.com/?q=WC+Aircon+Bayside",
        },
        {
          name: "Liam O'Connor",
          suburb: "Sunnyvale",
          service: "Bảo Dưỡng Định Kỳ / Kiểm Tra Gas",
          rating: 5,
          timeAgo: "2 tháng trước",
          text: "Đến đúng giờ và bảo dưỡng vô cùng kỹ lưỡng. Họ kiểm tra áp suất gas lạnh và vệ sinh sạch bong lưới lọc. Giao tiếp rất chuyên nghiệp từ đầu đến cuối.",
          googleMapsUrl: "https://maps.google.com/?q=WC+Aircon+Sunnyvale",
        },
        {
          name: "Chloe Henderson",
          suburb: "Greenwich",
          service: "Sửa Chữa Sự Cố Khẩn Cấp",
          rating: 5,
          timeAgo: "3 tuần trước",
          text: "Đúng là cứu tinh! Sáng ngủ dậy thấy dàn lạnh chảy nước ngay trên ghế sofa phòng khách. Họ đã sắp xếp lịch khẩn cấp trong ngày và thông tắc đường ống thoát nước triệt để.",
          googleMapsUrl: "https://maps.google.com/?q=WC+Aircon+Greenwich",
        },
        {
          name: "David Vance",
          suburb: "Harbor View",
          service: "Lắp Đặt Máy Lạnh Mới",
          rating: 5,
          timeAgo: "1 tháng trước",
          text: "Thay thế các máy cũ ồn ào bằng hệ thống Inverter hiện đại. Đội ngũ làm việc hiệu quả, dọn dẹp sạch bong sau khi lắp, ngôi nhà chưa bao giờ mát mẻ dễ chịu đến thế.",
          googleMapsUrl: "https://maps.google.com/?q=WC+Aircon+Harbor+View",
        },
      ],
    },
    booking: {
      badge: "Đặt Lịch Trực Tuyến Nhanh",
      heading: "Đặt Dịch Vụ Máy Lạnh Chỉ Trong 60 Giây",
      subheading:
        "Cho chúng tôi biết nhu cầu của bạn và đội ngũ điều phối sẽ xác nhận lịch hẹn trong vòng 15 phút.",
      urgentCallLabel: "Cần Hỗ Trợ Khẩn Cấp? Gọi Ngay Tổng Đài",
      formLabels: {
        name: "Họ và Tên *",
        namePlaceholder: "Nguyễn Văn A",
        phone: "Số Điện Thoại *",
        phonePlaceholder: "0400 000 000",
        suburb: "Khu Vực / Mã Bưu Chính *",
        suburbPlaceholder: "VD: Oak Park",
        service: "Dịch Vụ Cần Hỗ Trợ",
        urgency: "Mức Độ Khẩn Cấp",
        notes: "Mô Tả Ngắn Tình Trạng Máy (Không Bắt Buộc)",
        notesPlaceholder: "VD: Máy lạnh phòng khách chỉ thổi ra hơi nóng...",
      },
      successState: {
        title: "Đã Nhận Yêu Cầu Báo Giá!",
        thanks: "Cảm ơn",
        desc1: "Đội ngũ điều phối sẽ gọi điện hoặc nhắn tin tới số",
        desc2: "trong vòng 15 phút để xác nhận dịch vụ",
        resetBtn: "Gửi yêu cầu khác",
      },
      serviceOptions: [
        "Sửa Chữa Sự Cố Khẩn Cấp",
        "Vệ Sinh Hóa Chất Chuyên Sâu",
        "Lắp Đặt Máy Lạnh Mới",
        "Dò Tìm Rò Rỉ & Nạp Gas Lạnh",
        "Xử Lý Chảy Nước & Thông Tắc Ống Thoát",
        "Gói Bảo Dưỡng Định Kỳ Hàng Năm",
      ],
      urgencyOptions: [
        "Khẩn cấp (Có mặt trong ngày)",
        "Trong vòng 2–3 ngày",
        "Linh hoạt / Chỉ nhận báo giá miễn phí",
      ],
      submitText: "Nhận Báo Giá Miễn Phí",
      disclaimer:
        "Không ràng buộc. Luôn xác nhận giá cố định trước khi bắt đầu công việc.",
    },
    footer: {
      description:
        "Chuyên gia máy lạnh dân dụng có chứng chỉ, cam kết báo giá minh bạch từ đầu, thi công sạch sẽ và sửa chữa trong ngày.",
      license: "Chứng Nhận ARCtick & Bảo Hiểm Đầy Đủ • Giấy phép #AU-49281",
      navTitle: "Điều Hướng",
      servicesTitle: "Dịch Vụ",
      contactTitle: "Liên Hệ Điều Phối",
      privacyLabel: "Chính Sách Bảo Mật",
      termsLabel: "Điều Khoản Dịch Vụ",
      quickLinks: [
        { label: "Trang chủ", href: "/" },
        { label: "Về chúng tôi", href: "/#about" },
        { label: "Dịch vụ", href: "/#services" },
        { label: "Khu vực", href: "/#areas" },
        { label: "Đặt lịch", href: "/#booking" },
      ],
      serviceLinks: [
        { label: "Sửa Chữa Sự Cố Khẩn Cấp", href: "/#services" },
        { label: "Vệ Sinh Hóa Chất Chuyên Sâu", href: "/#services" },
        { label: "Lắp Đặt Máy Lạnh Mới", href: "/#services" },
        { label: "Dò Tìm Rò Rỉ & Nạp Gas Lạnh", href: "/#services" },
      ],
      copyright: "© 2026 WC Aircon. Bảo lưu mọi quyền.",
    },
  },
};
