"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function InvestorForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    investmentRange: "",
    timeline: "",
    investorType: "",
    hasExperience: false,
    experienceDetails: "",
    hearAbout: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("[v0] Investor form submitted:", formData);
    setShowSuccess(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        investmentRange: "",
        timeline: "",
        investorType: "",
        hasExperience: false,
        experienceDetails: "",
        hearAbout: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Contact Information Section */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Contact Information
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="fullName">
                  Full Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="John Smith"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">
                  Email <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">
                  Phone Number <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="(555) 123-4567"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company/Organization (Optional)</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Acme Investments"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Investment Details Section */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Investment Details
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="investmentRange">
                  Investment Amount Range{" "}
                  <span className="text-destructive">*</span>
                </Label>
                <select
                  id="investmentRange"
                  name="investmentRange"
                  value={formData.investmentRange}
                  onChange={handleChange}
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                >
                  <option value="">Select range</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k-250k">$100,000 - $250,000</option>
                  <option value="250k-500k">$250,000 - $500,000</option>
                  <option value="500k-1m">$500,000 - $1,000,000</option>
                  <option value="1m+">$1,000,000+</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="timeline">
                  Investment Timeline{" "}
                  <span className="text-destructive">*</span>
                </Label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                >
                  <option value="">Select timeline</option>
                  <option value="immediate">Immediate (1-3 months)</option>
                  <option value="short">Short-term (3-6 months)</option>
                  <option value="medium">Medium-term (6-12 months)</option>
                  <option value="long">Long-term (12+ months)</option>
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="investorType">
                  Investor Type <span className="text-destructive">*</span>
                </Label>
                <select
                  id="investorType"
                  name="investorType"
                  value={formData.investorType}
                  onChange={handleChange}
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                >
                  <option value="">Select type</option>
                  <option value="angel">Angel Investor</option>
                  <option value="vc">Venture Capital</option>
                  <option value="pe">Private Equity</option>
                  <option value="individual">Individual Investor</option>
                  <option value="family-office">Family Office</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Investment Experience
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="hasExperience"
                  checked={formData.hasExperience}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      hasExperience: checked as boolean,
                    })
                  }
                />
                <Label
                  htmlFor="hasExperience"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I have experience with hospitality or real estate investments
                </Label>
              </div>
              {formData.hasExperience && (
                <div className="space-y-2">
                  <Label htmlFor="experienceDetails">
                    Please describe your experience
                  </Label>
                  <Textarea
                    id="experienceDetails"
                    name="experienceDetails"
                    value={formData.experienceDetails}
                    onChange={handleChange}
                    placeholder="Tell us about your previous investments in hospitality or real estate..."
                    rows={4}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Additional Information
            </h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="hearAbout">
                  How did you hear about Bayou Boxables?{" "}
                  <span className="text-destructive">*</span>
                </Label>
                <select
                  id="hearAbout"
                  name="hearAbout"
                  value={formData.hearAbout}
                  onChange={handleChange}
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                >
                  <option value="">Select option</option>
                  <option value="search">Search Engine</option>
                  <option value="social">Social Media</option>
                  <option value="referral">Referral</option>
                  <option value="news">News/Article</option>
                  <option value="event">Event/Conference</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">
                  Message or Questions{" "}
                  <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us why you're interested in investing in Bayou Boxables and any questions you have..."
                  rows={6}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Button type="submit" size="lg" className="min-w-[200px]">
            Submit Investment Inquiry
          </Button>
        </div>
      </form>

      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Thank You for Your Interest!</DialogTitle>
            <DialogDescription className="space-y-4 pt-4">
              <p>
                We've received your investment inquiry and will review it
                carefully.
              </p>
              <p>
                Our team will reach out to you within 2-3 business days to
                discuss the opportunity further and answer any questions you may
                have.
              </p>
              <p className="text-sm text-muted-foreground">
                In the meantime, feel free to explore our site to learn more
                about Bayou Boxables and our unique container home concept.
              </p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
