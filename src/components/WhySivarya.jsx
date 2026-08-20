import { Layers, ShieldCheck, Zap, BarChart3 } from 'lucide-react';

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

const stats = [
  { value: "7", label: "Pilar Layanan" },
  { value: "100%", label: "End-to-End" },
  { value: "B2B", label: "Enterprise" },
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

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 items-stretch">

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
                    <span className="font-semibold text-sm sm:text-base text-terracotta/50 group-hover:text-terracotta transition-colors pt-1.5 shrink-0 w-8">
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

          <div className="relative rounded-2xl overflow-hidden min-h-[400px] lg:min-h-0">
            <img
              src="/images/portfolio_audiovisual.jpg"
              alt="Sivarya creative team"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-end p-7">
              <span className="font-medium text-[10px] text-terracotta tracking-widest uppercase block mb-3">
                Our Philosophy
              </span>
              <p className="font-heading font-bold text-lg text-white leading-snug mb-8">
                Bukan sekadar vendor, kami adalah strategic partner pertumbuhan jangka panjang brand Anda.
              </p>

              <div className="grid grid-cols-3 gap-3">
                {stats.map((s) => (
                  <div key={s.label} className="bg-terracotta backdrop-blur-sm rounded-xl py-4 text-center">
                    <span className="font-heading font-extrabold text-xl text-white block leading-none mb-1">
                      {s.value}
                    </span>
                    <span className="text-[10px] font-semibold text-[#1A2E4C] uppercase tracking-wider">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}