import { Heart, User, Camera, Star, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Heart },
    { id: 'tomoe', label: 'Tomoe', icon: User },
    { id: 'nanami', label: 'Nanami', icon: User },
    { id: 'memories', label: 'Memories', icon: Camera },
    { id: 'story', label: 'Our Story', icon: Star },
    { id: 'dreams', label: 'Dreams', icon: MapPin },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="nav-3d px-8 py-4">
          <div className="flex items-center space-x-8">
            <div className="font-accent text-2xl font-bold text-gradient-romantic-3d text-title-3d">
              Tomoe & Nanami
            </div>
            <div className="flex items-center space-x-6">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant="ghost"
                    size="sm"
                    onClick={() => onSectionChange(item.id)}
                    className={`rounded-full px-6 py-3 font-elegant font-semibold text-sm transition-3d ${
                      activeSection === item.id
                        ? 'btn-romantic-3d'
                        : 'text-foreground/80 hover:text-foreground hover:bg-gradient-glass backdrop-blur-sm hover:shadow-3d-soft text-enhanced'
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <div className="nav-3d mx-4 mb-4 px-4 py-3">
          <div className="grid grid-cols-6 gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => onSectionChange(item.id)}
                  className={`flex flex-col items-center justify-center py-4 px-3 rounded-xl font-elegant font-semibold transition-3d ${
                    activeSection === item.id
                      ? 'bg-3d-primary text-white shadow-3d-medium'
                      : 'text-foreground/80 hover:bg-gradient-glass text-enhanced'
                  }`}
                >
                  <Icon className="w-5 h-5 mb-1" />
                  <span className="text-xs font-semibold">{item.label}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};