"use client"

import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Rocket, Zap } from "lucide-react";
import heroImage from "@/assets/herobg.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-background/80 to-background/50" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-neutral-300 shadow-2xs">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Full-Stack Development Agency</span>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          From <span className="bg-gradient-primary bg-clip-text text-primary">MVP</span> to 
          <br />Scalable <span className="bg-gradient-primary bg-clip-text text-primary">Products</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          We transform your ideas into powerful digital solutions. Expert full-stack development, 
          AI integration, and scalable architecture that grows with your business.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="group shadow-lg hover:shadow-xl hover:cursor-pointer transition-all duration-300">
            Start Your Project
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="ghost" size="lg" className="shadow-md hover:shadow-lg hover:cursor-pointer transition-all duration-300">
            <Code className="mr-2 w-4 h-4" />
            View Our Work
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Tech Stacks</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">99%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-1/4 left-10 opacity-20">
        <Rocket className="w-12 h-12 text-accent animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }} />
      </div>
      <div className="absolute bottom-1/4 right-10 opacity-20">
        <Code className="w-10 h-10 text-primary animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }} />
      </div>
    </section>
  );
};

export default HeroSection;