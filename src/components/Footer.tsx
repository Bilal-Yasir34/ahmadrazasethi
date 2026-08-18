import { profile } from '@/data/profile';

export function Footer() {
  return (
    <footer className="grain relative border-t border-white/5 bg-charcoal py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="font-serif text-lg font-semibold text-white">
            {profile.name}
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">
            {profile.roles.join('  •  ')}
          </p>
          <div className="mt-2 h-px w-12 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          <p className="mt-4 text-xs text-white/30">
            One Link. One Identity. One Introduction.
          </p>
          <p className="mt-1 text-[10px] text-white/20">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
