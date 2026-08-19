
import { MessageSquare, ArrowRight, Sparkles } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-navy rounded-[36px] p-10 sm:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-terracotta/20 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-terracotta font-mono text-xs font-semibold tracking-wider uppercase mb-6 border border-white/10">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Scale Your Impact</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white leading-tight mb-6">
              Ready to scale your brand?<br />
              <span className="text-terracotta-gradient">Mari berkolaborasi</span> dan ciptakan impact bersama ekosistem kami.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl">
              Orkestrasikan seluruh kebutuhan digital, audiovisual, event, dan travel korporat Anda melalui satu pintu kemitraan terpercaya.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a 
                href="https://wa.me/6285110511403?text=Halo%20Sivarya%2C%20saya%20siap%20berkolaborasi%20dan%20diskusi%20objektif%20brand" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 bg-terracotta hover:bg-terracotta-hover text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-lg shadow-terracotta/30 hover:-translate-y-0.5"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Hubungi Via WhatsApp</span>
              </a>

              <a 
                href="/contact" 
                className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all hover:-translate-y-0.5"
              >
                <span>Isi Brief Online</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
