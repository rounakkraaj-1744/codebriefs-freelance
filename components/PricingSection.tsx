"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, ArrowRight, Zap } from "lucide-react";

const pricingPlans = [
  {
    name: "MVP Development",
    description: "Perfect for startups and new product launches",
    price: "Starting at $5,000",
    period: "Complete MVP",
    features: [
      "Frontend & Backend Development",
      "Database Design & Setup",
      "User Authentication",
      "Responsive Design",
      "Basic API Integration",
      "2 Weeks Development",
      "Code Documentation",
      "30 Days Support"
    ],
    highlighted: false,
    cta: "Start Your MVP"
  },
  {
    name: "Full-Stack Solution",
    description: "Complete product development with advanced features",
    price: "$15,000 - $50,000",
    period: "Full Product",
    features: [
      "Everything in MVP",
      "Advanced Features",
      "Third-party Integrations",
      "Admin Dashboard",
      "Analytics & Reporting",
      "Performance Optimization",
      "Security Implementation",
      "4-8 Weeks Development",
      "Testing & QA",
      "90 Days Support"
    ],
    highlighted: true,
    cta: "Get Full Solution"
  },
  {
    name: "Enterprise & Scale",
    description: "Large-scale applications with custom requirements",
    price: "Custom Quote",
    period: "Scalable Platform",
    features: [
      "Everything in Full-Stack",
      "Microservices Architecture",
      "Cloud Infrastructure",
      "DevOps & CI/CD",
      "Advanced Security",
      "Custom Integrations",
      "Performance Monitoring",
      "Dedicated Team",
      "Ongoing Maintenance",
      "Priority Support"
    ],
    highlighted: false,
    cta: "Discuss Requirements"
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-border/50">
              <Star className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-muted-foreground">Transparent Pricing</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Investment Plans for <span className="bg-gradient-primary bg-clip-text text-primary">Every Stage</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Clear, honest pricing that scales with your business needs. No hidden costs, just results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                plan.highlighted 
                  ? 'border-primary/50 shadow-lg scale-105' 
                  : 'border-border/50 hover:border-primary/30'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-primary text-primary-foreground text-center py-2 text-sm font-medium">
                  <Zap className="inline w-4 h-4 mr-1" />
                  Most Popular
                </div>
              )}
              
              <CardHeader className={`text-center ${plan.highlighted ? 'pt-12' : 'pt-8'}`}>
                <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
                <div className="mt-6">
                  <div className="text-3xl font-bold text-primary">{plan.price}</div>
                  <div className="text-sm text-muted-foreground mt-1">{plan.period}</div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full group ${
                    plan.highlighted 
                      ? 'shadow-lg hover:shadow-xl' 
                      : ''
                  }`}
                  variant={plan.highlighted ? 'default' : 'outline'}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-card border-border/50">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-accent mr-2 text-primary" />
                <h3 className="text-xl font-semibold">Need Something Custom?</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Every project is unique. Let's discuss your specific requirements and create a tailored solution.
              </p>
              <Button size="lg" className="shadow-lg hover:shadow-xl">
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;