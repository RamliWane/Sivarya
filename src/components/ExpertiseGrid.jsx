import { useState, useRef, useLayoutEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: "digital-infra",
    title: "Infrastruktur Digital",
    desc: "Bangun presensi digital yang scalable dari arsitektur UI/UX hingga sistem backend yang tangguh.",
    longDesc: "Dari riset UX, wireframe, hingga deployment — kami merancang website, aplikasi, dan sistem internal yang scalable, aman, dan siap tumbuh bersama bisnis Anda. Setiap arsitektur dioptimasi untuk performa, SEO teknikal, dan kemudahan maintenance jangka panjang.",
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
    longDesc: "Tim produksi kami menangani seluruh proses kreatif: konsep & storyboard, shooting, lighting, hingga color grading dan editing final. Cocok untuk corporate profile, TVC, video produk, dokumentasi event, maupun konten sinematik untuk kebutuhan marketing Anda.",
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
    longDesc: "Mulai dari konsultasi format show, recording di studio profesional, editing audio & video, hingga distribusi ke Spotify, YouTube, dan platform utama. Kami bantu membangun thought leadership Anda dengan produksi yang konsisten episode demi episode.",
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
    longDesc: "Riset audiens & kompetitor, penyusunan content pillars, produksi konten harian, hingga pengelolaan engagement dan pelaporan analitik bulanan. Strategi omnichannel kami dirancang untuk menumbuhkan reach organik dan konversi yang terukur.",
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
    longDesc: "Grand launching, gathering, konferensi B2B/MICE, hingga brand activation — tim kami menangani perizinan, venue, rundown, produksi panggung, sampai dokumentasi. Satu tim orchestrator dengan standar eksekusi konsisten dari awal hingga akhir.",
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
    longDesc: "Konsultasi produk, desain kustom, produksi, hingga pengiriman langsung ke gudang atau tangan penerima. Spesialisasi kami: executive gifting premium, apparel kustom, dan promotional goods berkualitas untuk klien, partner, dan karyawan Anda.",
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
    longDesc: "Perjalanan wisata korporat yang terkurasi lengkap: transportasi, akomodasi, itinerary, konsumsi, hingga dokumentasi. Berpengalaman menangani senior-friendly trips, company outing, dan concert logistics untuk grup korporat dalam maupun luar kota.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" x2="22" y1="12" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

const MAX_LINES = 5;

function ServiceCard({ item, idx }) {
  const [open, setOpen] = useState(false);
  const [cut, setCut] = useState(null);
  const measureRef = useRef(null);
  const fullDesc = `${item.desc} ${item.longDesc}`;

  useLayoutEffect(() => {
    const el = measureRef.current;
    if (!el) return;

    const measure = () => {
      const cs = getComputedStyle(el);
      const lineHeight = parseFloat(cs.lineHeight) || parseFloat(cs.fontSize) * 1.6;
      const maxH = lineHeight * MAX_LINES + 2;
      const trigger = ' Selengkapnya';

      el.textContent = fullDesc;
      if (el.scrollHeight <= maxH + 1) {
        setCut(null);
        return;
      }

      let lo = 1;
      let hi = fullDesc.length - 1;
      let best = 1;
      while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        el.textContent = fullDesc.slice(0, mid) + trigger;
        if (el.scrollHeight <= maxH) {
          best = mid;
          lo = mid + 1;
        } else {
          hi = mid - 1;
        }
      }

      let c = best;
      while (c > 1 && !/\s/.test(fullDesc[c - 1])) c--;
      if (c > 1) c--;
      setCut(c);
    };

    measure();
    if (typeof ResizeObserver !== 'undefined') {
      const ro = new ResizeObserver(measure);
      ro.observe(el);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(measure);
      }
      return () => ro.disconnect();
    }
  }, [fullDesc]);

  const truncated = !open && cut !== null;

  return (
    <div
      className={`group relative flex flex-col py-8 px-6 lg:px-5 transition-colors duration-300 border-b sm:border-b-0 border-slate-200 lg:border-b-0 ${
        idx > 0 ? 'sm:border-l border-slate-200' : ''
      } ${open ? 'bg-[#D87939]/[0.04]' : 'hover:bg-slate-50/50'}`}
    >
      <div
        ref={measureRef}
        aria-hidden="true"
        className="invisible absolute top-0 left-6 right-6 lg:left-5 lg:right-5 pointer-events-none text-slate-500 text-xs leading-relaxed"
      />

      <div className="text-[#1A2E4C] mb-4">
        {item.icon}
      </div>

      <h3 className="font-heading font-bold text-sm text-[#1A2E4C] leading-snug mb-2">
        <a href={`/expertise#${item.id}`} className="hover:text-[#D87939] transition-colors">
          {item.title}
        </a>
      </h3>

      <p className="text-slate-500 text-xs leading-relaxed mb-3">
        {truncated ? fullDesc.slice(0, cut).trimEnd() : fullDesc}{' '}
        {(truncated || open) && (
          <button
            type="button"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="inline bg-transparent border-0 p-0 m-0 text-xs leading-relaxed font-bold text-[#D87939] hover:text-[#C26527] hover:underline cursor-pointer"
          >
            {open ? 'Tutup' : 'Selengkapnya'}
          </button>
        )}
      </p>

      <div className="flex items-center justify-end gap-2">
        <a
          href={`/expertise#${item.id}`}
          aria-label={`Lihat halaman ${item.title}`}
          className="inline-flex items-center gap-1 text-[11px] font-bold text-[#1A2E4C] uppercase tracking-wider hover:text-[#D87939] transition-colors"
        >
          <span>Detail</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
}

export default function ExpertiseGrid() {
  return (
    <section className="py-14 bg-white relative" id="expertise">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#1A2E4C] mt-3 mb-4">
            Solusi Terpadu Ekosistem Sivarya
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            7 pilar spesialisasi yang terorkestrasi untuk menjawab seluruh kebutuhan presensi, konten, dan mobilitas brand Anda.
          </p>
        </div>

        <div className="border-t border-slate-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 items-start">
            {services.map((item, idx) => (
              <ServiceCard key={idx} item={item} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
