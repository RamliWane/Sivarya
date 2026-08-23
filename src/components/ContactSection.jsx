import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

const serviceOptions = [
  "Infrastruktur Teknologi & Digital",
  "Produksi Audiovisual",
  "Produksi & Manajemen Podcast",
  "Strategi Konten & Media Sosial",
  "Manajemen Event (Brand Activation & MICE)",
  "Merchandise & Suvenir Promosi",
  "Manajemen Perjalanan Wisata & Tematik",
  "Integrated Multi-Service Ecosystem"
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    brief: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const waText = encodeURIComponent(
      `Halo Sivarya,\n\nSaya ${formData.name} dari ${formData.company}.\nEmail: ${formData.email}\nMinat Layanan: ${formData.service}\n\nBrief Proyek:\n${formData.brief}`
    );

    setTimeout(() => {
      window.open(`https://wa.me/6285110511403?text=${waText}`, '_blank');
    }, 1200);
  };

  return (
    <section className="py-24 bg-white relative" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#1A2E4C] mt-3 mb-4">
            Diskusikan Visi & Objektif Brand Anda
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Tim spesialis kami siap merancang formulasi ekosistem kreatif yang presisi untuk kebutuhan bisnis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 bg-white rounded-lg p-8 sm:p-10 border border-slate-200 shadow-sm">
            <h3 className="font-heading font-bold text-2xl text-[#1A2E4C] mb-1">Lead Capture & Project Brief</h3>
            <p className="text-slate-500 text-sm mb-8">Isi formulir di bawah ini untuk menerima proposal awal & penawaran khusus.</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-[#1A2E4C] uppercase tracking-wider">Nama Lengkap *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Contoh: Budi Santoso"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[#1A2E4C] text-sm font-medium focus:outline-none focus:border-[#D87939] focus:bg-white focus:ring-2 focus:ring-[#D87939]/20 transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-[#1A2E4C] uppercase tracking-wider">Email Korporat *</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[#1A2E4C] text-sm font-medium focus:outline-none focus:border-[#D87939] focus:bg-white focus:ring-2 focus:ring-[#D87939]/20 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-[#1A2E4C] uppercase tracking-wider">Nama Perusahaan *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="PT Jaya Bersama"
                    value={formData.company}
                    onChange={e => setFormData({...formData, company: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[#1A2E4C] text-sm font-medium focus:outline-none focus:border-[#D87939] focus:bg-white focus:ring-2 focus:ring-[#D87939]/20 transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-[#1A2E4C] uppercase tracking-wider">Minat Pilar Layanan *</label>
                <select 
                  required 
                  value={formData.service}
                  onChange={e => setFormData({...formData, service: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[#1A2E4C] text-sm font-medium focus:outline-none focus:border-[#D87939] focus:bg-white focus:ring-2 focus:ring-[#D87939]/20 transition-all"
                >
                  <option value="" disabled>Pilih Layanan Utama...</option>
                  {serviceOptions.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-[#1A2E4C] uppercase tracking-wider">Brief Proyek & Objektif *</label>
                <textarea 
                  rows={4} 
                  required 
                  placeholder="Jelaskan kebutuhan, lini masa, atau objektif bisnis yang ingin dicapai..."
                  value={formData.brief}
                  onChange={e => setFormData({...formData, brief: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[#1A2E4C] text-sm font-medium focus:outline-none focus:border-[#D87939] focus:bg-white focus:ring-2 focus:ring-[#D87939]/20 transition-all"
                />
              </div>

              <button type="submit" className="w-full bg-[#D87939] hover:bg-[#C26527] text-white font-semibold py-4 rounded-xl transition-all shadow-md shadow-[#D87939]/30 flex items-center justify-center gap-2 mt-2">
                <span>Kirim Brief & Konsultasi Now</span>
                <Send className="w-4 h-4" />
              </button>
            </form>

            {submitted && (
              <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-5 mt-6 flex items-center gap-4 text-emerald-900">
                <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0" />
                <div>
                  <strong className="block text-sm font-bold">Brief Anda Berhasil Terkirim!</strong>
                  <span className="text-xs text-emerald-700 block mt-0.5">Anda akan dihubungkan ke WhatsApp Sivarya dalam 1 detik...</span>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-white rounded-lg p-8 border border-slate-200 shadow-sm">
              <span className="font-mono text-xs font-bold text-[#D87939] tracking-widest uppercase">DIRECT CONTACT</span>
              <h3 className="font-heading font-bold text-xl text-[#1A2E4C] mt-1 mb-6">Informasi Kontak Respon Cepat</h3>

              <div className="flex flex-col gap-4">
                <a href="https://wa.me/6285110511403" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-[#D87939]/10 hover:border-[#D87939]/40 transition-all group">
                  <div className="w-11 h-11 rounded-full bg-[#D87939]/10 text-[#D87939] flex items-center justify-center shrink-0 group-hover:bg-[#D87939] group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">Telepon & WhatsApp</span>
                    <span className="font-bold text-[#1A2E4C] text-base group-hover:text-[#D87939] transition-colors">+62 851-1051-1403</span>
                  </div>
                </a>

                <a href="mailto:halosivarya@gmail.com" className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-[#D87939]/10 hover:border-[#D87939]/40 transition-all group">
                  <div className="w-11 h-11 rounded-full bg-[#D87939]/10 text-[#D87939] flex items-center justify-center shrink-0 group-hover:bg-[#D87939] group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">Email Respon Cepat</span>
                    <span className="font-bold text-[#1A2E4C] text-base group-hover:text-[#D87939] transition-colors">halosivarya@gmail.com</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-11 h-11 rounded-full bg-[#D87939]/10 text-[#D87939] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-[#1A2E4C]">PT Sinergi Inovasi Karya</h4>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                Jl. Ratu Bidadari 3 no 2, Ciputat, Tangerang Selatan, Banten, Indonesia.
              </p>

              <div className="w-full h-48 rounded-2xl overflow-hidden border border-slate-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7538965876356!2d106.7454!3d-6.3092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f00676451e5f%3A0x6e8e8e8e8e8e8e8e!2sCiputat%2C%20South%20Tangerang!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  title="Sivarya Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
