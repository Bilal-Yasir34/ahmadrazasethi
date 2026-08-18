import { Phone, MessageCircle, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { profile } from '@/data/profile';
import { useReveal } from '@/hooks/useReveal';

export function Contact() {
  const { ref, visible } = useReveal();
  const p = profile;

  const items = [
    {
      icon: Phone,
      label: 'Phone',
      value: p.phone,
      href: `tel:${p.phoneRaw}`,
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: p.whatsapp,
      href: `https://wa.me/${p.whatsappRaw}`,
    },
    {
      icon: Mail,
      label: 'Email',
      value: p.email,
      href: `mailto:${p.email}`,
    },
    {
      icon: MapPin,
      label: 'Office',
      value: p.location,
      href: `https://maps.google.com/?q=${encodeURIComponent(p.location)}`,
    },
  ];

  return (
    <section id="connect" className="grain relative bg-charcoal-light py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-gold/70">
              Contact
            </p>
            <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              Let's Talk Business
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === 'WhatsApp' || item.label === 'Office' ? '_blank' : undefined}
                  rel={item.label === 'WhatsApp' || item.label === 'Office' ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:border-gold/20 hover:bg-white/[0.04]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold/15 bg-gold/5 text-gold transition-colors group-hover:bg-gold/10">
                    <item.icon size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
                      {item.label}
                    </p>
                    <p className="mt-1 truncate text-sm font-medium text-white/90">{item.value}</p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-white/20 transition-all group-hover:text-gold/60"
                  />
                </a>
              ))}
            </div>

            <div className="mt-10 text-center">
              <a
                href={`mailto:${p.email}`}
                className="group inline-flex items-center gap-2.5 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-charcoal transition-all hover:bg-gold-light hover:shadow-[0_0_40px_rgba(201,169,106,0.25)]"
              >
                Get in Touch
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
