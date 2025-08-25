import { RelationshipCounter } from '@/components/RelationshipCounter';
import { Button } from '@/components/ui/button';
import { Heart, ArrowDown } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';
import cherryTulipBg from '@/assets/cherry-tulip-background.jpg';

interface HeroSectionProps {
  onExplore: () => void;
}

export const HeroSection = ({ onExplore }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cherry-garden">
      {/* Enhanced 3D Background with multiple layers */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: `url(${cherryTulipBg})` }}
      />
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-floral-pattern" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/40" />

      {/* Enhanced Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="font-accent text-7xl md:text-9xl font-bold text-gradient-romantic-3d text-title-3d mb-6 drop-shadow-2xl">
            Tomoe & Nanami
          </h1>
          <p className="text-2xl md:text-3xl text-foreground/90 font-elegant font-medium max-w-3xl mx-auto leading-relaxed text-enhanced">
            A love story written in cherry blossoms and painted in sunset hues
          </p>
        </div>

        {/* Enhanced Relationship Counter */}
        <div className="mb-16">
          <RelationshipCounter />
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            onClick={onExplore}
            className="btn-romantic-3d text-xl px-10 py-5"
          >
            <Heart className="w-6 h-6 mr-3" />
            Explore Our Journey
          </Button>
          <Button 
            variant="outline"
            className="btn-romantic-outline-3d text-xl px-10 py-5"
          >
            Our Love Story
          </Button>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="glass-romantic-3d p-4 rounded-full">
            <ArrowDown className="w-8 h-8 text-primary" />
          </div>
        </div>
      </div>

      {/* Enhanced Decorative Elements with cherry blossoms and tulips */}
      <div className="absolute top-20 left-10 w-24 h-24 sakura-petal opacity-40 shadow-3d-soft"></div>
      <div className="absolute top-40 right-20 w-20 h-20 tulip-petal opacity-50 shadow-3d-soft"></div>
      <div className="absolute bottom-40 left-20 w-28 h-28 sakura-petal opacity-35 shadow-3d-soft"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 tulip-petal opacity-45 shadow-3d-soft"></div>
      <div className="absolute bottom-1/3 left-1/3 w-18 h-18 sakura-petal opacity-50 shadow-3d-soft"></div>
      <div className="absolute top-2/3 right-1/3 w-22 h-22 tulip-petal opacity-40 shadow-3d-soft"></div>
    </section>
  );
};