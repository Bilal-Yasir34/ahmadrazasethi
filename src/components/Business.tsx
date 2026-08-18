import { Building2, MapPin, Calendar, Layers, ExternalLink, Phone, Mail, MessageCircle } from 'lucide-react';
import { profile } from '@/data/profile';
import { useReveal } from '@/hooks/useReveal';

export function Business() {
  const { ref, visible } = useReveal();
  const b = profile.business;

  const facts = [
    { label: 'Business Name', value: b.name },
    { label: 'Industry', value: b.industry },
    { label: 'Location', value: b.location },
    { label: 'Specialization', value: b.specialization },
    { label: 'Established', value: b.established },
  ];

  return (
    <section id="business" className="grain relative overflow-hidden bg-charcoal-light py-24 lg:py-32">
      <div className="absolute inset-0 z-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(201,169,106,0.5) 2px, rgba(201,169,106,0.5) 3px)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-gold/70">
              The Business
            </p>
            <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              The Business
            </h2>
            <p className="mt-4 text-sm uppercase tracking-[0.2em] text-gold/60">
              Textiles. Trade. Precision.
            </p>
            <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center">
              <p className="text-lg leading-relaxed text-white/70">
                Based in Lahore — the historic heart of Pakistan's textile industry — Ahmad is
                involved in the trade of quality fabrics, built on relationships, consistency and
                an uncompromising eye for detail. The work speaks through the product.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 sm:grid-cols-2">
                {facts.map((fact) => (
                  <div key={fact.label} className="bg-charcoal-light p-5">
                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-gold/60">
                      {fact.label}
                    </p>
                    <p className="mt-1.5 font-serif text-lg text-white">{fact.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <BusinessRow
                icon={<Building2 size={18} />}
                label="Business Name"
                value={b.name}
                href={b.websiteUrl}
                external
              />
              <BusinessRow
                icon={<Layers size={18} />}
                label="Industry"
                value={b.industry}
              />
              <BusinessRow
                icon={<MapPin size={18} />}
                label="Location"
                value={b.location}
              />
              <BusinessRow
                icon={<ExternalLink size={18} />}
                label="Website"
                value={b.website}
                href={b.websiteUrl}
                external
              />
              <BusinessRow
                icon={<Mail size={18} />}
                label="Email"
                value={b.email}
                href={`mailto:${b.email}`}
              />
              <BusinessRow
                icon={<Phone size={18} />}
                label="Phone"
                value={b.phone}
                href={`tel:${b.phoneRaw}`}
              />
              <BusinessRow
                icon={<MessageCircle size={18} />}
                label="WhatsApp"
                value={b.whatsapp}
                href={`https://wa.me/${b.whatsappRaw}`}
                external
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BusinessRow({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <div className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] px-5 py-4 transition-all duration-300 hover:border-gold/20 hover:bg-white/[0.04]">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gold/15 bg-gold/5 text-gold transition-colors group-hover:bg-gold/10">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">{label}</p>
        <p className="mt-0.5 truncate text-sm font-medium text-white/90">{value}</p>
      </div>
      {href && external && (
        <ExternalLink size={14} className="shrink-0 text-white/20 transition-colors group-hover:text-gold/60" />
      )}
    </div>
  );

  if (href) {
    return (
      <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className="block">
        {content}
      </a>
    );
  }
  return content;
}
