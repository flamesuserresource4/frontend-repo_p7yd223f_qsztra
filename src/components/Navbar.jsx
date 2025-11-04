import { useState } from 'react';
import { Menu, X, Heart, Home, Users, BookOpen, Newspaper, Phone } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Beranda', icon: Home },
    { href: '#profil', label: 'Profil', icon: BookOpen },
    { href: '#program', label: 'Program', icon: Newspaper },
    { href: '#relawan', label: 'Relawan', icon: Users },
    { href: '#kontak', label: 'Kontak', icon: Phone },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-blue-600 to-emerald-500 flex items-center justify-center text-white font-bold">Y</div>
            <div className="leading-tight">
              <p className="font-semibold text-slate-800">Yayasan Pelita Cakrawala</p>
              <p className="text-xs text-slate-500 -mt-0.5">Nusantara</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map(({ href, label }) => (
              <a key={href} href={href} className="text-sm text-slate-600 hover:text-blue-600 transition-colors">
                {label}
              </a>
            ))}
            <a
              href="#donasi"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 px-4 py-2 text-white text-sm shadow hover:opacity-95 transition"
            >
              <Heart className="h-4 w-4" /> Donasi
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg border border-slate-200 text-slate-700"
            aria-label="Toggle Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 text-slate-700"
              >
                <Icon className="h-4 w-4 text-slate-500" />
                <span>{label}</span>
              </a>
            ))}
            <a
              href="#donasi"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 p-2 rounded-lg bg-gradient-to-r from-blue-600 to-emerald-500 text-white"
            >
              <Heart className="h-4 w-4" /> Donasi
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
