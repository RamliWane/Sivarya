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
    <section className="py-24 bg-white relative" id="works">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold tracking-widest text-terracotta uppercase">// FEATURED CASE STUDIES</span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy mt-3 mb-4">
            Rekam Jejak & Hasil Nyata
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Jelajahi proyek unggulan kami yang telah membantu berbagai brand mencapai pertumbuhan terukur melalui ekosistem kreatif Sivarya.
          </p>
        </div>

        {/* Dynamic Sorting Filter Toolbar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`px-5 py-2.5 rounded-full font-mono text-xs font-bold transition-all ${
                activeFilter === cat.id 
                  ? 'bg-terracotta text-white shadow-md shadow-terracotta/30' 
                  : 'bg-slate-100 text-navy hover:bg-slate-200 border border-slate-200'
              }`}
              onClick={() => setActiveFilter(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Portfolio Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div key={proj.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-terracotta/40 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col group">
              <div className="relative w-full h-60 overflow-hidden bg-navy">
                <img src={proj.image} alt={proj.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent p-5 flex flex-col justify-between">
                  <span className="self-start font-mono text-xs font-bold bg-terracotta text-white px-3 py-1 rounded-full">
                    {proj.categoryName}
                  </span>
                  <button 
                    className="self-start inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-hover text-white text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-md"
                    onClick={() => setSelectedProject(proj)}
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="p-6 flex flex-col gap-2 flex-grow">
                <span className="font-mono text-xs font-bold text-terracotta uppercase">{proj.client}</span>
                <h3 className="font-heading font-bold text-xl text-navy leading-snug">{proj.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{proj.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Interactive Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-navy/70 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-3xl border border-slate-200 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col" onClick={e => e.stopPropagation()}>
            <div className="p-6 sm:p-8 border-b border-slate-100 flex items-start justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-terracotta uppercase tracking-wider">{selectedProject.categoryName}</span>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy mt-1">{selectedProject.title}</h2>
                <span className="text-sm font-semibold text-slate-500 block mt-1">Client: {selectedProject.client}</span>
              </div>
              <button className="text-navy hover:text-terracotta p-1 transition-colors" onClick={() => setSelectedProject(null)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 sm:p-8 flex flex-col gap-6">
              <div className="w-full h-72 rounded-2xl overflow-hidden bg-slate-100">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              </div>

              <div className="flex flex-col gap-4">
                <div className="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl">
                  <div className="flex items-center gap-2 mb-2 text-navy font-bold text-base">
                    <Building className="w-5 h-5 text-terracotta" />
                    <h4>1. The Client</h4>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{selectedProject.client}</p>
                </div>

                <div className="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl">
                  <div className="flex items-center gap-2 mb-2 text-navy font-bold text-base">
                    <Target className="w-5 h-5 text-terracotta" />
                    <h4>2. The Challenge</h4>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{selectedProject.challenge}</p>
                </div>

                <div className="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl">
                  <div className="flex items-center gap-2 mb-2 text-navy font-bold text-base">
                    <Lightbulb className="w-5 h-5 text-terracotta" />
                    <h4>3. Our Strategy</h4>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{selectedProject.strategy}</p>
                </div>

                <div className="bg-terracotta/10 border border-terracotta/30 p-5 rounded-2xl">
                  <div className="flex items-center gap-2 mb-2 text-navy font-bold text-base">
                    <Rocket className="w-5 h-5 text-terracotta" />
                    <h4>4. The Result</h4>
                  </div>
                  <p className="text-slate-700 text-sm font-medium leading-relaxed">{selectedProject.result}</p>
                </div>
              </div>
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
