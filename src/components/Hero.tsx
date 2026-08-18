import { Download, ArrowRight, QrCode } from 'lucide-react';
import { profile } from '@/data/profile';
import { downloadVCard } from '@/utils/vcard';

export function Hero() {
  const scrollToBusiness = () => {
    document.querySelector('#business')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="grain relative flex min-h-screen items-center overflow-hidden bg-charcoal pt-24 pb-16"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gold/[0.04] blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-gold/[0.03] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-10">
        <div className="order-2 flex justify-center lg:order-1">
          <PortraitFrame />
        </div>

        <div className="order-1 flex flex-col items-center text-center lg:order-2 lg:items-start lg:text-left">
          <div className="animate-fade-up mb-4 flex items-center gap-2 rounded-full border border-gold/20 px-4 py-1.5">
            <QrCode size={14} className="text-gold" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold/90">
              Digital Business Card
            </span>
          </div>

          <h1
            className="animate-fade-up font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
            style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
          >
            {profile.name}
          </h1>

          <p
            className="animate-fade-up mt-4 text-sm font-medium uppercase tracking-[0.15em] text-white/60 sm:text-base"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
          >
            {profile.roles.join('  •  ')}
          </p>

          <p
            className="animate-fade-up mt-6 max-w-md font-serif text-lg italic text-gold/90 lg:text-xl"
            style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
          >
            "{profile.tagline}"
          </p>

          <div
            className="animate-fade-up mt-10 flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
          >
            <button
              onClick={downloadVCard}
              className="group flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-charcoal transition-all hover:bg-gold-light hover:shadow-[0_0_30px_rgba(201,169,106,0.3)]"
            >
              <Download size={16} className="transition-transform group-hover:translate-y-0.5" />
              Save Contact
            </button>
            <button
              onClick={scrollToBusiness}
              className="group flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-gold/40 hover:text-gold"
            >
              Explore Business
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 lg:block">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Scroll</span>
          <div className="h-10 w-px bg-gradient-to-b from-gold/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}

function PortraitFrame() {
  return (
    <div className="animate-scale-in relative">
      <div className="absolute -inset-4 rounded-[2rem] border border-gold/10" />
      <div className="absolute -inset-8 rounded-[2.5rem] border border-gold/5" />

      <div className="relative h-72 w-72 overflow-hidden rounded-[1.5rem] border border-gold/20 shadow-luxury sm:h-80 sm:w-80 lg:h-[420px] lg:w-[360px]">
        {profile.profileImage ? (
          <img
            src={profile.profileImage}
            alt={profile.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-charcoal-light to-charcoal">
            <div className="absolute inset-0 grain opacity-40" />
            <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-gold/30 sm:h-32 sm:w-32">
              <span className="font-serif text-4xl font-semibold text-gold/70 sm:text-5xl">
                {profile.name.split(' ').map((n) => n[0]).join('')}
              </span>
            </div>
            <p className="relative mt-5 text-xs uppercase tracking-[0.2em] text-white/30">
              Professional Portrait
            </p>
          </div>
        )}
      </div>

      <div className="absolute -bottom-3 -right-3 flex items-center gap-1.5 rounded-full glass-strong px-4 py-2">
        <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
        <span className="text-[10px] font-medium uppercase tracking-wider text-white/70">
          Available
        </span>
      </div>
    </div>
  );
}
