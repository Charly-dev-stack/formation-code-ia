import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MentorSection from './components/MentorSection';
import FeatureSection from './components/FeatureSection';
import CurriculumSection from './components/CurriculumSection';
import PricingSection from './components/PricingSection';
import TestimonialSection from './components/TestimonialSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <Header />
      <main>
        <HeroSection />
        <MentorSection />
        <FeatureSection />
        <CurriculumSection />
        <PricingSection />
        <TestimonialSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
