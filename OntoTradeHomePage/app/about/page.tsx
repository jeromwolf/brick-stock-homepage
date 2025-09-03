import AboutHero from '@/components/AboutHero';
import Mission from '@/components/Mission';
import Team from '@/components/Team';
import History from '@/components/History';
import Partners from '@/components/Partners';

export default function AboutPage() {
  return (
    <div className="pt-16">
      <AboutHero />
      <Mission />
      <Team />
      <History />
      <Partners />
    </div>
  );
}