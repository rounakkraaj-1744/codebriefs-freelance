"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code, 
  Server, 
  Brain, 
  Bot, 
  Coins, 
  Cloud, 
  Cog, 
  Rocket,
  Globe,
  Database
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "Modern, responsive web applications using React, Next.js, Vue.js, and cutting-edge UI frameworks.",
    technologies: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"]
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Scalable server-side solutions with Node.js, Python, Java, and Go for robust applications.",
    technologies: ["Node.js", "NestJS", "Python", "Java Spring", "GoLang", "FastAPI"]
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent solutions using TensorFlow, PyTorch, and custom ML models for data-driven insights.",
    technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Pandas"]
  },
  {
    icon: Bot,
    title: "Generative AI",
    description: "Integration of GPT, Claude, and custom AI models for chatbots, automation, and content generation.",
    technologies: ["OpenAI API", "Anthropic", "LangChain", "Vector DBs", "RAG"]
  },
  {
    icon: Coins,
    title: "Blockchain & Web3",
    description: "Decentralized applications, smart contracts, and cryptocurrency solutions on multiple blockchains.",
    technologies: ["Ethereum", "Solidity", "Web3.js", "DeFi", "NFTs"]
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure on AWS, Azure, and GCP with serverless and containerized deployments.",
    technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"]
  },
  {
    icon: Cog,
    title: "DevOps & CI/CD",
    description: "Automated deployment pipelines, infrastructure as code, and monitoring for reliable operations.",
    technologies: ["GitHub Actions", "Jenkins", "Terraform", "Monitoring", "Testing"]
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Optimized database architecture with SQL, NoSQL, and vector databases for performance.",
    technologies: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Pinecone"]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-border/50">
              <Globe className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-muted-foreground">Full-Stack Services</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Complete Tech Stack <span className="bg-gradient-primary bg-clip-text text-primary">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From frontend to backend, AI to blockchain - we handle every aspect of your digital product development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title} 
                className="group hover:shadow-xl transition-all duration-300 bg-gradient-card border-border/50 hover:border-primary/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <Rocket className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-1">
                    {service.technologies.slice(0, 3).map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 text-xs bg-muted rounded-full text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {service.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                        +{service.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;