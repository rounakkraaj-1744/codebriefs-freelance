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
  const [itemsToShow, setItemsToShow] = useState(3);

  // Handle responsive layout
  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1); // Mobile: 1 item
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2); // Tablet: 2 items
      } else {
        setItemsToShow(3); // Desktop: 3 items
      }
    };

    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);
    return () => window.removeEventListener('resize', updateItemsToShow);
  }, []);

  // Auto-scroll with responsive consideration
  useEffect(() => {
    const maxIndex = testimonials.length - itemsToShow;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= maxIndex ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [itemsToShow]);

  const maxIndex = testimonials.length - itemsToShow;

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-neutral-300 shadow-2xs">
              <Quote className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Client Success Stories</span>
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What Our <span className="bg-gradient-primary bg-clip-text text-primary">Clients Say</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Real results from real clients who trusted us with their digital transformation.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out gap-4 sm:gap-6"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
              width: `${(testimonials.length * 100) / itemsToShow}%`
            }}
          >
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="flex-shrink-0 bg-gradient-card border-border/50 hover:shadow-lg transition-all duration-300 h-full"
                style={{ width: `${100 / testimonials.length}%` }}
              >
                <CardContent className="p-4 sm:p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  
                  <Quote className="w-6 sm:w-8 h-6 sm:h-8 text-primary/20 mb-4" />
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm sm:text-base flex-grow">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center gap-3 mt-auto">
                    <Avatar className="border border-border/50 w-10 h-10 sm:w-12 sm:h-12">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-foreground text-sm sm:text-base truncate">{testimonial.name}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground truncate">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6 sm:mt-8 gap-2">
          {[...Array(maxIndex + 1)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary w-6 sm:w-8' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2'
              }`}
            />
          ))}
        </div>

        {/* Manual Navigation for Mobile */}
        <div className="flex justify-center mt-4 gap-4 sm:hidden">
          <button
            onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
            disabled={currentIndex === 0}
            className="px-4 py-2 bg-primary/10 text-primary rounded-lg disabled:opacity-50 disabled:cursor-not-allowed text-sm"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentIndex(Math.min(maxIndex, currentIndex + 1))}
            disabled={currentIndex === maxIndex}
            className="px-4 py-2 bg-primary/10 text-primary rounded-lg disabled:opacity-50 disabled:cursor-not-allowed text-sm"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;