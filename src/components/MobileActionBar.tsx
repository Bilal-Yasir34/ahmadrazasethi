import { Phone, MessageCircle, UserPlus } from 'lucide-react';
import { profile } from '@/data/profile';
import { downloadVCard } from '@/utils/vcard';

export function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="glass-strong border-t border-gold/10 px-4 py-3">
        <div className="flex items-center justify-around gap-2">
          <a
            href={`tel:${profile.phoneRaw}`}
            className="flex flex-1 flex-col items-center gap-1 rounded-xl py-2.5 text-white/80 transition-colors active:bg-white/5"
          >
            <Phone size={18} className="text-gold" />
            <span className="text-[10px] font-medium uppercase tracking-wider">Call</span>
          </a>

          <a
            href={`https://wa.me/${profile.whatsappRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 flex-col items-center gap-1 rounded-xl py-2.5 text-white/80 transition-colors active:bg-white/5"
          >
            <MessageCircle size={18} className="text-gold" />
            <span className="text-[10px] font-medium uppercase tracking-wider">WhatsApp</span>
          </a>

          <button
            onClick={downloadVCard}
            className="flex flex-1 flex-col items-center gap-1 rounded-xl bg-gold/10 py-2.5 text-gold transition-colors active:bg-gold/20"
          >
            <UserPlus size={18} />
            <span className="text-[10px] font-medium uppercase tracking-wider">Save</span>
          </button>
        </div>
      </div>
    </div>
  );
}
