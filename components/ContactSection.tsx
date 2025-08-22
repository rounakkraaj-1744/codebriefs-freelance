"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Calendar,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Get a response within 2 hours",
    value: "hello@CodeBriefs.co",
    action: "mailto:hello@CodeBriefs.co"
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our team instantly",
    value: "Available 9 AM - 6 PM EST",
    action: "#chat"
  },
  {
    icon: Calendar,
    title: "Schedule Meeting",
    description: "Book a free 30-min consultation",
    value: "calendly.com/CodeBriefs",
    action: "https://calendly.com"
  }
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      company: "",
      projectType: "",
      budget: "",
      timeline: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-neutral-300 shadow-2xs">
              <Send className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Get In Touch</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let&apos;s Build Your <span className="bg-gradient-primary bg-clip-text text-primary">Next Project</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your idea into reality? We're here to help you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={info.title} className="bg-gradient-card border-border/50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="flex p-4 justify-between items-center">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{info.description}</p>
                        <a
                          href={info.action}
                          className="text-primary hover:text-accent transition-colors text-sm font-medium"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-border/50 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Start Your Project</CardTitle>
                <CardDescription>
                  Tell us about your project and we'll get back to you with a detailed proposal.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        className="bg-transparent"
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        className="bg-transparent"
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      placeholder="Your Company Name"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="bg-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label>Project Type</Label>
                      <Select onValueChange={(value) => handleInputChange("projectType", value)}>
                        <SelectTrigger className="bg-transparent">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mvp">MVP Development</SelectItem>
                          <SelectItem value="fullstack">Full-Stack App</SelectItem>
                          <SelectItem value="ai">AI Integration</SelectItem>
                          <SelectItem value="blockchain">Blockchain/Web3</SelectItem>
                          <SelectItem value="consultation">Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Budget Range</Label>
                      <Select onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger className="bg-transparent">
                          <SelectValue placeholder="Select budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-10k">Under $10k</SelectItem>
                          <SelectItem value="10k-25k">$10k - $25k</SelectItem>
                          <SelectItem value="25k-50k">$25k - $50k</SelectItem>
                          <SelectItem value="50k-plus">$50k+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Timeline</Label>
                      <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                        <SelectTrigger className="bg-transparent">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP</SelectItem>
                          <SelectItem value="1-month">1 Month</SelectItem>
                          <SelectItem value="2-3-months">2-3 Months</SelectItem>
                          <SelectItem value="3-plus-months">3+ Months</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Description *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="bg-transparent"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full group shadow-lg hover:shadow-xl transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending Message..."
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Card className="max-w-3xl mx-auto bg-primary flex flex-col justify-center items-center text-primary-foreground border-0 my-16">
        <CardContent>
          <h3 className="font-semibold mb-4 text-2xl text-center ">Why work with us?</h3>
          <div className="space-y-3 flex flex-col justify-center items-center">
            {[
              "Free initial consultation",
              "Transparent fixed pricing",
              "Regular progress updates",
              "Post-launch support included"
            ].map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 w-full">
                <CheckCircle className="w-4 h-4 opacity-80" />
                <span className="text-sm opacity-90">{benefit}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ContactSection;