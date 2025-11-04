import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="kontak" className="mt-16 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-blue-600 to-emerald-500 flex items-center justify-center text-white font-bold">Y</div>
              <p className="font-semibold text-slate-800">Yayasan Pelita Cakrawala Nusantara</p>
            </div>
            <p className="mt-3 text-sm text-slate-600">Misi kami: menghadirkan pendidikan dan pemberdayaan yang inklusif untuk masa depan Indonesia yang cerah.</p>
          </div>

          <div>
            <p className="font-semibold text-slate-800">Kontak</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-blue-600" /> info@ypcn.or.id</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-blue-600" /> +62 812-0000-0000 (WhatsApp)</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-blue-600" /> Jakarta, Indonesia</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-slate-800">Ikuti Kami</p>
            <div className="mt-3 flex items-center gap-3">
              <a href="#" className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50"><Facebook className="h-4 w-4" /></a>
              <a href="#" className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50"><Instagram className="h-4 w-4" /></a>
              <a href="#" className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50"><Linkedin className="h-4 w-4" /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Yayasan Pelita Cakrawala Nusantara. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="#profil" className="hover:underline">Profil</a>
            <a href="#program" className="hover:underline">Program</a>
            <a href="#donasi" className="hover:underline">Donasi</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
