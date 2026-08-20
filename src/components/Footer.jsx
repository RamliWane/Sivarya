import { Phone, Mail, ShieldCheck, Globe, Share2, Video } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 text-slate-600 pt-20 pb-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Col 1: Brand & Entity */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a href="/" className="flex items-center gap-3 mb-5">
              <div className="shadow-sm rounded-lg overflow-hidden">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect width="32" height="32" rx="8" fill="var(--color-navy)"/>
                  <path d="M10 22L16 10L22 22" stroke="var(--color-terracotta)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12.5 17H19.5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-xl tracking-wider text-navy leading-none">SIVARYA</span>
                <span className="text-[11px] font-semibold tracking-wide text-terracotta">PT Sinergi Inovasi Karya</span>
              </div>
            </a>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Integrated Creative Ecosystem yang merancang solusi end-to-end dari infrastruktur digital, aset audio-visual, hingga experiential events dan perjalanan korporat.
            </p>

            <div className="flex items-center gap-3 font-mono text-xs text-terracotta bg-white border border-slate-200 px-4 py-3 rounded-2xl shadow-sm">
              <ShieldCheck className="w-4 h-4 shrink-0 text-terracotta" />
              <div>
                <span className="block font-semibold">AHU: PPPPPPPPPPPPPPPPPPP.Tahun 2026</span>
                <span className="block font-semibold">NIB: 00000000000000</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-bold text-navy text-base mb-5">Navigasi Utama</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href="/#home" className="text-slate-600 hover:text-terracotta font-medium transition-colors">Home</a></li>
              <li><a href="/expertise" className="text-slate-600 hover:text-terracotta font-medium transition-colors">Expertise & Services</a></li>
              <li><a href="/works" className="text-slate-600 hover:text-terracotta font-medium transition-colors">Case Studies</a></li>
              <li><a href="/ecosystem" className="text-slate-600 hover:text-terracotta font-medium transition-colors">The Ecosystem</a></li>
              <li><a href="/contact" className="text-slate-600 hover:text-terracotta font-medium transition-colors">Let's Talk</a></li>
            </ul>
          </div>

          {/* Col 3: 7 Pillars */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-navy text-base mb-5">7 Pilar Layanan</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href="/expertise#digital-infra" className="text-slate-600 hover:text-terracotta font-medium transition-colors">Infrastruktur Digital</a></li>
              <li><a href="/expertise#audiovisual" className="text-slate-600 hover:text-terracotta font-medium transition-colors">Produksi Audiovisual</a></li>
              <li><a href="/expertise#podcast" className="text-slate-600 hover:text-terracotta font-medium transition-colors">Produksi & Manajemen Podcast</a></li>
              <li><a href="/expertise#social-media" className="text-slate-600 hover:text-terracotta font-medium transition-colors">Strategi Media Sosial</a></li>
              <li><a href="/expertise#event-management" className="text-slate-600 hover:text-terracotta font-medium transition-colors">Manajemen Event & MICE</a></li>
              <li><a href="/expertise#merchandise" className="text-slate-600 hover:text-terracotta font-medium transition-colors">Merchandise Promosi</a></li>
              <li><a href="/expertise#travel-management" className="text-slate-600 hover:text-terracotta font-medium transition-colors">Manajemen Perjalanan Wisata</a></li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-navy text-base mb-5">Headquarters</h4>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Jl. Ratu Bidadari 3 no 2, Ciputat, Tangerang Selatan, Indonesia.
            </p>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-terracotta shrink-0" />
                <a href="https://wa.me/6285110511403" target="_blank" rel="noopener noreferrer" className="font-bold text-navy hover:text-terracotta transition-colors">+62 851-1051-1403</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-terracotta shrink-0" />
                <a href="mailto:halosivarya@gmail.com" className="font-bold text-navy hover:text-terracotta transition-colors">halosivarya@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500">
            &copy; {currentYear} <strong className="text-navy font-bold">PT Sinergi Inovasi Karya (Sivarya)</strong>. All rights reserved. Built with precision.
          </p>

          <div className="flex items-center gap-3">
            <a href="#" className="w-9 h-9 rounded-full bg-white border border-slate-200 text-navy flex items-center justify-center hover:bg-terracotta hover:text-white hover:border-terracotta transition-all shadow-sm" aria-label="Website">
              <Globe className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white border border-slate-200 text-navy flex items-center justify-center hover:bg-terracotta hover:text-white hover:border-terracotta transition-all shadow-sm" aria-label="Social Media">
              <Share2 className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white border border-slate-200 text-navy flex items-center justify-center hover:bg-terracotta hover:text-white hover:border-terracotta transition-all shadow-sm" aria-label="Video Channel">
              <Video className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
