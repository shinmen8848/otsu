import { useState } from 'react';
import { EnhancedFloralElements } from '@/components/EnhancedFloralElements';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { MemoriesSection } from '@/components/sections/MemoriesSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleExplore = () => {
    setActiveSection('tomoe');
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HeroSection onExplore={handleExplore} />;
      case 'tomoe':
        return <AboutSection person="tomoe" />;
      case 'nanami':
        return <AboutSection person="nanami" />;
      case 'memories':
        return <MemoriesSection />;
      case 'story':
        return (
          <section className="min-h-screen flex items-center justify-center py-24 px-6 bg-tulip-field relative">
            <div className="absolute inset-0 bg-floral-pattern opacity-30" />
            <div className="text-center max-w-3xl relative z-10">
              <h2 className="font-accent text-6xl font-bold text-gradient-romantic-3d text-title-3d mb-8">
                Our Love Story
              </h2>
              <p className="text-2xl text-foreground/80 mb-12 font-elegant font-medium text-enhanced">
                Coming soon - An interactive timeline of our beautiful journey together
              </p>
              <div className="glass-romantic-3d p-10 rounded-3xl">
                <p className="text-foreground/80 leading-relaxed text-lg font-elegant text-enhanced">
                  "From the moment our eyes met under the cherry blossoms, 
                  we knew our hearts had found their home. Every day since has been 
                  a new chapter in our endless love story."
                </p>
              </div>
            </div>
          </section>
        );
      case 'dreams':
        return (
          <section className="min-h-screen flex items-center justify-center py-24 px-6 bg-cherry-garden relative">
            <div className="absolute inset-0 bg-floral-pattern opacity-50" />
            <div className="text-center max-w-3xl relative z-10">
              <h2 className="font-accent text-6xl font-bold text-gradient-romantic-3d text-title-3d mb-8">
                Our Dreams
              </h2>
              <p className="text-2xl text-foreground/80 mb-12 font-elegant font-medium text-enhanced">
                The future we're building together, one dream at a time
              </p>
              <div className="glass-romantic-3d p-10 rounded-3xl">
                <p className="text-foreground/80 leading-relaxed text-lg font-elegant text-enhanced">
                  "Together we dream of travels to distant lands, 
                  cozy evenings watching anime, and a lifetime of shared adventures. 
                  Our biggest dream? Growing old together, still as in love as we are today."
                </p>
              </div>
            </div>
          </section>
        );
      default:
        return <HeroSection onExplore={handleExplore} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-cherry-garden">
      <EnhancedFloralElements />
      <Navigation
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      <main className="relative z-20">
        {renderSection()}
      </main>
    </div>
  );
};

export default Index;
