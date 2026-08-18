import { profile } from '@/data/profile';
import { useReveal } from '@/hooks/useReveal';

export function Personality() {
  const { ref, visible } = useReveal();

  return (
    <section className="grain relative bg-gradient-to-b from-charcoal to-charcoal-light py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-gold/70">
              Personality
            </p>
            <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              The Man Behind the Business
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {profile.personality.map((trait, i) => (
              <div
                key={trait.title}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all duration-500 hover:border-gold/20 hover:bg-white/[0.04]"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.6s ease, transform 0.6s ease, border-color 0.4s ease, background-color 0.4s ease`,
                  transitionDelay: `${i * 0.12}s`,
                }}
              >
                <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-gold/[0.03] blur-2xl transition-opacity duration-500 group-hover:bg-gold/[0.06]" />
                <span className="relative font-serif text-5xl font-semibold text-gold/20 transition-colors duration-500 group-hover:text-gold/30">
                  0{i + 1}
                </span>
                <h3 className="relative mt-4 font-serif text-xl font-medium text-white">
                  {trait.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-white/50">
                  {trait.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
