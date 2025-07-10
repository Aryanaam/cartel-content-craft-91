import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp, Users, DollarSign } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "TechStart Unicorn",
      category: "SaaS Startup",
      description: "Transformed a struggling SaaS startup into a $100M valuation through strategic content marketing and brand positioning.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      results: [
        { icon: <TrendingUp className="w-4 h-4" />, metric: "850%", label: "Revenue Growth" },
        { icon: <Users className="w-4 h-4" />, metric: "2.3M", label: "Users Acquired" },
        { icon: <DollarSign className="w-4 h-4" />, metric: "$100M", label: "Valuation" }
      ],
      tags: ["Content Strategy", "Growth Marketing", "Brand Development"]
    },
    {
      title: "E-commerce Empire",
      category: "Retail Brand",
      description: "Built a premium e-commerce brand from zero to market leader with compelling storytelling and performance marketing.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      results: [
        { icon: <TrendingUp className="w-4 h-4" />, metric: "400%", label: "Sales Increase" },
        { icon: <Users className="w-4 h-4" />, metric: "1.8M", label: "Social Followers" },
        { icon: <DollarSign className="w-4 h-4" />, metric: "600%", label: "ROAS" }
      ],
      tags: ["E-commerce", "Social Media", "Influencer Marketing"]
    },
    {
      title: "FinTech Disruptor",
      category: "Financial Services",
      description: "Positioned a FinTech startup as the go-to solution for millennials, achieving market dominance in 18 months.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      results: [
        { icon: <TrendingUp className="w-4 h-4" />, metric: "1200%", label: "User Growth" },
        { icon: <Users className="w-4 h-4" />, metric: "5M", label: "App Downloads" },
        { icon: <DollarSign className="w-4 h-4" />, metric: "$50M", label: "Funding Raised" }
      ],
      tags: ["FinTech", "App Marketing", "Thought Leadership"]
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-primary">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Empires We've</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">Built & Conquered</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From startups to industry giants, witness the transformation of brands into market-dominating forces.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group bg-card border-border hover:border-primary/30 transition-all duration-500 hover:shadow-elegant animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Button 
                      variant="hero" 
                      size="sm" 
                      className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-4">
                      <Badge variant="outline" className="mb-4 text-primary border-primary/30">
                        {project.category}
                      </Badge>
                      <h3 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-lg mb-6">
                        {project.description}
                      </p>
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="text-center">
                          <div className="flex items-center justify-center mb-2 text-primary">
                            {result.icon}
                          </div>
                          <div className="text-2xl font-bold text-primary mb-1">
                            {result.metric}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <Badge 
                          key={idx} 
                          variant="secondary" 
                          className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-subtle rounded-2xl p-8 border border-border/50">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Your Brand Could Be <span className="bg-gradient-primary bg-clip-text text-transparent">Next</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join the ranks of industry leaders who've trusted Content Cartel to transform their vision into market domination.
            </p>
            <Button variant="hero" size="lg" className="animate-glow-pulse">
              Start Your Transformation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;