import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Award, ArrowRight } from "lucide-react";

const Clients = () => {
  const clients = [
    { name: "The Salt Cafe", logo: "☕" },
    { name: "Qairo", logo: "🏢" },
    { name: "Vadilal", logo: "🍦" },
    { name: "Coca-Cola", logo: "🥤" },
    { name: "VibeCraft", logo: "✨" },
    { name: "PVR Cinemas", logo: "🎬" },
    { name: "Kidult India", logo: "🎯" },
    { name: "7 Eras", logo: "7️⃣" },
    { name: "Jawa", logo: "🏍️" },
    { name: "Bluebird Events", logo: "🐦" }
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

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {clients.map((client, index) => (
            <Card 
              key={index} 
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-elegant animate-fade-in overflow-hidden hover-scale"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                {/* Logo */}
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {client.logo}
                </div>
                
                {/* Company Name */}
                <h3 className="font-bold text-lg group-hover:text-primary transition-colors duration-300">
                  {client.name}
                </h3>
              </CardContent>
            </Card>
          ))}
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