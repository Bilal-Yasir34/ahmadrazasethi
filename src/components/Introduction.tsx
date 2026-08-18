import { profile } from '@/data/profile';
import { useReveal } from '@/hooks/useReveal';

export function Introduction() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="grain relative bg-charcoal py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-gold/70">
              Introduction
            </p>
            <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              Beyond the Business Card
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          </div>

          <div className="mx-auto max-w-3xl">
            <p className="text-center text-lg leading-relaxed text-white/70 lg:text-xl">
              {profile.bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
