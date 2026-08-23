import { ArrowRight, Award } from 'lucide-react';

export default function EcosystemSection() {
  return (
    <section className="py-24 bg-white relative" id="ecosystem">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold tracking-widest text-[#D87939] uppercase">// THE ECOSYSTEM & LEGACY</span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#1A2E4C] mt-3 mb-4">
            Tentang Kami: Strategic Partner Ecosystem
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Bukan sekadar vendor transaksional, melainkan Strategic Partner pertumbuhan jangka panjang bagi brand Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
            <span className="font-mono text-xs font-bold text-[#D87939] tracking-widest uppercase">FILOSOFI KEMITRAAN</span>
            <h3 className="font-heading font-bold text-2xl text-[#1A2E4C] mt-2 mb-4">Strategic Partner Vision</h3>
            <p className="text-slate-600 text-base leading-relaxed">
              Sivarya memosisikan diri sebagai <strong className="text-[#D87939] font-semibold">Strategic Partner</strong> yang mendampingi brand dari tahap analisis objektif, perancangan arsitektur konsep, hingga eksekusi taktis di lapangan. Kami menyatu dengan visi pertumbuhan bisnis Anda.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
            <span className="font-mono text-xs font-bold text-[#D87939] tracking-widest uppercase">TALENTA MULTIDISIPLIN</span>
            <h3 className="font-heading font-bold text-2xl text-[#1A2E4C] mt-2 mb-4">Integrated Ecosystem</h3>
            <p className="text-slate-600 text-base leading-relaxed">
              Sebagai <strong className="text-[#D87939] font-semibold">Integrated Creative Ecosystem</strong>, kami memadukan talenta teknologi inovatif, kreator visual visioner, sound engineer berpengalaman, serta tim eksekutor lapangan yang solid untuk mendeliver end-to-end business solutions.
            </p>
          </div>
        </div>

        <div className="bg-[#1A2E4C] rounded-3xl p-8 sm:p-10 text-white mb-16 shadow-xl">
          <div className="flex items-center gap-5 pb-6 mb-6 border-b border-white/15">
            <div className="w-16 h-16 rounded-full bg-white/10 text-[#D87939] flex items-center justify-center shrink-0">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <span className="font-mono text-xs font-bold text-[#D87939] tracking-widest uppercase">CORPORATE LEGITIMACY</span>
              <h3 className="font-heading font-bold text-2xl text-white mt-1">Legalitas Perusahaan Terverifikasi Resmi</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <span className="text-xs text-slate-400 block mb-1">Nama Entitas Legal</span>
              <span className="font-bold text-base text-white block">PT Sinergi Inovasi Karya</span>
            </div>
            <div>
              <span className="text-xs text-slate-400 block mb-1">Nomor AHU Kemenkumham</span>
              <span className="font-bold text-base text-white block">PPPPPPPPPPPPPPPPPPP.Tahun 2026</span>
            </div>
            <div>
              <span className="text-xs text-slate-400 block mb-1">Nomor Induk Berusaha (NIB)</span>
              <span className="font-bold text-base text-white block">00000000000000</span>
            </div>
            <div>
              <span className="text-xs text-slate-400 block mb-1">Sertifikasi & Kemitraan</span>
              <span className="font-bold text-base text-white block">B2B Enterprise Certified</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <span className="font-mono text-xs font-bold text-[#D87939] tracking-widest uppercase">// 1-DOOR ORCHESTRATION PIPELINE</span>
          <h3 className="font-heading font-bold text-2xl text-[#1A2E4C] mt-2 mb-10">Alur Kerja Terintegrasi Satu Pintu</h3>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="bg-white border border-slate-200 rounded-2xl p-5 flex-1 min-w-[160px] text-center shadow-sm">
              <span className="font-mono text-lg font-bold text-[#D87939] block mb-1">01</span>
              <h4 className="font-bold text-[#1A2E4C] text-sm">Digital Infra</h4>
              <p className="text-slate-500 text-xs mt-1">Web & App Architecture</p>
            </div>
            <ArrowRight className="w-5 h-5 text-[#D87939] hidden lg:block" />

            <div className="bg-white border border-slate-200 rounded-2xl p-5 flex-1 min-w-[160px] text-center shadow-sm">
              <span className="font-mono text-lg font-bold text-[#D87939] block mb-1">02</span>
              <h4 className="font-bold text-[#1A2E4C] text-sm">Audiovisual & Audio</h4>
              <p className="text-slate-500 text-xs mt-1">TVC & Podcast Studio</p>
            </div>
            <ArrowRight className="w-5 h-5 text-[#D87939] hidden lg:block" />

            <div className="bg-white border border-slate-200 rounded-2xl p-5 flex-1 min-w-[160px] text-center shadow-sm">
              <span className="font-mono text-lg font-bold text-[#D87939] block mb-1">03</span>
              <h4 className="font-bold text-[#1A2E4C] text-sm">Social Strategy</h4>
              <p className="text-slate-500 text-xs mt-1">Data Organic Growth</p>
            </div>
            <ArrowRight className="w-5 h-5 text-[#D87939] hidden lg:block" />

            <div className="bg-white border border-slate-200 rounded-2xl p-5 flex-1 min-w-[160px] text-center shadow-sm">
              <span className="font-mono text-lg font-bold text-[#D87939] block mb-1">04</span>
              <h4 className="font-bold text-[#1A2E4C] text-sm">Event & Merch</h4>
              <p className="text-slate-500 text-xs mt-1">Activation & Gifting</p>
            </div>
            <ArrowRight className="w-5 h-5 text-[#D87939] hidden lg:block" />

            <div className="bg-[#D87939]/10 border border-[#D87939]/40 rounded-2xl p-5 flex-1 min-w-[160px] text-center shadow-sm">
              <span className="font-mono text-lg font-bold text-[#D87939] block mb-1">05</span>
              <h4 className="font-bold text-[#1A2E4C] text-sm">Travel Experience</h4>
              <p className="text-slate-600 text-xs font-semibold mt-1">Curated Outings & Trips</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
