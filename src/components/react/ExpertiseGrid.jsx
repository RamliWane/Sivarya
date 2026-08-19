import React from 'react';
import { 
  Code, 
  Video, 
  Mic, 
  Share2, 
  Calendar, 
  Gift, 
  Compass, 
  Check, 
  ArrowUpRight 
} from 'lucide-react';

const services = [
  {
    id: "digital-infra",
    badge: "Digital & Tech",
    title: "Infrastruktur Teknologi dan Digital",
    subTitle: "Web & App Development",
    desc: "Bangun presensi digital yang scalable dan responsif. Kami merancang arsitektur UI/UX dan sistem backend yang tangguh untuk website maupun aplikasi, memastikan brand Anda memberikan seamless digital experience bagi user di mana saja.",
    bullets: ["Custom Web & WebApp Development", "UI/UX System & Product Design", "Cloud Infrastructure & API Integration", "Performance & Security Optimization"],
    icon: Code
  },
  {
    id: "audiovisual",
    badge: "Visual Assets",
    title: "Produksi Audiovisual",
    subTitle: "High-Impact Video & Photography",
    desc: "Visual adalah bahasa universal brand Anda. Mulai dari corporate profile, commercial TVC, hingga dokumentasi sinematik, tim spesialis kami memproduksi aset visual bernilai estetika tinggi yang didesain untuk mencuri perhatian dan engagement.",
    bullets: ["Corporate Video Profile & TVC", "Cinematic Event Documentation", "Product & Architectural Photography", "Aerial & Drone Videography"],
    icon: Video
  },
  {
    id: "podcast",
    badge: "Audio Experience",
    title: "Produksi & Manajemen Podcast",
    subTitle: "Immersive Audio Experience",
    desc: "Kuasai thought leadership di industri Anda melalui audio. Kami menangani keseluruhan pipeline—dari fasilitas studio recording, sound engineering, hingga post-production—untuk menghasilkan podcast premium yang jernih dan profesional.",
    bullets: ["Studio Recording & Acoustic Setup", "Multi-Cam Video Podcast Production", "Sound Engineering & Mastering", "Distribution & Channel Management"],
    icon: Mic
  },
  {
    id: "social-media",
    badge: "Organic Growth",
    title: "Strategi Konten & Media Sosial",
    subTitle: "Data-Driven Social Media",
    desc: "Ubah followers menjadi brand advocates. Tim kami meramu strategi omnichannel, creative copywriting, hingga optimasi algoritma untuk menjaga relevansi brand Anda dan mendorong matriks pertumbuhan organik di media sosial.",
    bullets: ["Omnichannel Content Strategy", "Creative Copywriting & Graphic Design", "Short-Form Video (Reels/TikTok)", "Community & Analytics Management"],
    icon: Share2
  },
  {
    id: "event-management",
    badge: "Live Activation",
    title: "Manajemen Event",
    subTitle: "Brand Activation & MICE",
    desc: "Ciptakan momen yang tak terlupakan. Dari grand launching, konferensi berskala besar, hingga pameran B2B, kami mengeksekusi konsep brand activation secara presisi dan end-to-end, memastikan setiap event berjalan spektakuler.",
    bullets: ["Grand Product Launching", "B2B Conference & Exhibition", "Experiential Brand Activation", "Stage, Sound & Rigging Management"],
    icon: Calendar
  },
  {
    id: "merchandise",
    badge: "Brand Identity",
    title: "Merchandise & Suvenir Promosi",
    subTitle: "Premium Corporate Gifting",
    desc: "Tinggalkan impresi fisik yang kuat. Kami memproduksi corporate merchandise dan seragam kustom dengan material premium dan desain eksklusif, dirancang khusus untuk memperkuat brand identity dan loyalitas pemangku kepentingan.",
    bullets: ["Custom Executive Gifting Sets", "Custom Apparel & Corporate Wear", "Eco-Friendly Promotional Goods", "Custom Packaging & Distribution"],
    icon: Gift
  },
  {
    id: "travel-management",
    badge: "Mobility & Leisure",
    title: "Manajemen Perjalanan Wisata & Tematik",
    subTitle: "Curated Travel Experiences",
    desc: "Hadirkan pengalaman perjalanan yang dirancang khusus untuk setiap audiens. Mulai dari corporate outing profesional, open trip rekreasi yang aman dan nyaman untuk lansia (senior-friendly), hingga manajemen perjalanan konser (concert trip) yang enerjik. Sebagai travel planner & organizer, kami mengkurasi itinerary, akomodasi, dan mengelola seluruh koordinasi mobilitas logistik secara end-to-end agar Anda cukup duduk manis dan menikmati momen.",
    bullets: ["Corporate Outing & Teambuilding", "Senior-Friendly Leisure Trips", "Concert & Music Festival Logistics", "End-to-End Itinerary & Transport"],
    icon: Compass
  }
];

export default function ExpertiseGrid() {
  return (
    <section className="py-24 bg-white relative" id="expertise">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold tracking-widest text-terracotta uppercase">// OUR 7 PILLARS</span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy mt-3 mb-4">
            Solusi Terpadu Ekosistem Sivarya
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            7 pilar spesialisasi yang terorkestrasi untuk menjawab seluruh kebutuhan presensi, konten, dan mobilitas brand Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-terracotta/40 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between scroll-mt-24 group" id={item.id}>
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-terracotta bg-terracotta/10 px-3 py-1 rounded-full border border-terracotta/20">
                      {item.badge}
                    </span>
                    <span className="font-mono text-sm font-semibold text-slate-400">0{idx + 1}</span>
                  </div>

                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-terracotta/10 text-terracotta flex items-center justify-center shrink-0 group-hover:bg-terracotta group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-navy leading-snug">{item.title}</h3>
                      <span className="text-xs font-bold text-terracotta block mt-0.5">{item.subTitle}</span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{item.desc}</p>

                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 mb-6">
                    <span className="font-mono text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-3">KAPABILITAS KUNCI</span>
                    <ul className="flex flex-col gap-2">
                      {item.bullets.map((b, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs font-semibold text-navy">
                          <Check className="w-3.5 h-3.5 text-terracotta shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a 
                  href={`https://wa.me/6285110511403?text=Halo%20Sivarya%2C%20saya%20tertarik%20dengan%20layanan%20${encodeURIComponent(item.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-terracotta hover:text-navy transition-colors group/link"
                >
                  <span>Konsultasi Layanan Ini</span>
                  <ArrowUpRight className="w-5 h-5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
