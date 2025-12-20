import { Hero } from './components/Hero';
import { FeatureCards } from './components/FeatureCards';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <FeatureCards />
      <Footer />
    </div>
  );
}