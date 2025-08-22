"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  MessageCircle, 
  Send, 
  X, 
  Bot, 
  User,
  Minimize2,
  Maximize2
} from "lucide-react";

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: Date;
}

const predefinedResponses: Record<string, string> = {
  hello: "Hi there! 👋 I'm here to help you with any questions about our development services. What can I assist you with today?",
  hi: "Hello! 👋 I'm here to help you with any questions about our development services. What can I assist you with today?",
  pricing: "Our pricing varies based on project scope:\n• MVP Development: Starting at $5,000\n• Full-Stack Solutions: $15,000 - $50,000\n• Enterprise Projects: Custom quotes\n\nWould you like to discuss your specific project?",
  services: "We offer comprehensive development services:\n• Frontend (React, Next.js, Vue.js)\n• Backend (Node.js, Python, Java, Go)\n• AI/ML Integration\n• Blockchain & Web3\n• Cloud & DevOps\n• Database Design\n\nWhich service interests you most?",
  timeline: "Development timelines depend on complexity:\n• MVP: 2-4 weeks\n• Full-Stack App: 4-8 weeks\n• Enterprise Solution: 2-6 months\n\nI can help you get a more accurate estimate based on your requirements!",
  contact: "You can reach us through:\n• Email: hello@CodeBriefs.co\n• Live chat (here!)\n• Schedule a call: calendly.com/CodeBriefs\n\nWould you like to schedule a free consultation?",
  tech: "We work with modern tech stacks:\n• Frontend: React, Next.js, TypeScript, Tailwind\n• Backend: Node.js, Python, Java, Go\n• Databases: PostgreSQL, MongoDB, Redis\n• Cloud: AWS, Azure, GCP\n• AI: OpenAI, TensorFlow, PyTorch\n\nWhat technology are you interested in?",
  default: "Thanks for your message! I'd be happy to help you learn more about our development services. You can ask me about:\n• Pricing and packages\n• Our services and technologies\n• Project timelines\n• How to get started\n\nOr feel free to ask anything specific about your project!"
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your AI assistant. I can help you learn about our development services, pricing, and how we can bring your project to life. What would you like to know?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  const generateResponse = (input: string): string => {
    const lowercaseInput = input.toLowerCase();
    
    // Check for keywords in the input
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (lowercaseInput.includes(key)) {
        return response;
      }
    }
    
    // Check for common variations
    if (lowercaseInput.includes("cost") || lowercaseInput.includes("price") || lowercaseInput.includes("budget")) {
      return predefinedResponses.pricing;
    }
    if (lowercaseInput.includes("time") || lowercaseInput.includes("when") || lowercaseInput.includes("how long")) {
      return predefinedResponses.timeline;
    }
    if (lowercaseInput.includes("technology") || lowercaseInput.includes("stack") || lowercaseInput.includes("tech")) {
      return predefinedResponses.tech;
    }
    if (lowercaseInput.includes("start") || lowercaseInput.includes("begin")) {
      return "Getting started is easy! Here's how:\n1. Tell us about your project idea\n2. Schedule a free consultation\n3. Receive a detailed proposal\n4. Start development\n\nWould you like to schedule a consultation now?";
    }
    
    return predefinedResponses.default;
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Simulate bot thinking delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:shadow-xl z-50 group"
        size="icon"
      >
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </Button>
    );
  }

  return (
    <Card className={`fixed bottom-6 right-6 z-50 shadow-2xl border-border/50 transition-all duration-300 ${
      isMinimized ? 'w-80 h-14' : 'w-96 h-[600px]'
    }`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 border-b">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-full">
            <Bot className="w-5 h-5 text-primary" />
          </div>
          <div>
            <CardTitle className="text-base">AI Assistant</CardTitle>
            <CardDescription className="text-xs">
              {isMinimized ? 'Click to expand' : 'Online now'}
            </CardDescription>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setIsMinimized(!isMinimized)}
          >
            {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>

      {!isMinimized && (
        <CardContent className="p-0 flex flex-col h-[calc(600px-80px)]">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.isBot ? 'items-start' : 'items-start justify-end'}`}
                >
                  {message.isBot && (
                    <Avatar className="w-8 h-8 border border-border/50">
                      <AvatarFallback className="bg-primary/10">
                        <Bot className="w-4 h-4 text-primary" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`max-w-[80%] rounded-lg px-3 py-2 text-sm whitespace-pre-line ${
                      message.isBot
                        ? 'bg-muted text-muted-foreground'
                        : 'bg-primary text-primary-foreground ml-auto'
                    }`}
                  >
                    {message.content}
                  </div>
                  {!message.isBot && (
                    <Avatar className="w-8 h-8 border border-border/50">
                      <AvatarFallback className="bg-secondary">
                        <User className="w-4 h-4" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="border-t p-4">
            <div className="flex gap-2">
              <Input
                placeholder="Ask about our services..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 bg-transparent"
              />
              <Button size="icon" onClick={handleSendMessage} disabled={!inputValue.trim()}>
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default Chatbot;