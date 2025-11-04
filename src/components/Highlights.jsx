import { motion } from 'framer-motion';
import { CalendarDays, Users, Sparkles, Quote, ArrowRight, Heart } from 'lucide-react';

const Card = ({ icon: Icon, title, desc, badge }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition overflow-hidden"
  >
    <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-blue-500/5 blur-2xl" />
    <div className="flex items-start gap-4">
      <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-600 to-emerald-500 text-white flex items-center justify-center">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-slate-800">{title}</h3>
          {badge && <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">{badge}</span>}
        </div>
        <p className="mt-1 text-sm text-slate-600">{desc}</p>
        <a href="#program" className="mt-3 inline-flex items-center gap-1 text-sm text-blue-600 hover:underline">
          Pelajari lebih lanjut <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  </motion.div>
);

export default function Highlights() {
  return (
    <section id="profil" className="relative py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Profil Singkat & Sorotan Kegiatan</h2>
          <p className="mt-2 text-slate-600">Sekilas tentang legalitas, visi-misi, dan aktivitas terbaru kami.</p>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Card
            icon={CalendarDays}
            title="Program & Kegiatan"
            desc="Dokumentasi kegiatan yang telah berjalan, program aktif, serta rencana mendatang dengan dampak terukur."
            badge="Update"
          />
          <Card
            icon={Users}
            title="Relawan Aktif"
            desc="Komunitas relawan yang solid dan berjejaring, siap kolaborasi di berbagai daerah."
          />
          <Card
            icon={Sparkles}
            title="Dampak & Testimoni"
            desc="Kisah perubahan dan apresiasi dari penerima manfaat, mitra, dan relawan."
          />
        </div>

        <div id="program" className="mt-14 grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 to-emerald-50 p-6"
          >
            <p className="text-sm uppercase tracking-widest text-blue-700 font-semibold">Transparansi</p>
            <h3 className="mt-2 text-xl font-semibold text-slate-800">Penggunaan Dana yang Akuntabel</h3>
            <p className="mt-2 text-slate-600">Laporan publik dan ringkasan keuangan tersedia berkala untuk memastikan kepercayaan dan akuntabilitas.</p>
            <a href="#donasi" className="mt-4 inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-4 py-2 text-sm shadow hover:bg-blue-700 transition">
              <Heart className="h-4 w-4" /> Dukung Program
            </a>
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <Quote className="h-6 w-6 text-emerald-600" />
            <p className="mt-3 text-slate-700">
              “Bersama YPCN, kami merasakan pendampingan yang konsisten dan manusiawi. Program pendidikan anak benar-benar memberi harapan baru.”
            </p>
            <footer className="mt-3 text-sm text-slate-500">— Rina, Orang Tua Penerima Manfaat</footer>
          </motion.blockquote>
        </div>

        <div id="relawan" className="mt-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-slate-800">Relawan Kami</h3>
              <p className="text-slate-600">Wajah-wajah di balik aksi nyata lapangan.</p>
            </div>
            <a href="#kontak" className="text-sm text-blue-600 hover:underline">Bergabung menjadi relawan</a>
          </div>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1,2,3,4].map((i) => (
              <div key={i} className="rounded-xl border border-slate-200 p-4 bg-white">
                <div className="h-32 rounded-lg bg-gradient-to-br from-blue-100 to-emerald-100" />
                <div className="mt-3">
                  <p className="font-medium text-slate-800">Relawan #{i}</p>
                  <p className="text-xs text-slate-500">Pendidikan & Sosial</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="donasi" className="mt-16">
          <div className="rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-600 to-emerald-500 p-6 text-white">
            <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest/relaxed text-white/80">Donasi</p>
                <h3 className="text-2xl font-semibold">Bersama, setiap rupiah menyalakan harapan</h3>
                <p className="text-white/90 mt-1">Transfer bank, e-wallet, dan QRIS tersedia. Laporan berkala untuk transparansi.</p>
              </div>
              <div className="flex gap-2">
                <a href="#kontak" className="px-4 py-2 rounded-full bg-white text-blue-700 text-sm font-medium shadow hover:bg-blue-50 transition">Hubungi Kami</a>
                <a href="#" className="px-4 py-2 rounded-full bg-black/20 backdrop-blur text-white text-sm font-medium border border-white/30 hover:bg-white/10 transition">QRIS</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
