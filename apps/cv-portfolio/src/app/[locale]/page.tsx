import Tagline from '../../components/layout/Tagline';
import Hero from '../../components/sections/Hero';
import AboutSection from '../../components/sections/AboutSection';
import Footer from '../../components/layout/Footer';

export default function Home() {
  return (
    <main>
      <Tagline />
      <Hero />
      <AboutSection />
      <Footer />
    </main>
  );
}
