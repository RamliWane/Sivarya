import { Award, MonitorSmartphone, Clapperboard, Megaphone, CalendarDays, Plane } from 'lucide-react';
import Reveal from './Reveal.jsx';

const talents = [
  { num: '01', name: 'Teknologi Inovatif', desc: 'Web, app & sistem internal' },
  { num: '02', name: 'Kreator Visual', desc: 'Produksi audiovisual & desain' },
  { num: '03', name: 'Sound Engineer', desc: 'Recording & manajemen podcast' },
  { num: '04', name: 'Eksekutor Lapangan', desc: 'Event, merchandise & travel' },
];

const legalFacts = [
  { label: 'Nama Entitas Legal', value: 'PT Sinergi Inovasi Karya' },
  { label: 'Nomor AHU Kemenkumham', value: 'AHU-A007242.AH.01.31.Tahun 2026.' },
  { label: 'Nomor Induk Berusaha (NIB)', value: '0307260016204' },
  { label: 'Sertifikasi & Kemitraan', value: 'B2B Enterprise Certified' },
];

const pipelineSteps = [
  { num: '01', title: 'Digital Infra', desc: 'Website, aplikasi, dan sistem internal yang scalable sejak awal.', icon: MonitorSmartphone },
  { num: '02', title: 'Audiovisual & Audio', desc: 'Video dan podcast berstandar studio untuk konten brand Anda.', icon: Clapperboard },
  { num: '03', title: 'Social Strategy', desc: 'Distribusi konten terorkestrasi berbasis data untuk growth organik.', icon: Megaphone },
  { num: '04', title: 'Event & Merch', desc: 'Aktivasi, konferensi, dan merchandise dieksekusi end-to-end.', icon: CalendarDays },
  { num: '05', title: 'Travel Experience', desc: 'Perjalanan korporat terkurasi sebagai puncak pengalaman brand.', icon: Plane },
];

function CurvedConnector({ direction }) {
  return (
    <svg
      className={`hidden lg:block absolute left-full -translate-x-1/2 w-32 h-20 pointer-events-none ${
        direction === 'down' ? 'lg:top-8' : 'lg:top-[-32px]'
      }`}
      viewBox="0 0 128 80"
      fill="none"
      aria-hidden="true"
    >
      {direction === 'down' ? (
        <>
          <path d="M 2 8 C 42 8, 86 72, 118 72" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
          <path d="M 110 64 L 122 72 L 110 80" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </>
      ) : (
        <>
          <path d="M 2 72 C 42 72, 86 8, 118 8" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
          <path d="M 110 0 L 122 8 L 110 16" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
    </svg>
  );
}

export default function EcosystemSection() {
  return (
    <section className="py-20 lg:py-28 bg-white relative" id="ecosystem">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-12 lg:gap-10 items-end pb-10 lg:pb-7 mb-7 lg:mb-7">
          <div className="lg:col-span-7">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[3.25rem] text-[#1A2E4C] mt-3 leading-[1.08]">
              Strategic Partner<br />Ecosystem
            </h2>
          </div>
          <p className="lg:col-span-4 lg:col-start-9 text-slate-600 text-base lg:text-lg leading-relaxed mt-5 lg:mt-0">
            Bukan sekadar vendor transaksional, melainkan <strong className="text-[#1A2E4C] font-semibold">Strategic Partner</strong> pertumbuhan jangka panjang bagi brand Anda.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:border-t lg:border-l border-t border-slate-200">
          <Reveal className="border-b lg:border-r border-slate-200 lg:col-span-7 p-8 lg:p-12 flex flex-col">
            <span className="font-semibold text-xs tracking-widest text-[#D87939] uppercase">Filosofi Kemitraan</span>
            <h3 className="font-heading font-bold text-2xl lg:text-3xl text-[#1A2E4C] mt-3 mb-5">Strategic Partner Vision</h3>
            <p className="text-slate-600 text-base lg:text-lg leading-relaxed max-w-xl">
              Sivarya memosisikan diri sebagai <strong className="text-[#D87939] font-semibold">Strategic Partner</strong> yang mendampingi brand dari tahap analisis objektif, perancangan arsitektur konsep, hingga eksekusi taktis di lapangan. Kami menyatu dengan visi pertumbuhan bisnis Anda.
            </p>
            <span className="font-semibold text-7xl lg:text-8xl text-[#1A2E4C]/[0.05] leading-none select-none mt-10 lg:mt-auto pt-6">
              01
            </span>
          </Reveal>

          <Reveal delay={120} className="border-b lg:border-r border-slate-200 lg:col-span-5 p-8 lg:p-12">
            <span className="font-semibold text-xs tracking-widest text-[#D87939] uppercase">Talenta Multidisiplin</span>
            <h3 className="font-heading font-bold text-2xl lg:text-3xl text-[#1A2E4C] mt-3 mb-4">Integrated Ecosystem</h3>
            <ul>
              {talents.map((talent) => (
                <li key={talent.num} className="flex items-baseline gap-4 py-3 border-b border-slate-100 last:border-b-0">
                  <span className="font-semibold text-[13px]  text-[#D87939]/60 shrink-0">{talent.num}</span>
                  <div>
                    <span className="block text-sm font-bold text-[#1A2E4C]">{talent.name}</span>
                    <span className="block text-xs text-slate-500 mt-0.5">{talent.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={200} className="border-b lg:border-r border-slate-200 lg:col-span-12">
            <div className="bg-[#1A2E4C] text-white p-8 lg:p-12">
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 pb-8 mb-8 lg:mb-10 border-b border-white/10">
                <div className="w-14 h-14 rounded-full bg-white/10 text-[#D87939] flex items-center justify-center shrink-0">
                  <Award className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-semibold tracking-widest text-[#D87939] uppercase block">Corporate Legitimacy</span>
                  <h3 className="font-heading font-bold text-xl lg:text-2xl text-white mt-1">Legalitas Perusahaan Terverifikasi Resmi</h3>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10">
                {legalFacts.map((fact) => (
                  <div key={fact.label} className="lg:px-6 first:lg:pl-0 last:lg:pr-0">
                    <span className="font-semibold text-[10px]  text-slate-400 tracking-widest uppercase block mb-2">{fact.label}</span>
                    <span className="font-bold text-[14px] text-white block">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 lg:mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 lg:mb-14">
            <div>
              <h3 className="font-heading font-bold text-2xl lg:text-3xl text-[#1A2E4C] mt-3">Alur Kerja Terintegrasi Satu Pintu</h3>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Satu tim orchestrator untuk seluruh kebutuhan tanpa kompleksitas koordinasi multi-vendor.
            </p>
          </div>

          <div className="relative flex flex-col gap-y-9 lg:grid lg:grid-cols-5 lg:gap-y-0 lg:pb-20">
            <div className="absolute left-[32px] top-3 bottom-3 w-px bg-slate-200 lg:hidden" aria-hidden="true" />
            {pipelineSteps.map((step, idx) => {
              const Icon = step.icon;
              const shifted = idx % 2 === 1;
              return (
                <Reveal
                  key={step.num}
                  delay={idx * 90}
                  className={`relative flex gap-5 lg:block lg:px-3 ${shifted ? 'lg:translate-y-16' : ''}`}
                >
                  {idx < pipelineSteps.length - 1 && (
                    <CurvedConnector direction={idx % 2 === 0 ? 'down' : 'up'} />
                  )}

                  <div className="relative z-10 shrink-0 lg:mx-auto">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gray-200 flex items-center justify-center">
                      <Icon className="w-7 h-7 lg:w-8 lg:h-8 text-[#D87939]" strokeWidth={1.75} />
                    </div>
                    <span className="absolute -top-2 -left-2 w-7 h-7 rounded-full bg-[#1A2E4C] text-white font-semibold text-[10px] flex items-center justify-center ring-4 ring-white">
                      {step.num}
                    </span>
                  </div>

                  <div className="lg:mt-6 lg:mx-auto lg:max-w-[180px] lg:text-center">
                    <h4 className="font-bold text-sm text-[#1A2E4C]">{step.title}</h4>
                    <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{step.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
