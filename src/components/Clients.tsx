import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, TrendingUp, Users, Award, ArrowRight } from "lucide-react";

const Clients = () => {
  const clients = [
    {
      name: "TechNova Solutions",
      industry: "SaaS Technology",
      logo: "🚀",
      result: "+340% Lead Generation",
      description: "Transformed from startup to industry leader with strategic content that positioned them as the go-to solution for enterprise clients.",
      ceo: "Sarah Chen",
      ceoTitle: "CEO & Founder",
      testimonial: "Content Cartel didn't just improve our marketing—they revolutionized how we think about our brand."
    },
    {
      name: "Luxe Lifestyle",
      industry: "Premium E-commerce",
      logo: "💎",
      result: "+580% Revenue Growth",
      description: "Elevated their brand from boutique retailer to luxury empire through premium content strategy and influencer partnerships.",
      ceo: "Alessandro Rossi",
      ceoTitle: "Creative Director",
      testimonial: "Every piece of content they create turns our customers into brand evangelists."
    },
    {
      name: "FinanceFlow Pro",
      industry: "Financial Services",
      logo: "📊",
      result: "+220% Client Acquisition",
      description: "Positioned as the trusted authority in financial planning through thought leadership content and strategic positioning.",
      ceo: "Michael Torres",
      ceoTitle: "Managing Partner",
      testimonial: "They took our complex services and made them irresistible to our target market."
    },
    {
      name: "GreenScale Energy",
      industry: "Renewable Energy",
      logo: "🌱",
      result: "+150% Brand Awareness",
      description: "Became the voice of sustainable energy innovation through compelling storytelling and strategic thought leadership.",
      ceo: "Dr. Emma Watson",
      ceoTitle: "Chief Innovation Officer",
      testimonial: "Content Cartel made sustainability sexy. Our message now resonates across all demographics."
    },
    {
      name: "UrbanFit Studios",
      industry: "Fitness & Wellness",
      logo: "💪",
      result: "+400% Membership Growth",
      description: "Transformed from local gym to wellness empire through community-driven content and lifestyle positioning.",
      ceo: "Jake Martinez",
      ceoTitle: "Founder",
      testimonial: "They didn't just market our gym—they built a movement around our brand."
    },
    {
      name: "CloudSecure Tech",
      industry: "Cybersecurity",
      logo: "🔒",
      result: "+275% Enterprise Deals",
      description: "Established thought leadership in cybersecurity through expert content that builds trust and drives enterprise sales.",
      ceo: "Rachel Kim",
      ceoTitle: "Chief Security Officer",
      testimonial: "Their content strategy made complex security concepts accessible and compelling."
    }
  ];

  return (
    <section id="clients" className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Brands We've Helped</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">Dominate Their Markets</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From startups to enterprises, these brands trusted us to transform their content strategy into market domination.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">250+</div>
            <div className="text-muted-foreground">Clients Served</div>
          </div>
          <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50">
            <div className="text-3xl font-bold text-accent mb-2">98%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
          <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50">
            <div className="text-3xl font-bold text-primary-glow mb-2">$127M</div>
            <div className="text-muted-foreground">Revenue Generated</div>
          </div>
          <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">4.9★</div>
            <div className="text-muted-foreground">Client Rating</div>
          </div>
        </div>

        {/* Client Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {clients.map((client, index) => (
            <Card 
              key={index} 
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-elegant animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                {/* Logo & Company */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{client.logo}</div>
                  <div>
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors duration-300">
                      {client.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{client.industry}</p>
                  </div>
                </div>

                {/* Result Badge */}
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 py-1 mb-4">
                  <TrendingUp className="w-3 h-3 text-primary" />
                  <span className="text-xs font-medium text-primary">{client.result}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {client.description}
                </p>

                {/* CEO Info */}
                <div className="border-t border-border/50 pt-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{client.ceo}</p>
                      <p className="text-xs text-muted-foreground">{client.ceoTitle}</p>
                    </div>
                  </div>
                  <blockquote className="text-sm text-muted-foreground italic">
                    "{client.testimonial}"
                  </blockquote>
                </div>
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
                Join The <span className="bg-gradient-primary bg-clip-text text-transparent">Elite Circle</span>
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
                View All Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;