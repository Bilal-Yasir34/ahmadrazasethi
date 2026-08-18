import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Introduction } from '@/components/Introduction';
import { Personality } from '@/components/Personality';
import { Business } from '@/components/Business';
import { ContactCard } from '@/components/ContactCard';
import { SocialPresence } from '@/components/SocialPresence';
import { Contact } from '@/components/Contact';
import { Quote } from '@/components/Quote';
import { PersonalNote } from '@/components/PersonalNote';
import { QRCodeSection } from '@/components/QRCodeSection';
import { MobileActionBar } from '@/components/MobileActionBar';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-charcoal text-white">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <Personality />
        <Business />
        <ContactCard />
        <Quote />
        <SocialPresence />
        <Contact />
        <PersonalNote />
        <QRCodeSection />
      </main>
      <Footer />
      <MobileActionBar />
      <div className="h-16 md:hidden" />
    </div>
  );
}

export default App;
