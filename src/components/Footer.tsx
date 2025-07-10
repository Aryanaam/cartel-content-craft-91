import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  ArrowUp,
  Zap
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      "Brand Strategy",
      "Content Creation", 
      "Performance Marketing",
      "Video Production",
      "Email Marketing",
      "Digital Transformation"
    ],
    company: [
      "About Us",
      "Our Process",
      "Case Studies",
      "Careers",
      "Blog",
      "Contact"
    ],
    resources: [
      "Content Audit",
      "Strategy Toolkit",
      "Industry Reports",
      "Webinars",
      "Templates",
      "Newsletter"
    ]
  };

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Mail className="w-5 h-5" />, href: "#", label: "Email" }
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <Zap className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Content Cartel
                </h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We don't just create content—we orchestrate campaigns that build empires and establish market dominance.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                    asChild
                  >
                    <a href={social.href} aria-label={social.label}>
                      {social.icon}
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-foreground mb-6">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-foreground mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((item, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-foreground mb-6">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((resource, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {resource}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-border/50" />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
              <p>&copy; 2024 Content Cartel. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-primary transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-primary transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-primary transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;