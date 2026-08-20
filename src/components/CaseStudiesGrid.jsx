import { useState } from 'react';
import { ArrowRight, X, ExternalLink, Building, Target, Lightbulb, Rocket } from 'lucide-react';

const categories = [
  { id: "all", name: "All Projects" },
  { id: "digital", name: "Digital" },
  { id: "visual", name: "Visual" },
  { id: "audio", name: "Audio" },
  { id: "social", name: "Social" },
  { id: "event", name: "Event" },
  { id: "trip", name: "Trip" },
  { id: "merch", name: "Merch" }
];

const projectsData = [
  {
    id: "proj-1",
    category: "digital",
    categoryName: "Infrastruktur Digital",
    title: "Telkom Enterprise Ecosystem Portal",
    client: "PT Telekomunikasi Indonesia Tbk",
    image: "/images/portfolio_digital.jpg",
    aspect: "aspect-[4/5]",
    summary: "Re-architecting internal digital portal & customer touchpoints for high traffic scalability and modern UI.",
    challenge: "Memperbarui arsitektur portal enterprise legasi yang lambat dan terfragmentasi menjadi sistem UI/UX terpadu berkecepatan tinggi yang mampu menangani jutaan request harian.",
    strategy: "Mengembangkan arsitektur modern berteknologi Micro-frontends, optimasi cloud serverless API, serta sistem desain komponen UI yang konsisten dan scalable.",
    result: "Peningkatan 340% user engagement, penurunan waktu muat hingga 60%, dan 99.99% uptime tanpa kendala pada saat peak traffic launching produk."
  },
  {
    id: "proj-2",
    category: "visual",
    categoryName: "Produksi Audiovisual",
    title: "Bank Mandiri Cinematic Brand Campaign",
    client: "PT Bank Mandiri (Persero) Tbk",
    image: "/images/portfolio_audiovisual.jpg",
    aspect: "aspect-square",
    summary: "Conveying corporate trust and futuristic digital banking innovation in a compelling 60-second video campaign.",
    challenge: "Menyampaikan pesan transformasi digital perbankan yang canggih namun tetap hangat, terpercaya, dan humanis kepada generasi milenial & Gen-Z.",
    strategy: "Produksi TVC sinematik menggunakan kamera RED V-Raptor 8K, aransemen musik orkestra kustom, dan narasi cerita emosional yang menyentuh.",
    result: "Meraih 12M+ total tayangan di platform digital, 94% sentiment positif publik, serta disiarkan di stasiun TV nasional pada prime-time."
  },
  {
    id: "proj-3",
    category: "audio",
    categoryName: "Podcast & Audio",
    title: "Sivarya Tech Leadership Podcast Series",
    client: "FinTech Executive Alliance",
    image: "/images/portfolio_podcast.jpg",
    aspect: "aspect-[3/4]",
    summary: "Building authority in corporate tech landscape through high-quality audio & video podcast content.",
    challenge: "Membangun kredibilitas thought leadership bagi jajaran eksekutif C-level di tengah persaingan konten podcast teknologi yang sangat padat.",
    strategy: "Eksekusi end-to-end mulai dari penyediaan studio rekaman berstandar siaran radio, sound engineering jernih, hingga konversi video reels pendek untuk media sosial.",
    result: "Menembus Top 3 Podcast Teknologi Indonesia di Spotify, memperoleh 150K+ pendengar rutin per episode, dan 45% retention rate."
  },
  {
    id: "proj-4",
    category: "social",
    categoryName: "Strategi Social Media",
    title: "Pertamina Energy Forward Social Campaign",
    client: "PT Pertamina (Persero)",
    image: "/images/portfolio_audiovisual.jpg",
    aspect: "aspect-[4/3]",
    summary: "Transforming social media channels from formal feeds into engaging community conversations.",
    challenge: "Mengubah pola komunikasi kanal media sosial resmi dari sekadar pengumuman kaku menjadi interaksi komunitas yang hidup dan disukai audiens muda.",
    strategy: "Menerapkan riset algoritma media sosial, pembuatan konten video pendek Reels/TikTok berestetika tinggi, serta respon komunitas yang responsif.",
    result: "Pertumbuhan +520,000 followers organik dalam 6 bulan dengan rata-rata tingkat keterlibatan (engagement rate) mencapai 8.4%."
  },
  {
    id: "proj-5",
    category: "event",
    categoryName: "Manajemen Event & MICE",
    title: "Global Tech Summit & Brand Activation 2026",
    client: "Global Tech Alliance Indonesia",
    image: "/images/portfolio_event.jpg",
    aspect: "aspect-[4/5]",
    summary: "Executing a flawless hybrid summit for 2,500+ C-level delegates with zero technical glitches.",
    challenge: "Menyelenggarakan konferensi internasional hybrid untuk 2,500+ delegasi C-level dengan standar panggung dan lighting kelas dunia.",
    strategy: "Manajemen event end-to-end, desain panggung 3D futuristik dengan layar LED Curved Immersive, dan koordinasi tim logistik lapangan yang solid.",
    result: "Dihadiri 2,850 peserta langsung, 15,000+ penonton live-stream, serta meraih 98% skor kepuasan peserta."
  },
  {
    id: "proj-6",
    category: "merch",
    categoryName: "Corporate Merchandise",
    title: "Indofood Executive Gifting & Custom Kit",
    client: "PT Indofood Sukses Makmur Tbk",
    image: "/images/portfolio_merch.jpg",
    aspect: "aspect-square",
    summary: "Creating memorable, premium custom merchandise boxes for 500 VIP partners & executive stakeholders.",
    challenge: "Menghadirkan hampers souvenir fisik yang mewah dan tidak pasaran untuk memperkuat loyalitas para pemangku kepentingan korporasi.",
    strategy: "Merancang paket suvenir kustom berupa binder kulit emboss, termos thermal matte black, dan packaging box eksklusif berukir logo emas.",
    result: "Mendapat impresi sangat positif dari 500 penerima VIP dan disepakati kontrak perpanjangan merchandise tahunan."
  },
  {
    id: "proj-7",
    category: "trip",
    categoryName: "Curated Travel Experience",
    title: "Senior-Friendly Outing & Music Concert Trip",
    client: "Executive Alumni & Retired Board",
    image: "/images/portfolio_event.jpg",
    aspect: "aspect-[3/4]",
    summary: "Designing an accessible, comfortable yet energetic travel itinerary for senior corporate leaders.",
    challenge: "Mengelola perjalanan grup untuk lansia dan senior eksekutif menuju festival musik internasional dengan prioritas kenyamanan dan aksesibilitas.",
    strategy: "Menyediakan armada bus VIP berfasilitas lengkap, pendamping medis berlisensi, akomodasi bintang 5 ramah lansia, dan reservasi lounge VIP.",
    result: "120 peserta senior terlayani dengan sangat baik, bebas kendala fisik, dan menikmati seluruh rangkaian acara perjalanan."
  }
];

export default function CaseStudiesGrid() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeFilter === "all"
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section className="py-20 bg-white relative" id="works">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy mt-3 mb-4">
            Rekam Jejak &amp; Hasil Nyata
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Jelajahi proyek unggulan kami yang telah membantu berbagai brand mencapai pertumbuhan terukur melalui ekosistem kreatif Sivarya.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeFilter === cat.id
                  ? 'bg-navy text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
              onClick={() => setActiveFilter(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
          {filteredProjects.map((proj) => (
            <article
              key={proj.id}
              className="break-inside-avoid mb-6 group cursor-pointer"
              onClick={() => setSelectedProject(proj)}
            >
              <div className={`relative overflow-hidden rounded-xl mb-4 ${proj.aspect}`}>
                <img
                  src={proj.image}
                  alt={proj.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <span className="absolute top-3 left-3 font-mono text-[10px] font-bold bg-white/90 backdrop-blur-sm text-navy px-2.5 py-1 rounded-md">
                  {proj.categoryName}
                </span>

                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <ArrowRight className="w-4 h-4 text-navy" />
                </div>
              </div>

              <div className="px-1">
                <span className="text-[11px] font-bold text-terracotta uppercase tracking-wider block mb-1">
                  {proj.client}
                </span>
                <h3 className="font-heading font-bold text-base text-navy leading-snug mb-1.5 group-hover:text-terracotta transition-colors">
                  {proj.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                  {proj.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-navy/70 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col" onClick={e => e.stopPropagation()}>
            <div className="p-6 sm:p-8 border-b border-slate-100 flex items-start justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-terracotta uppercase tracking-wider">{selectedProject.categoryName}</span>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy mt-1">{selectedProject.title}</h2>
                <span className="text-sm font-semibold text-slate-500 block mt-1">Client: {selectedProject.client}</span>
              </div>
              <button className="text-slate-400 hover:text-navy p-1 transition-colors" onClick={() => setSelectedProject(null)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 flex flex-col gap-5">
              <div className="w-full h-64 rounded-xl overflow-hidden bg-slate-100">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              </div>

              {[
                { icon: Building, label: "The Client", text: selectedProject.client, bg: "bg-slate-50", border: "border-slate-200/80" },
                { icon: Target, label: "The Challenge", text: selectedProject.challenge, bg: "bg-slate-50", border: "border-slate-200/80" },
                { icon: Lightbulb, label: "Our Strategy", text: selectedProject.strategy, bg: "bg-slate-50", border: "border-slate-200/80" },
                { icon: Rocket, label: "The Result", text: selectedProject.result, bg: "bg-terracotta/5", border: "border-terracotta/20" },
              ].map(({ icon: Icon, label, text, bg, border }) => (
                <div key={label} className={`${bg} border ${border} p-5 rounded-xl`}>
                  <div className="flex items-center gap-2 mb-2 text-navy font-bold text-sm">
                    <Icon className="w-4 h-4 text-terracotta" />
                    <span>{label}</span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-slate-100 flex justify-end">
              <a
                href={`https://wa.me/6285110511403?text=Halo%20Sivarya%2C%20saya%20tertarik%20dengan%20case%20study%20${encodeURIComponent(selectedProject.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-hover text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-md shadow-terracotta/30"
              >
                <span>Konsultasikan Proyek Serupa</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}