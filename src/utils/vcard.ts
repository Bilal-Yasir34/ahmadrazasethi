import { profile } from '@/data/profile';

export function buildVCard(): string {
  const p = profile;
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${p.name.split(' ').slice(-1)[0]};${p.name.split(' ').slice(0, -1).join(' ')};;;`,
    `FN:${p.name}`,
    `ORG:${p.business.name}`,
    `TITLE:${p.title}`,
    `TEL;TYPE=CELL:${p.phone}`,
    `EMAIL;TYPE=WORK:${p.email}`,
    `URL:${p.websiteUrl}`,
    `ADR;TYPE=WORK:;;${p.location};;;;Pakistan`,
    `NOTE:${p.tagline}`,
    'END:VCARD',
  ];
  return lines.join('\r\n');
}

export function downloadVCard() {
  const vcard = buildVCard();
  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${profile.name.replace(/\s+/g, '_')}.vcf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
