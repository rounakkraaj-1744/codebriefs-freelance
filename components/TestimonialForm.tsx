"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, Send, Upload, X, CheckCircle, ArrowRight } from "lucide-react";

const TestimonialSubmissionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    company: "",
    projectType: "",
    rating: 5,
    testimonial: "",
    avatar: null as File | null,
    allowPublic: false,
    linkedinUrl: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) { // 2MB limit
        alert("Please choose an image smaller than 2MB");
        return;
      }
      
      setFormData(prev => ({ ...prev, avatar: file }));
      
      const reader = new FileReader();
      reader.onload = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeAvatar = () => {
    setFormData(prev => ({ ...prev, avatar: null }));
    setAvatarPreview(null);
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.role || !formData.company || !formData.projectType || !formData.testimonial || formData.testimonial.length < 50) {
      alert("Please fill in all required fields and ensure testimonial is at least 50 characters");
      return;
    }

    setIsSubmitting(true);

    try {
      const submitData = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          if (key === 'avatar' && value instanceof File) {
            submitData.append(key, value);
          } else {
            submitData.append(key, value.toString());
          }
        }
      });

      const response = await fetch('/api/testimonials', {
        method: 'POST',
        body: submitData,
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Failed to submit testimonial');
      }
    } catch (error) {
      console.error('Error submitting testimonial:', error);
      alert('Failed to submit testimonial. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <Card className="bg-gradient-card border-border/50 shadow-lg text-center">
          <CardContent className="p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Thank You!</h2>
            <p className="text-muted-foreground mb-6">
              Your testimonial has been submitted successfully. We'll review it and get back to you soon.
            </p>
            <Button 
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: "",
                  email: "",
                  role: "",
                  company: "",
                  projectType: "",
                  rating: 5,
                  testimonial: "",
                  avatar: null,
                  allowPublic: false,
                  linkedinUrl: ""
                });
                setAvatarPreview(null);
              }}
              variant="outline"
            >
              Submit Another Testimonial
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card className="bg-gradient-card border-border/50 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Share Your Experience</CardTitle>
          <p className="text-muted-foreground text-center">
            Help others learn about our work by sharing your project experience
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Personal Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="bg-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="role">Your Role *</Label>
                  <Input
                    id="role"
                    placeholder="CEO, CTO, Founder..."
                    value={formData.role}
                    onChange={(e) => handleInputChange("role", e.target.value)}
                    className="bg-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name *</Label>
                  <Input
                    id="company"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    className="bg-transparent"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn Profile (Optional)</Label>
                <Input
                  id="linkedin"
                  placeholder="https://linkedin.com/in/yourprofile"
                  value={formData.linkedinUrl}
                  onChange={(e) => handleInputChange("linkedinUrl", e.target.value)}
                  className="bg-transparent"
                />
              </div>
            </div>

            {/* Project Information */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Project Information</h3>
              
              <div className="space-y-2">
                <Label>Project Type *</Label>
                <Select onValueChange={(value) => handleInputChange("projectType", value)}>
                  <SelectTrigger className="bg-transparent">
                    <SelectValue placeholder="What did we build for you?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mvp">MVP Development</SelectItem>
                    <SelectItem value="fullstack">Full-Stack Application</SelectItem>
                    <SelectItem value="ai">AI/ML Integration</SelectItem>
                    <SelectItem value="blockchain">Blockchain/Web3</SelectItem>
                    <SelectItem value="mobile">Mobile App</SelectItem>
                    <SelectItem value="ecommerce">E-commerce Platform</SelectItem>
                    <SelectItem value="saas">SaaS Platform</SelectItem>
                    <SelectItem value="consultation">Consultation Services</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Rating *</Label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleInputChange("rating", star)}
                      className="transition-colors"
                    >
                      <Star
                        className={`w-8 h-8 ${
                          star <= formData.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300 hover:text-yellow-400"
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">Click to rate your experience</p>
              </div>
            </div>

            {/* Testimonial */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Your Testimonial</h3>
              
              <div className="space-y-2">
                <Label htmlFor="testimonial">Tell us about your experience *</Label>
                <Textarea
                  id="testimonial"
                  placeholder="Describe your experience working with us, the results you achieved, and what stood out about our service..."
                  rows={5}
                  value={formData.testimonial}
                  onChange={(e) => handleInputChange("testimonial", e.target.value)}
                  className="bg-transparent"
                />
                <p className="text-xs text-muted-foreground">
                  Minimum 50 characters ({formData.testimonial.length}/50)
                </p>
              </div>
            </div>

            {/* Avatar Upload */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Profile Photo (Optional)</h3>
              
              <div className="space-y-4">
                {avatarPreview ? (
                  <div className="flex items-center gap-4">
                    <img
                      src={avatarPreview}
                      alt="Avatar preview"
                      className="w-16 h-16 rounded-full object-cover border-2 border-border"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Photo uploaded</p>
                      <p className="text-xs text-muted-foreground">This will be displayed with your testimonial</p>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={removeAvatar}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ) : (
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm font-medium mb-1">Upload your photo</p>
                    <p className="text-xs text-muted-foreground mb-4">
                      JPG, PNG up to 2MB
                    </p>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={handleAvatarChange}
                      className="hidden"
                      id="avatar-upload"
                    />
                    <Label htmlFor="avatar-upload" className="cursor-pointer">
                      <Button type="button" variant="outline" size="sm" asChild>
                        <span>Choose File</span>
                      </Button>
                    </Label>
                  </div>
                )}
              </div>
            </div>

            {/* Permissions */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="allowPublic"
                  checked={formData.allowPublic}
                  onChange={(e) => handleInputChange("allowPublic", e.target.checked)}
                  className="mt-1"
                />
                <div>
                  <Label htmlFor="allowPublic" className="text-sm font-medium">
                    I give permission to display this testimonial publicly
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    Your testimonial may be displayed on our website, marketing materials, and social media
                  </p>
                </div>
              </div>
            </div>

            <Button
              onClick={handleSubmit}
              size="lg"
              className="w-full group"
              disabled={isSubmitting || formData.testimonial.length < 50}
            >
              {isSubmitting ? (
                "Submitting..."
              ) : (
                <>
                  Submit Testimonial
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TestimonialSubmissionForm;