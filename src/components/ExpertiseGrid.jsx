import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: "digital-infra",
    title: "Infrastruktur Digital",
    desc: "Bangun presensi digital yang scalable dari arsitektur UI/UX hingga sistem backend yang tangguh.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M6 8h.01" />
        <path d="M10 8h.01" />
        <path d="M14 8h.01" />
      </svg>
    ),
  },
  {
    id: "audiovisual",
    title: "Produksi Audiovisual",
    desc: "Corporate profile, TVC, hingga dokumentasi sinematik bernilai estetika tinggi untuk engagement maksimal.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
        <rect x="2" y="6" width="14" height="12" rx="2" />
      </svg>
    ),
  },
  {
    id: "podcast",
    title: "Produksi Podcast",
    desc: "Kuasai thought leadership melalui audio dari studio recording hingga distribusi multi-platform.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" x2="12" y1="19" y2="22" />
      </svg>
    ),
  },
  {
    id: "social-media",
    title: "Strategi Media Sosial",
    desc: "Strategi omnichannel berbasis data untuk menjaga relevansi brand dan mendorong pertumbuhan organik.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
  {
    id: "event-management",
    title: "Manajemen Event",
    desc: "Grand launching, konferensi B2B, hingga experiential brand activation dieksekusi end-to-end.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" x2="16" y1="2" y2="6" />
        <line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
      </svg>
    ),
  },
  {
    id: "merchandise",
    title: "Corporate Merchandise",
    desc: "Executive gifting, apparel kustom, dan promotional goods premium untuk memperkuat brand identity.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polyline points="20 12 20 22 4 22 4 12" />
        <rect x="2" y="7" width="20" height="5" />
        <line x1="12" x2="12" y1="22" y2="7" />
        <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
        <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
      </svg>
    ),
  },
  {
    id: "travel-management",
    title: "Curated Travel",
    desc: "Corporate outing, senior-friendly trips, hingga concert logistics terkurasi end-to-end.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" x2="22" y1="12" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

export default function ExpertiseGrid() {
  return (
    <section className="py-14 bg-white relative" id="expertise">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy mt-3 mb-4">
            Solusi Terpadu Ekosistem Sivarya
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            7 pilar spesialisasi yang terorkestrasi untuk menjawab seluruh kebutuhan presensi, konten, dan mobilitas brand Anda.
          </p>
        </div>

        <div className="border-t border-slate-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7">
            {services.map((item, idx) => (
              <a
                key={idx}
                href={`/expertise#${item.id}`}
                className={`group flex flex-col py-8 px-6 lg:px-6 transition-colors hover:bg-slate-50/50 border-b sm:border-b-0 border-slate-200 lg:border-b-0 ${
                  idx > 0 ? 'sm:border-l border-slate-200' : ''
                }`}
              >
                <div className="text-navy mb-4">
                  {item.icon}
                </div>

                <h3 className="font-heading font-bold text-sm text-navy leading-snug mb-2">
                  {item.title}
                </h3>

                <p className="text-slate-500 text-xs leading-relaxed mb-5 flex-1">
                  {item.desc}
                </p>

                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-navy uppercase tracking-wider group-hover:text-terracotta transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
