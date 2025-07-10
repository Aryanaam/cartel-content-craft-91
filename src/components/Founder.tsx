import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Award, Users, TrendingUp, Linkedin, Twitter } from "lucide-react";

const Founder = () => {
  return (
    <section id="founder" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Leadership</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Meet The</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">Visionary Behind The Empire</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built from passion, driven by results, and fueled by an obsession to help brands dominate their markets.
          </p>
        </div>

        {/* Founder Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Photo */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-primary p-1 animate-glow-pulse">
              <div className="w-full h-full bg-muted/20 rounded-xl flex items-center justify-center">
                <div className="text-6xl text-primary/50">👨‍💼</div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full blur-sm" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-accent/20 rounded-full blur-sm" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">Marcus Sterling</h3>
              <p className="text-xl text-primary font-semibold mb-4">Founder & Chief Content Strategist</p>
              
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/30" />
                <p className="text-lg text-muted-foreground leading-relaxed pl-6">
                  "I didn't start Content Cartel to be another marketing agency. I built it to be the weapon that transforms ambitious brands into market dominators. Every campaign we craft, every story we tell, is designed with one goal: total market supremacy."
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-card/50 rounded-lg border border-border/50">
                <div className="text-2xl font-bold text-primary">12+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-card/50 rounded-lg border border-border/50">
                <div className="text-2xl font-bold text-accent">250+</div>
                <div className="text-sm text-muted-foreground">Brands Transformed</div>
              </div>
              <div className="text-center p-4 bg-card/50 rounded-lg border border-border/50">
                <div className="text-2xl font-bold text-primary-glow">$50M+</div>
                <div className="text-sm text-muted-foreground">Revenue Generated</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary/10">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary/10">
                <Twitter className="w-4 h-4 mr-2" />
                Twitter
              </Button>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <Card className="bg-gradient-subtle border-border/50 overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <h4 className="text-2xl font-bold mb-4 text-foreground">The Journey to Domination</h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Marcus began his journey in the trenches of digital marketing, working with Fortune 500 companies and watching how mediocre content failed to move the needle. Frustrated by the industry's acceptance of "good enough," he founded Content Cartel with a radical vision.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, Content Cartel stands as the premier destination for brands that refuse to blend in. We don't just create content—we architect empires, one strategic campaign at a time.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Strategic Vision</h5>
                    <p className="text-sm text-muted-foreground">15+ years crafting campaigns that don't just engage—they dominate.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Users className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Team Leadership</h5>
                    <p className="text-sm text-muted-foreground">Built and mentored teams that consistently deliver market-crushing results.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary-glow/10 rounded-lg">
                    <Award className="w-5 h-5 text-primary-glow" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Industry Recognition</h5>
                    <p className="text-sm text-muted-foreground">Featured in Forbes, Entrepreneur, and Marketing Land for innovative strategies.</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Founder;