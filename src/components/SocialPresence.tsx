import { Globe, Linkedin, Instagram, Facebook, MessageCircle, Mail } from 'lucide-react';
import { profile } from '@/data/profile';
import { useReveal } from '@/hooks/useReveal';

export function SocialPresence() {
  const { ref, visible } = useReveal();
  const s = profile.social;

  const links = [
    { label: 'Website', icon: Globe, href: s.website, available: !!s.website },
    { label: 'LinkedIn', icon: Linkedin, href: s.linkedin, available: !!s.linkedin },
    { label: 'Instagram', icon: Instagram, href: s.instagram, available: !!s.instagram },
    { label: 'Facebook', icon: Facebook, href: s.facebook, available: !!s.facebook },
    { label: 'WhatsApp', icon: MessageCircle, href: s.whatsapp, available: !!s.whatsapp },
    { label: 'Email', icon: Mail, href: s.email, available: !!s.email },
  ].filter((l) => l.available);

  return (
    <section className="grain relative bg-gradient-to-b from-charcoal to-charcoal-light py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-gold/70">
              Online Presence
            </p>
            <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              Find Me Online
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          </div>

          <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-4">
            {links.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.02] px-6 py-4 transition-all duration-300 hover:border-gold/30 hover:bg-white/[0.04]"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(15px)',
                  transition: `opacity 0.5s ease, transform 0.5s ease, border-color 0.3s ease, background-color 0.3s ease`,
                  transitionDelay: `${i * 0.08}s`,
                }}
              >
                <link.icon
                  size={20}
                  className="text-white/50 transition-colors group-hover:text-gold"
                />
                <span className="text-sm font-medium text-white/70 transition-colors group-hover:text-white">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
