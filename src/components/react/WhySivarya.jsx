import React from 'react';
import { Layers, ShieldCheck, Zap, BarChart3, CheckCircle2 } from 'lucide-react';

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
    desc: "PT Sinergi Inovasi Karya adalah entitas legal resmi bersertifikasi Kemenkumham (NIB: 00000000000000) untuk kemitraan B2B yang aman.",
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
    <section className="py-24 bg-white relative" id="why-sivarya">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold tracking-widest text-terracotta uppercase">// WHY CHOOSE SIVARYA</span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy mt-3 mb-4">
            Mengapa Memilih Ekosistem Sivarya?
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Kami memadukan kapabilitas agensi kreatif, rumah produksi audio-visual, konsultan teknologi, dan planner event ke dalam satu kemitraan strategis.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-terracotta/40 hover:-translate-y-1.5 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xl font-bold text-terracotta">{item.num}</span>
                    <div className="w-12 h-12 rounded-xl bg-terracotta/10 text-terracotta flex items-center justify-center group-hover:bg-terracotta group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-navy mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Corporate Legal Trust Banner */}
        <div className="bg-navy rounded-3xl p-8 sm:p-10 text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-white/10 text-terracotta flex items-center justify-center shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <span className="font-mono text-xs font-bold text-terracotta tracking-widest uppercase">CORPORATE LEGITIMACY</span>
              <h3 className="font-heading font-bold text-2xl text-white mt-1 mb-2">Entitas Legal Resmi Bersertifikasi Kemenkumham</h3>
              <p className="text-slate-300 text-sm sm:text-base">
                <strong className="text-white">PT Sinergi Inovasi Karya</strong> terdaftar secara legal untuk kemitraan B2B korporasi dengan <strong className="text-terracotta">NIB: 00000000000000</strong> & <strong className="text-terracotta">AHU: PPPPPPPPPPPPPPPPPPP.Tahun 2026</strong>.
              </p>
            </div>
          </div>

          <a href="/contact" className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 bg-terracotta hover:bg-terracotta-hover text-white font-semibold px-7 py-4 rounded-xl transition-all shadow-md shadow-terracotta/30">
            <CheckCircle2 className="w-5 h-5" />
            <span>Mulai Kemitraan B2B</span>
          </a>
        </div>
      </div>
    </section>
  );
}
