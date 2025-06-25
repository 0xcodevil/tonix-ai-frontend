
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Image as ImageIcon, Sparkles } from "lucide-react";

const ExamplesSection = () => {
  const imageExamples = [
    {
      src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop",
      prompt: "Futuristic cityscape with neon lights and flying cars",
      category: "Sci-Fi"
    },
    {
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop",
      prompt: "Mystical forest with glowing mushrooms and fairy lights",
      category: "Fantasy"
    },
    {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop",
      prompt: "Abstract digital art with geometric patterns",
      category: "Abstract"
    },
    {
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop",
      prompt: "Cyberpunk warrior in neon-lit alley",
      category: "Character"
    }
  ];

  const videoExamples = [
    {
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      prompt: "Ocean waves crashing on a rocky shore at sunset",
      duration: "15s",
      category: "Nature"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
      prompt: "Time-lapse of a blooming flower",
      duration: "10s",
      category: "Time-lapse"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      prompt: "Animated logo reveal with particle effects",
      duration: "8s",
      category: "Animation"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
            <Sparkles className="w-4 h-4 mr-2" />
            AI Gallery
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See What's Possible with{" "}
            <span className="gradient-text">TONIXAI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore stunning AI-generated images and videos created by our community. 
            Get inspired and create your own masterpieces.
          </p>
        </div>

        {/* AI Images Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl md:text-3xl font-bold flex items-center">
              <ImageIcon className="w-8 h-8 mr-3 text-primary" />
              AI Generated Images
            </h3>
            <Button variant="outline" className="hidden md:flex">
              View All Images
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {imageExamples.map((example, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="relative">
                  <img 
                    src={example.src} 
                    alt={example.prompt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="text-xs">
                      {example.category}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    "{example.prompt}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* AI Videos Section */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl md:text-3xl font-bold flex items-center">
              <Play className="w-8 h-8 mr-3 text-primary" />
              AI Generated Videos
            </h3>
            <Button variant="outline" className="hidden md:flex">
              View All Videos
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoExamples.map((example, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="relative">
                  <img 
                    src={example.thumbnail} 
                    alt={example.prompt}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors duration-300">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-primary ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="text-xs">
                      {example.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-2 left-2">
                    <Badge variant="outline" className="text-xs bg-black/50 text-white border-white/20">
                      {example.duration}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    "{example.prompt}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
            Start Creating Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;
