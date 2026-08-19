import { useState, useEffect } from 'react';
import { 
  Code, 
  Video, 
  Mic, 
  Share2, 
  Calendar, 
  Gift, 
  Compass, 
  ChevronDown, 
  ArrowRight, 
  Menu, 
  X,
  ShieldCheck
} from 'lucide-react';

const servicesList = [
  { title: "Infrastruktur Teknologi & Digital", desc: "Scalable Web & App UI/UX Architecture", slug: "digital-infra", icon: Code },
  { title: "Produksi Audiovisual", desc: "Corporate Profile, TVC & Visual Assets", slug: "audiovisual", icon: Video },
  { title: "Produksi & Manajemen Podcast", desc: "Immersive Audio Recording & Studio", slug: "podcast", icon: Mic },
  { title: "Strategi Konten & Media Sosial", desc: "Data-Driven Omnichannel Growth", slug: "social-media", icon: Share2 },
  { title: "Manajemen Event", desc: "Brand Activation & MICE Conferences", slug: "event-management", icon: Calendar },
  { title: "Merchandise & Suvenir Promosi", desc: "Premium Corporate Executive Gifting", slug: "merchandise", icon: Gift },
  { title: "Manajemen Perjalanan Wisata", desc: "Curated Senior Trips & Concert Outings", slug: "travel-management", icon: Compass }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navText = scrolled ? 'text-navy' : 'text-white';

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
        : 'bg-transparent py-5'
    }`}>

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
            <img src="/sivarya_logo.png" alt="Sivarya Logo" className='w-full h-12' />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="/#home" className={`${navText} font-semibold text-sm hover:text-terracotta transition-colors`}>
            Home
          </a>
          
          {/* Dropdown Menu */}
          <div 
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <a href="/expertise" className={`${navText} font-semibold text-sm flex items-center gap-1 hover:text-terracotta transition-colors py-1`}>
              <span>Expertise</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-terracotta' : ''}`} />
            </a>

            {dropdownOpen && (
              <div className="absolute top-full -left-6 w-[420px] bg-white rounded-2xl shadow-xl border border-slate-200 p-5 mt-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                  <span className="font-mono text-xs font-bold tracking-widest text-terracotta uppercase">7 Core Pillars</span>
                  <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> B2B Certified
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  {servicesList.map((service, idx) => {
                    const Icon = service.icon;
                    return (
                      <a 
                        key={idx} 
                        href={`/expertise#${service.slug}`} 
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-terracotta/10 hover:translate-x-1 transition-all group"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <div className="w-8 h-8 rounded-lg bg-navy/5 text-terracotta flex items-center justify-center shrink-0 group-hover:bg-terracotta group-hover:text-white transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-navy block group-hover:text-terracotta transition-colors">{service.title}</span>
                          <span className="text-[11px] text-slate-500 block">{service.desc}</span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <a href="/works" className={`${navText} font-semibold text-sm hover:text-terracotta transition-colors`}>
            Our Works
          </a>

          <a href="/ecosystem" className={`${navText} font-semibold text-sm hover:text-terracotta transition-colors`}>
            The Ecosystem
          </a>
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="/contact"
            className={`hidden sm:inline-flex items-center gap-2 font-semibold text-sm px-5 py-2.5 rounded-full border transition-all hover:-translate-y-0.5 ${
              scrolled
                ? 'border-navy/20 text-navy hover:bg-navy hover:text-white'
                : 'border-white/40 text-white hover:bg-white/10'
            }`}
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button 
            className={`lg:hidden p-1 transition-colors ${scrolled ? 'text-navy hover:text-terracotta' : 'text-white hover:text-terracotta'}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-navy/40 backdrop-blur-sm z-50 flex justify-end lg:hidden">
          <div className="w-4/5 max-w-sm h-full bg-white p-6 flex flex-col gap-6 overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <span className="font-heading font-black text-xl text-navy">SIVARYA</span>
              <button onClick={() => setMobileOpen(false)} className="text-navy p-1">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <a href="/#home" onClick={() => setMobileOpen(false)} className="text-navy font-bold text-lg hover:text-terracotta">
                Home
              </a>

              <div>
                <span className="font-mono text-xs font-bold text-terracotta uppercase block mb-2">SERVICES & EXPERTISE</span>
                <div className="flex flex-col gap-2 pl-3 border-l-2 border-terracotta">
                  {servicesList.map((s, i) => (
                    <a key={i} href={`/expertise#${s.slug}`} onClick={() => setMobileOpen(false)} className="text-slate-600 font-medium text-sm hover:text-navy">
                      {s.title}
                    </a>
                  ))}
                </div>
              </div>

              <a href="/works" onClick={() => setMobileOpen(false)} className="text-navy font-bold text-lg hover:text-terracotta">
                Our Works / Case Studies
              </a>

              <a href="/ecosystem" onClick={() => setMobileOpen(false)} className="text-navy font-bold text-lg hover:text-terracotta">
                The Ecosystem
              </a>

              <a href="/contact" onClick={() => setMobileOpen(false)} className="w-full bg-terracotta text-white font-semibold text-center py-3 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-terracotta/25 mt-4">
                <span>Let's Talk</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
