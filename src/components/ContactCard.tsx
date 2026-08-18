import { Download, Share2, Check, UserPlus } from 'lucide-react';
import { useState } from 'react';
import { profile } from '@/data/profile';
import { downloadVCard } from '@/utils/vcard';
import { useReveal } from '@/hooks/useReveal';

export function ContactCard() {
  const { ref, visible } = useReveal();
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: `${profile.name} — Digital Business Card`,
      text: `${profile.name} — ${profile.roles.join(', ')}. ${profile.tagline}`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // user cancelled
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        // clipboard unavailable
      }
    }
  };

  return (
    <section className="grain relative bg-charcoal py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-gold/70">
              Digital Contact Card
            </p>
            <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              Keep My Contact
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          </div>

          <div className="mx-auto max-w-2xl">
            <div className="relative overflow-hidden rounded-3xl glass-strong p-8 shadow-luxury sm:p-12">
              <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gold/[0.05] blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-gold/[0.03] blur-3xl" />

              <div className="relative flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-gold/20 bg-gold/5">
                  {profile.profileImage ? (
                    <img src={profile.profileImage} alt={profile.name} className="h-full w-full object-cover" />
                  ) : (
                    <UserPlus size={28} className="text-gold" />
                  )}
                </div>

                <h3 className="mt-6 font-serif text-2xl font-semibold text-white">
                  Save to your phone
                </h3>
                <p className="mt-2 max-w-sm text-sm text-white/50">
                  Download the vCard to instantly add {profile.name} to your contacts with all
                  details included.
                </p>

                <button
                  onClick={downloadVCard}
                  className="group mt-8 flex w-full items-center justify-center gap-2.5 rounded-full bg-gold px-6 py-4 text-sm font-semibold text-charcoal transition-all hover:bg-gold-light hover:shadow-[0_0_40px_rgba(201,169,106,0.25)] sm:w-auto sm:px-10"
                >
                  <Download size={18} className="transition-transform group-hover:translate-y-0.5" />
                  Add {profile.name.split(' ')[0]} to Contacts
                </button>

                <div className="my-6 flex items-center gap-3 text-white/20">
                  <div className="h-px w-12 bg-white/10" />
                  <span className="text-[10px] uppercase tracking-[0.2em]">or</span>
                  <div className="h-px w-12 bg-white/10" />
                </div>

                <button
                  onClick={handleShare}
                  className="group flex w-full items-center justify-center gap-2.5 rounded-full border border-white/15 px-6 py-4 text-sm font-semibold text-white transition-all hover:border-gold/40 hover:text-gold sm:w-auto sm:px-10"
                >
                  {copied ? (
                    <>
                      <Check size={18} className="text-green-400" />
                      Link Copied
                    </>
                  ) : (
                    <>
                      <Share2 size={18} className="transition-transform group-hover:scale-110" />
                      Share Profile
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
