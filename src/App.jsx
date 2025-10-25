import React from 'react';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import HowItWorks from './components/HowItWorks';
import PricingAndSocialProof from './components/PricingAndSocialProof';

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-purple-500/30 selection:text-white">
      <Hero />
      <Showcase />
      <HowItWorks />
      <PricingAndSocialProof />
    </div>
  );
}
