import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Heart, Star, MapPin } from 'lucide-react';
import floralTexture from '@/assets/floral-texture-light.jpg';

interface AboutSectionProps {
  person: 'tomoe' | 'nanami';
}

export const AboutSection = ({ person }: AboutSectionProps) => {
  const isNanami = person === 'nanami';
  
  const personData = {
    tomoe: {
      name: 'Tomoe',
      birthday: 'March 15th', // Update with actual date
      zodiac: 'Pisces',
      personality: 'Gentle, creative, and deeply romantic',
      hobbies: ['Photography', 'Anime', 'Cooking', 'Stargazing'],
      favoriteAnime: ['Your Name', 'Spirited Away', 'Weathering with You'],
      dreams: 'To travel the world and capture beautiful memories together',
      quote: '"In your eyes, I found my home"',
      color: 'from-primary to-secondary'
    },
    nanami: {
      name: 'Nanami',
      birthday: 'August 22nd', // Update with actual date
      zodiac: 'Leo',
      personality: 'Warm, passionate, and adventurous',
      hobbies: ['Drawing', 'Music', 'Gaming', 'Dancing'],
      favoriteAnime: ['Attack on Titan', 'Demon Slayer', 'My Hero Academia'],
      dreams: 'To create art that tells our love story',
      quote: '"With you, every day feels like a new adventure"',
      color: 'from-secondary to-accent'
    }
  };

  const data = personData[person];

  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-6 bg-tulip-field relative">
      {/* Enhanced floral background overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${floralTexture})` }}
      />
      <div className="absolute inset-0 bg-floral-pattern opacity-60" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-accent text-6xl md:text-7xl font-bold text-gradient-romantic-3d text-title-3d mb-6">
            About {data.name}
          </h2>
          <p className="text-2xl text-foreground/80 max-w-3xl mx-auto font-elegant font-medium text-enhanced">
            {data.personality}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Enhanced Profile Card */}
          <div className="card-romantic-3d">
            <div className="text-center mb-8">
              <div className={`w-40 h-40 mx-auto rounded-full bg-gradient-to-br ${data.color} flex items-center justify-center mb-6 shadow-3d-medium`}>
                <Heart className="w-20 h-20 text-white/95 drop-shadow-lg" />
              </div>
              <h3 className="font-accent text-4xl font-bold text-gradient-romantic-3d text-title-3d">
                {data.name}
              </h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-center text-foreground/80">
                <Calendar className="w-6 h-6 mr-4 text-primary" />
                <span className="text-lg font-elegant font-medium text-enhanced">{data.birthday} • {data.zodiac}</span>
              </div>
              
              <div className="glass-romantic-3d p-6 rounded-2xl">
                <p className="text-center italic text-foreground/90 text-lg font-elegant leading-relaxed text-enhanced">
                  {data.quote}
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Details Cards */}
          <div className="space-y-8">
            <div className="card-romantic-3d">
              <div className="flex items-center mb-6">
                <Star className="w-6 h-6 mr-4 text-primary" />
                <h4 className="font-elegant font-bold text-xl text-title-3d">Hobbies & Interests</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {data.hobbies.map((hobby, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-3d-primary text-white rounded-full text-sm font-elegant font-semibold shadow-3d-soft"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>

            <div className="card-romantic-3d">
              <div className="flex items-center mb-6">
                <Heart className="w-6 h-6 mr-4 text-primary" />
                <h4 className="font-elegant font-bold text-xl text-title-3d">Favorite Anime</h4>
              </div>
              <ul className="space-y-3">
                {data.favoriteAnime.map((anime, index) => (
                  <li key={index} className="text-foreground/80 flex items-center font-elegant text-enhanced">
                    <span className="w-3 h-3 bg-gradient-3d-primary rounded-full mr-4 shadow-3d-soft"></span>
                    <span className="text-lg">{anime}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-romantic-3d">
              <div className="flex items-center mb-6">
                <MapPin className="w-6 h-6 mr-4 text-primary" />
                <h4 className="font-elegant font-bold text-xl text-title-3d">Dreams & Aspirations</h4>
              </div>
              <p className="text-foreground/80 leading-relaxed text-lg font-elegant text-enhanced">
                {data.dreams}
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button className="btn-romantic-3d text-lg px-8 py-4">
            <Heart className="w-5 h-5 mr-3" />
            View Birthday Memories
          </Button>
        </div>
      </div>
    </section>
  );
};