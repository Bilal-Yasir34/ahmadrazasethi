import { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';
import { Download } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export function QRCodeSection() {
  const { ref, visible } = useReveal();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dataUrl, setDataUrl] = useState('');

  useEffect(() => {
    const url = window.location.href;
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, url, {
        width: 240,
        margin: 2,
        color: {
          dark: '#0a0a0a',
          light: '#ffffff',
        },
        errorCorrectionLevel: 'H',
      }).catch(() => {});
    }
    QRCode.toDataURL(url, {
      width: 1024,
      margin: 2,
      color: { dark: '#0a0a0a', light: '#ffffff' },
      errorCorrectionLevel: 'H',
    })
      .then(setDataUrl)
      .catch(() => {});
  }, []);

  const downloadQR = () => {
    if (!dataUrl) return;
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = 'ahmad-raza-sethi-qr.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section className="grain relative bg-charcoal py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-gold/70">
              QR Code
            </p>
            <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl">
              Scan. Connect. Remember.
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

            <div className="mt-12 inline-block rounded-3xl border border-gold/15 bg-white p-6 shadow-luxury">
              <canvas ref={canvasRef} className="rounded-lg" />
            </div>

            <p className="mt-6 max-w-sm text-sm text-white/50">
              Scan to instantly open this digital business card on any device.
            </p>

            <button
              onClick={downloadQR}
              className="group mt-8 inline-flex items-center gap-2.5 rounded-full border border-gold/30 px-7 py-3.5 text-sm font-semibold text-gold transition-all hover:bg-gold hover:text-charcoal"
            >
              <Download size={16} className="transition-transform group-hover:translate-y-0.5" />
              Download QR Code
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
