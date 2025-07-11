import { Button } from "@/components/ui/button";
import { Star, Award, ArrowRight } from "lucide-react";

// Import authentic client logos
const Clients = () => {
  const clients = [
    { name: "Nuclear", logo: "/lovable-uploads/07d7bf86-d358-491b-8640-1ec3fd17294b.png" },
    { name: "VibeCraft", logo: "/lovable-uploads/2f298b34-96d3-4fd2-8426-7fb0413619de.png" },
    { name: "Kidult India", logo: "/lovable-uploads/948bfe9c-0738-4593-b0ca-c1d3cb045cb9.png" },
    { name: "PVR Cinemas", logo: "/lovable-uploads/d84a164d-63d3-4e76-9cbd-44f997a4df74.png" },
    { name: "Bluebird Events", logo: "/lovable-uploads/ecd191d1-7d7f-4fcc-a0d3-6bd830a0c75a.png" },
    { name: "Jawa", logo: "/lovable-uploads/d2e480a9-7cd5-4f58-aafd-e57a8a32fa73.png" },
    { name: "Coca-Cola", logo: "/coca-cola.png" },
    { name: "Vadilal", logo: "/lovable-uploads/dbaa026c-e9e3-4808-9e24-4cd11e214d8a.png" }
  ];

  return (
    <section id="clients" className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Notable Clients</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Trusted by</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">Industry Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From startups to enterprises, these prestigious brands trust us to elevate their content strategy and market presence.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">140+</div>
            <div className="text-muted-foreground">Clients Served</div>
          </div>
          <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50">
            <div className="text-3xl font-bold text-accent mb-2">85%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
          <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50">
            <div className="text-3xl font-bold text-primary-glow mb-2">₹50Cr</div>
            <div className="text-muted-foreground">Revenue Generated</div>
          </div>
          <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">4.9★</div>
            <div className="text-muted-foreground">Client Rating</div>
          </div>
        </div>

        {/* Moving Client Logos */}
        <div className="relative overflow-hidden mb-16">
          <div className="flex animate-[infinite-scroll_5s_linear_infinite] hover:[animation-play-state:paused]">
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div 
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 group"
              >
                <div className="w-64 h-32 flex items-center justify-center p-6 bg-card/30 rounded-lg border border-border/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:scale-105">
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                    onError={(e) => {
                      // Fallback to text if image fails to load
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                      const nextElement = target.nextElementSibling as HTMLElement;
                      if (nextElement) nextElement.style.display = 'block';
                    }}
                  />
                  <div className="hidden text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                    {client.name}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless infinite scroll */}
            {clients.map((client, index) => (
              <div 
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 group"
              >
                <div className="w-64 h-32 flex items-center justify-center p-6 bg-card/30 rounded-lg border border-border/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:scale-105">
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                    onError={(e) => {
                      // Fallback to text if image fails to load
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                      const nextElement = target.nextElementSibling as HTMLElement;
                      if (nextElement) nextElement.style.display = 'block';
                    }}
                  />
                  <div className="hidden text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                    {client.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="text-2xl md:text-3xl font-bold">
                Join The <span className="bg-gradient-primary bg-clip-text text-transparent">Elite Cartel</span>
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              These brands didn't just grow—they dominated. Ready to write your own success story and join the ranks of market leaders?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="animate-glow-pulse">
                Start Your Domination
                <ArrowRight className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
