import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera, Heart, Calendar, MapPin, Plus } from 'lucide-react';
import sakuraTulipPattern from '@/assets/sakura-tulip-pattern.jpg';

export const MemoriesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Memories' },
    { id: 'dates', label: 'Romantic Dates' },
    { id: 'travel', label: 'Adventures' },
    { id: 'milestones', label: 'Milestones' },
    { id: 'everyday', label: 'Everyday Magic' }
  ];

  // Sample memories - replace with actual data
  const memories = [
    {
      id: 1,
      title: 'First Date at the Cherry Blossom Festival',
      date: '2023-02-14',
      location: 'Tokyo Park',
      category: 'dates',
      description: 'Under the falling sakura petals, we shared our first kiss...',
      type: 'photo'
    },
    {
      id: 2,
      title: 'Our First Adventure Together',
      date: '2023-03-20',
      location: 'Mount Fuji',
      category: 'travel',
      description: 'Watching the sunrise together from the top of the world',
      type: 'photo'
    },
    {
      id: 3,
      title: '100 Days Together',
      date: '2023-05-25',
      location: 'Our Favorite Café',
      category: 'milestones',
      description: 'Celebrating our first major milestone with cake and dreams',
      type: 'photo'
    },
    {
      id: 4,
      title: 'Cooking Ramen Together',
      date: '2023-06-10',
      location: 'Home',
      category: 'everyday',
      description: 'Making a mess in the kitchen but perfect memories',
      type: 'photo'
    }
  ];

  const filteredMemories = selectedCategory === 'all' 
    ? memories 
    : memories.filter(memory => memory.category === selectedCategory);

  return (
    <section className="min-h-screen py-24 px-6 bg-cherry-garden relative">
      {/* Enhanced cherry and tulip background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${sakuraTulipPattern})` }}
      />
      <div className="absolute inset-0 bg-floral-pattern opacity-40" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-accent text-6xl md:text-7xl font-bold text-gradient-romantic-3d text-title-3d mb-6">
            Our Precious Memories
          </h2>
          <p className="text-2xl text-foreground/80 max-w-3xl mx-auto font-elegant font-medium text-enhanced">
            Every moment we share becomes a treasured memory in our love story
          </p>
        </div>

        {/* Enhanced Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-full px-8 py-4 text-lg font-elegant font-semibold transition-3d ${
                selectedCategory === category.id
                  ? 'btn-romantic-3d'
                  : 'btn-romantic-outline-3d'
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Enhanced Memories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredMemories.map((memory) => (
            <div key={memory.id} className="card-romantic-3d overflow-hidden">
              {/* Enhanced placeholder for photo */}
              <div className="aspect-video bg-gradient-3d-primary flex items-center justify-center mb-6 rounded-xl shadow-3d-soft">
                <Camera className="w-16 h-16 text-white/70 drop-shadow-lg" />
              </div>
              
              <div className="space-y-4">
                <h3 className="font-elegant font-bold text-xl text-foreground text-title-3d">
                  {memory.title}
                </h3>
                
                <div className="flex items-center text-sm text-foreground/70 space-x-6">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-primary" />
                    <span className="font-elegant font-medium text-enhanced">
                      {new Date(memory.date).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-primary" />
                    <span className="font-elegant font-medium text-enhanced">
                      {memory.location}
                    </span>
                  </div>
                </div>
                
                <p className="text-foreground/80 text-base leading-relaxed font-elegant text-enhanced">
                  {memory.description}
                </p>
                
                <Button variant="ghost" size="sm" className="w-full mt-6 btn-romantic-outline-3d">
                  <Heart className="w-5 h-5 mr-2" />
                  View Full Memory
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Add Memory Button */}
        <div className="text-center">
          <Button className="btn-romantic-3d text-xl px-10 py-5">
            <Plus className="w-6 h-6 mr-3" />
            Add New Memory
          </Button>
        </div>
      </div>
    </section>
  );
};