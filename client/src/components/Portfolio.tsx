import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp, Users, DollarSign } from "lucide-react";
const Portfolio = () => {
  const projects = [{
    title: "TechStart Unicorn",
    category: "SaaS Startup",
    description: "Transformed a struggling SaaS startup into a $100M valuation through strategic content marketing and brand positioning.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    results: [{
      icon: <TrendingUp className="w-4 h-4" />,
      metric: "850%",
      label: "Revenue Growth"
    }, {
      icon: <Users className="w-4 h-4" />,
      metric: "2.3M",
      label: "Users Acquired"
    }, {
      icon: <DollarSign className="w-4 h-4" />,
      metric: "$100M",
      label: "Valuation"
    }],
    tags: ["Content Strategy", "Growth Marketing", "Brand Development"]
  }, {
    title: "E-commerce Empire",
    category: "Retail Brand",
    description: "Built a premium e-commerce brand from zero to market leader with compelling storytelling and performance marketing.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
    results: [{
      icon: <TrendingUp className="w-4 h-4" />,
      metric: "400%",
      label: "Sales Increase"
    }, {
      icon: <Users className="w-4 h-4" />,
      metric: "1.8M",
      label: "Social Followers"
    }, {
      icon: <DollarSign className="w-4 h-4" />,
      metric: "600%",
      label: "ROAS"
    }],
    tags: ["E-commerce", "Social Media", "Influencer Marketing"]
  }, {
    title: "FinTech Disruptor",
    category: "Financial Services",
    description: "Positioned a FinTech startup as the go-to solution for millennials, achieving market dominance in 18 months.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
    results: [{
      icon: <TrendingUp className="w-4 h-4" />,
      metric: "1200%",
      label: "User Growth"
    }, {
      icon: <Users className="w-4 h-4" />,
      metric: "5M",
      label: "App Downloads"
    }, {
      icon: <DollarSign className="w-4 h-4" />,
      metric: "$50M",
      label: "Funding Raised"
    }],
    tags: ["FinTech", "App Marketing", "Thought Leadership"]
  }];
  return <section id="portfolio" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          
          
          
        </div>

        {/* Portfolio Grid */}
        

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
    </section>;
};
export default Portfolio;