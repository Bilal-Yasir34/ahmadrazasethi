import { profile } from '@/data/profile';
import { useReveal } from '@/hooks/useReveal';

export function Quote() {
  const { ref, visible } = useReveal();

  return (
    <section className="grain relative overflow-hidden bg-charcoal py-28 lg:py-40">
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.04] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} text-center`}>
          <span className="font-serif text-7xl leading-none text-gold/20 sm:text-8xl">"</span>
          <blockquote className="-mt-8 font-serif text-2xl font-medium italic leading-relaxed text-white sm:text-3xl lg:text-4xl lg:leading-relaxed">
            {profile.quote}
          </blockquote>
          <p className="mt-8 text-sm uppercase tracking-[0.3em] text-gold/60">
            — {profile.name}
          </p>
        </div>
      </div>
    </section>
  );
}
