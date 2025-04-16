import { Header } from './components';
import Footer from './components/layout/Footer';
import Tagline from './components/layout/Tagline';
import AboutSection from './components/sections/AboutSection';
import Hero from './components/sections/Hero';

export default function Home() {
  return (
    <main>
      <Tagline />
      <Header />
      <Hero />
      <AboutSection />
      <Footer />
    </main>
  );
}
