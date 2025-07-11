import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Megaphone, 
  PenTool, 
  BarChart3, 
  Video, 
  Mail, 
  Globe,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Brand Strategy",
      description: "Forge an unbreakable brand identity that commands respect and drives loyalty.",
      features: ["Brand Positioning", "Competitive Analysis", "Message Architecture"]
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Content Creation",
      description: "Premium content that doesn't just engage—it converts prospects into devoted customers.",
      features: ["Blog Articles", "Social Media", "Video Scripts"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Performance Marketing",
      description: "Data-driven campaigns that turn every dollar invested into exponential returns.",
      features: ["Paid Advertising", "SEO Optimization", "Analytics & Reporting"]
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Production",
      description: "Cinematic content that stops scrollers in their tracks and builds brand empires.",
      features: ["Promotional Videos", "Social Content", "Brand Documentaries"]
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Domination",
      description: "Email sequences that nurture leads and create an army of loyal customers.",
      features: ["Welcome Series", "Nurture Campaigns", "Conversion Funnels"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Digital Ecosystem",
      description: "Complete digital transformation that positions you as the undisputed industry leader.",
      features: ["Website Design", "E-commerce", "Digital Strategy"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-primary">Our Arsenal</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Services That</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">Dominate Markets</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every weapon in our arsenal is designed to obliterate competition and establish your brand as the ultimate authority.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-elegant animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {service.icon}
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all duration-300 transform group-hover:translate-x-1" />
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Build Your <span className="bg-gradient-primary bg-clip-text text-transparent">Content Empire?</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how we can transform your brand into an unstoppable force that dominates your market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="animate-glow-pulse">
                Start Your Campaign
                <ArrowRight className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;