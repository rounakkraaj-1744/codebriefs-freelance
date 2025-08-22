"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Users, 
  Award, 
  TrendingUp, 
  Clock, 
  Shield,
  Lightbulb,
  Rocket
} from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "End-to-End Solutions",
    description: "Complete product development from concept to deployment and scaling."
  },
  {
    icon: TrendingUp,
    title: "Scalable Architecture",
    description: "Built for growth with microservices and cloud-native approaches."
  },
  {
    icon: Clock,
    title: "Rapid Development",
    description: "Accelerated timelines without compromising on quality or security."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Industry-standard security practices and compliance frameworks."
  }
];

const stats = [
  { number: "15+", label: "Tech Stacks", icon: Award },
  { number: "50+", label: "Projects Delivered", icon: Rocket },
  { number: "3x", label: "Faster Development", icon: TrendingUp },
  { number: "99%", label: "Client Satisfaction", icon: Users }
];

const techStack = [
  "React", "Next.js", "Node.js", "Python", "TypeScript", 
  "AWS", "Docker", "Kubernetes", "PostgreSQL", "MongoDB",
  "TensorFlow", "OpenAI", "Blockchain", "GraphQL", "Redis"
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-border/50">
              <Lightbulb className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-muted-foreground">Why Choose Us</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your <span className="bg-gradient-primary bg-clip-text text-primary">Technology Partner</span> for Success
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're not just developers - we're your strategic technology partners. With expertise across 
            the entire tech ecosystem, we transform ideas into scalable digital solutions that drive real business growth.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={stat.label} className="text-center bg-gradient-card border-border/50 hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <IconComponent className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={benefit.title} className="flex gap-4 p-6 bg-gradient-card rounded-lg border border-border/50 hover:shadow-lg transition-all duration-300">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Stack */}
        <Card className="bg-gradient-card border-border/50">
          <CardContent className="pt-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Complete <span className="text-primary">Tech Stack</span> Coverage
              </h3>
              <p className="text-muted-foreground">
                From frontend frameworks to AI models - we master the tools that power modern applications.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech) => (
                <Badge 
                  key={tech} 
                  variant="secondary" 
                  className="px-4 py-2 bg-muted/50 hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="max-w-3xl mx-auto bg-primary text-primary-foreground border-0 shadow-xl">
            <CardContent className="pt-8 pb-8">
              <Rocket className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-4">Ready to Build Something Amazing?</h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Whether you're a startup with a groundbreaking idea or an enterprise looking to innovate, 
                we have the expertise to bring your vision to life.
              </p>
              <div className="text-sm opacity-75">
                ✓ Free consultation  ✓ Transparent pricing  ✓ Agile development  ✓ Ongoing support
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;