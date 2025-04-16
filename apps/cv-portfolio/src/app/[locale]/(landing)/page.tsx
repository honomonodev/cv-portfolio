import Hero from '../../../components/sections/Hero';
import AboutSection from '../../../components/sections/AboutSection';
import AccessibilityPreview from '../../../components/sections/AccessibilityPreview';
import Tagline from '@/components/layout/Tagline';
import { Footer, Header } from '@/components';

export default function Page() {
  return (
    <>
      <Tagline />
      <Header />
      <Hero />
      <AboutSection />
      <AccessibilityPreview />
      <Footer />
    </>
  );
}
