import { useEffect, useState } from 'react';
import { Heart, Calendar } from 'lucide-react';

export const RelationshipCounter = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  // Set your relationship start date here (MM/DD/YYYY)
  const relationshipStart = new Date('2023-02-14'); // Valentine's Day example

  useEffect(() => {
    const updateCounter = () => {
      const now = new Date();
      const difference = now.getTime() - relationshipStart.getTime();
      
      const totalDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      const totalHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const totalMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      
      setDays(totalDays);
      setHours(totalHours);
      setMinutes(totalMinutes);
    };

    updateCounter();
    const interval = setInterval(updateCounter, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-romantic-3d p-10 max-w-lg mx-auto">
      <div className="flex items-center justify-center mb-6">
        <Heart className="w-10 h-10 text-primary mr-4 animate-pulse" />
        <h3 className="font-accent text-3xl font-bold text-gradient-romantic-3d text-title-3d">
          Together Since
        </h3>
      </div>
      
      <div className="flex items-center justify-center mb-8 text-muted-foreground">
        <Calendar className="w-5 h-5 mr-3" />
        <span className="text-base font-elegant font-medium text-enhanced">
          {relationshipStart.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="text-center">
          <div className="text-4xl font-bold text-gradient-romantic-3d font-display text-title-3d mb-2">
            {days}
          </div>
          <div className="text-sm text-muted-foreground font-elegant font-semibold text-enhanced">Days</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-gradient-romantic-3d font-display text-title-3d mb-2">
            {hours}
          </div>
          <div className="text-sm text-muted-foreground font-elegant font-semibold text-enhanced">Hours</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-gradient-romantic-3d font-display text-title-3d mb-2">
            {minutes}
          </div>
          <div className="text-sm text-muted-foreground font-elegant font-semibold text-enhanced">Minutes</div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-base text-muted-foreground italic font-elegant text-enhanced leading-relaxed">
          "Every moment with you is a beautiful memory in the making"
        </p>
      </div>
    </div>
  );
};