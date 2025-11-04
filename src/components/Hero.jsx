import { motion } from 'framer-motion';
import { ArrowRight, HeartHandshake } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50" />
      <div className="absolute -top-24 -right-24 h-72 w-72 md:h-[28rem] md:w-[28rem] rounded-full bg-emerald-200/30 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 md:h-[28rem] md:w-[28rem] rounded-full bg-blue-200/30 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-800"
          >
            Menyalakan Harapan, Mewujudkan Masa Depan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-4 text-slate-600 text-base md:text-lg"
          >
            Yayasan Pelita Cakrawala Nusantara bergerak di bidang sosial, pendidikan, dan kemanusiaan untuk
            menghadirkan dampak berkelanjutan bagi masyarakat Indonesia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#donasi"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 px-5 py-3 text-white font-medium shadow-sm hover:opacity-95 transition"
            >
              Donasi Sekarang <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#profil"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-slate-700 hover:bg-white hover:shadow-sm transition"
            >
              Kenali Kami <HeartHandshake className="h-4 w-4 text-emerald-600" />
            </a>
          </motion.div>

          <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
            {[
              { label: 'Relawan Aktif', value: '120+' },
              { label: 'Penerima Manfaat', value: '5.2K+' },
              { label: 'Kota Terjangkau', value: '18' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
                <p className="text-xs text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="h-full w-full bg-gradient-to-br from-blue-600/10 via-emerald-500/10 to-blue-600/10 flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold">Visi Kami</p>
                <p className="mt-2 text-slate-700">Membangun ekosistem sosial yang inklusif, berdaya, dan berkelanjutan melalui pendidikan dan kolaborasi.</p>
                <div className="mt-6 grid grid-cols-3 gap-4">
                  {['Integritas', 'Empati', 'Transparansi'].map((v) => (
                    <span key={v} className="text-xs px-3 py-1 rounded-full bg-white/70 border border-slate-200 text-slate-700">
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
