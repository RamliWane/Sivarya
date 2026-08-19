import { Layers, ShieldCheck, Zap, BarChart3, ArrowUpRight } from 'lucide-react';

const pillars = [
  {
    num: "01",
    title: "Tri-Pilar Integrasi Strategis",
    desc: "Integrasi tanpa batas antara Technology, Visual Content, dan Live Experiences dalam satu ekosistem yang terorkestrasi presisi.",
    icon: Layers
  },
  {
    num: "02",
    title: "Legalitas & Kemitraan B2B Terpercaya",
    desc: "PT Sinergi Inovasi Karya adalah entitas legal resmi bersertifikasi Kemenkumham untuk kemitraan B2B yang aman.",
    icon: ShieldCheck
  },
  {
    num: "03",
    title: "Single Point of Orchestration",
    desc: "Hilangkan kompleksitas mengelola banyak vendor terpisah. Sivarya menangani end-to-end execution dengan standar kualitas konsisten.",
    icon: Zap
  },
  {
    num: "04",
    title: "Data-Driven & High Impact",
    desc: "Setiap strategi dirancang berbasis analitik data, riset audiens mendalam, serta eksekusi kreatif bernilai estetika tinggi untuk ROI terukur.",
    icon: BarChart3
  }
];

export default function WhySivarya() {
  return (
    <section className="py-28 bg-white" id="why-sivarya">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy mt-3 mb-4">
            Mengapa Memilih Ekosistem Sivarya?
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Kami memadukan kapabilitas agensi kreatif, rumah produksi audio-visual, konsultan teknologi, dan planner event ke dalam satu kemitraan strategis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-x-16 gap-y-12 items-start">

          {/* Editorial index list */}
          <div className="border-t border-slate-200">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative border-b border-slate-200 py-8 pl-6 sm:pl-8 -ml-6 sm:-ml-8 pr-4 transition-colors duration-300 hover:bg-terracotta/[0.04]"
                >
                  <span className="absolute left-0 top-8 bottom-8 w-[3px] bg-terracotta scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />

                  <div className="flex items-start gap-6 sm:gap-10">
                    <span className="font-mono text-sm sm:text-base text-terracotta/50 group-hover:text-terracotta transition-colors pt-1.5 shrink-0 w-8">
                      {item.num}
                    </span>

                    <div className="flex-1">
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-navy mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                        {item.desc}
                      </p>
                    </div>

                    <div className="w-11 h-11 rounded-full border border-slate-300 flex items-center justify-center shrink-0 group-hover:border-terracotta group-hover:bg-terracotta transition-colors">
                      <Icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Certificate panel — legitimacy, sticky */}
          <div className="lg:sticky lg:top-24">
            <div className="border border-dashed border-slate-300 rounded-lg p-7 bg-slate-50/60">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full border-2 border-terracotta/40 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-terracotta" />
                </div>
                <div>
                  <span className="font-mono text-[10px] font-bold text-terracotta tracking-widest uppercase block">
                    Corporate Legitimacy
                  </span>
                  <span className="text-navy font-heading font-bold text-sm">
                    PT Sinergi Inovasi Karya
                  </span>
                </div>
              </div>

              <div className="space-y-0 border-t border-slate-200">
                <div className="flex justify-between py-3 border-b border-slate-200">
                  <span className="font-mono text-[11px] uppercase text-slate-400">NIB</span>
                  <span className="font-mono text-[11px] text-navy font-semibold">00000000000000</span>
                </div>
                <div className="flex justify-between py-3 border-b border-slate-200 gap-4">
                  <span className="font-mono text-[11px] uppercase text-slate-400 shrink-0">AHU</span>
                  <span className="font-mono text-[11px] text-navy font-semibold text-right">PPPPPPPPPPPPPPPPPPP / 2026</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="font-mono text-[11px] uppercase text-slate-400">Status</span>
                  <span className="font-mono text-[11px] text-terracotta font-semibold">Terverifikasi Kemenkumham</span>
                </div>
              </div>

              <a
                href="/contact"
                className="mt-6 w-full inline-flex items-center justify-between gap-2 bg-navy hover:bg-navy/90 text-white font-semibold text-sm px-5 py-3.5 rounded-md transition-all"
              >
                <span>Mulai Kemitraan B2B</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}