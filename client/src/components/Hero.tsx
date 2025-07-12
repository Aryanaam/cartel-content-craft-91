import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Target, TrendingUp } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/80 to-accent/10" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Premium Content Marketing Agency
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-foreground">Dominate Your Market</span>
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              With Content That Converts
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            We don't just create content—we orchestrate campaigns that captivate audiences, 
            build empires, and turn your brand into an unstoppable force.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4 animate-glow-pulse"
            >
              Start Your Domination
              <ArrowRight className="ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-primary/30 hover:bg-primary/10"
            >
              View Our Arsenal
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 animate-scale-in">
              <div className="flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">500%</div>
              <div className="text-muted-foreground">Average ROI Increase</div>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 animate-scale-in">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent mb-2">2M+</div>
              <div className="text-muted-foreground">Audience Reached</div>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 animate-scale-in">
              <div className="flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-primary-glow" />
              </div>
              <div className="text-3xl font-bold text-primary-glow mb-2">48H</div>
              <div className="text-muted-foreground">Campaign Launch Time</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse" />
    </section>
  );
};

export default Hero;