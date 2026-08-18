import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { profile } from '@/data/profile';
import { downloadVCard } from '@/utils/vcard';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Business', href: '#business' },
  { label: 'Connect', href: '#connect' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-strong py-3' : 'py-5 bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <button
          onClick={() => handleNav('#home')}
          className="font-serif text-lg font-semibold tracking-wide text-white transition-colors hover:text-gold"
        >
          {profile.name.split(' ').map((n) => n[0]).join('. ')}
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className="text-sm font-medium tracking-wide text-white/70 transition-colors hover:text-gold"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={downloadVCard}
            className="rounded-full border border-gold/40 px-5 py-2 text-sm font-medium text-gold transition-all hover:bg-gold hover:text-charcoal"
          >
            Connect
          </button>
        </div>

        <button
          className="text-white/80 md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="glass-strong mx-4 mt-3 rounded-2xl p-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className="rounded-lg px-4 py-3 text-left text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-gold"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                setMenuOpen(false);
                downloadVCard();
              }}
              className="mt-2 rounded-lg border border-gold/40 px-4 py-3 text-sm font-medium text-gold"
            >
              Connect
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
