import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  type: 'sakura' | 'tulip';
}

export const EnhancedFloralElements = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generatePetals = () => {
      const newPetals: Petal[] = [];
      for (let i = 0; i < 25; i++) {
        newPetals.push({
          id: i,
          left: Math.random() * 100,
          size: Math.random() * 8 + 4,
          duration: Math.random() * 6 + 8,
          delay: Math.random() * 12,
          type: Math.random() > 0.4 ? 'sakura' : 'tulip',
        });
      }
      setPetals(newPetals);
    };

    generatePetals();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className={petal.type === 'sakura' ? 'falling-sakura' : 'falling-tulip'}
          style={{
            left: `${petal.left}%`,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
          }}
        />
      ))}
      
      {/* Static decorative elements for depth */}
      <div className="absolute top-10 left-5 w-6 h-6 sakura-petal opacity-30"></div>
      <div className="absolute top-32 right-10 w-4 h-4 tulip-petal opacity-25"></div>
      <div className="absolute top-1/4 left-1/3 w-5 h-5 sakura-petal opacity-35"></div>
      <div className="absolute top-2/3 right-1/4 w-7 h-7 tulip-petal opacity-20"></div>
      <div className="absolute bottom-1/3 left-1/5 w-4 h-4 sakura-petal opacity-40"></div>
      <div className="absolute bottom-20 right-1/3 w-6 h-6 tulip-petal opacity-30"></div>
    </div>
  );
};