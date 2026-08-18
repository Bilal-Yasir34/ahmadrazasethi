import { Sparkles } from 'lucide-react';
import { profile } from '@/data/profile';
import { useReveal } from '@/hooks/useReveal';

export function PersonalNote() {
  const { ref, visible } = useReveal();

  return (
    <section className="grain relative bg-gradient-to-b from-charcoal-light to-charcoal py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-gold/20 bg-gold/5">
              <Sparkles size={20} className="text-gold" />
            </div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-gold/70">
              A Little More About Ahmad
            </p>

            <p className="mt-6 font-serif text-xl italic leading-relaxed text-white/80 lg:text-2xl">
              "{profile.personalNote}"
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-2.5">
              {profile.traits.map((trait, i) => (
                <span
                  key={trait}
                  className="rounded-full border border-white/8 bg-white/[0.02] px-4 py-2 text-xs font-medium text-white/60 transition-colors hover:border-gold/20 hover:text-gold/80"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(10px)',
                    transition: `opacity 0.4s ease, transform 0.4s ease`,
                    transitionDelay: `${i * 0.06}s`,
                  }}
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
