"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechFlow",
    company: "SaaS Platform",
    content: "They delivered our MVP in just 3 weeks and the code quality was exceptional. The team understood our vision perfectly and implemented features we didn't even know we needed.",
    rating: 5,
    avatar: "/placeholder.svg"
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder",
    company: "E-commerce Startup", 
    content: "From initial consultation to final deployment, the process was seamless. Our revenue increased by 300% after launching the new platform they built for us.",
    rating: 5,
    avatar: "/placeholder.svg"
  },
  {
    name: "Emily Watson",
    role: "Product Manager",
    company: "FinTech Company",
    content: "The AI integration they implemented transformed our customer service. We now handle 5x more queries with better accuracy and customer satisfaction.",
    rating: 5,
    avatar: "/placeholder.svg"
  },
  {
    name: "David Kim",
    role: "CEO",
    company: "Healthcare Tech",
    content: "Security and compliance were critical for our healthcare app. They delivered a HIPAA-compliant solution that exceeded all our requirements and passed every audit.",
    rating: 5,
    avatar: "/placeholder.svg"
  },
  {
    name: "Lisa Thompson",
    role: "Startup Founder",
    company: "EdTech Platform",
    content: "They didn't just build our app - they became our technology partners. The scalable architecture they created supports our 10x user growth seamlessly.",
    rating: 5,
    avatar: "/placeholder.svg"
  },
  {
    name: "James Mitchell",
    role: "CTO",
    company: "Logistics Company",
    content: "The blockchain solution they developed revolutionized our supply chain tracking. We now have complete transparency and reduced operational costs by 40%.",
    rating: 5,
    avatar: "/placeholder.svg"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-neutral-300 shadow-2xs">
              <Quote className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Client Success Stories</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our <span className="bg-gradient-primary bg-clip-text text-primary">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real clients who trusted us with their digital transformation.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / 3)}%)`,
              width: `${(testimonials.length * 100) / 3}%`
            }}
          >
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="flex-shrink-0 bg-gradient-card border-border/50 hover:shadow-lg transition-all duration-300"
                style={{ width: `${100 / testimonials.length}%` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <Avatar className="border border-border/50">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {[...Array(testimonials.length - 2)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary w-8' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;