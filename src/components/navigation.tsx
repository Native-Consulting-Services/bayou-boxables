"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="font-serif text-2xl font-bold text-primary">
            Bayou Boxables
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <span className="text-muted-foreground cursor-not-allowed opacity-60">
              Explore
            </span>
            <span className="text-muted-foreground cursor-not-allowed opacity-60">
              About
            </span>
            <span className="text-muted-foreground cursor-not-allowed opacity-60">
              FAQs
            </span>
            <span className="text-muted-foreground cursor-not-allowed opacity-60">
              Contact
            </span>
            <Button
              variant="outline"
              disabled
              className="opacity-60 cursor-not-allowed"
            >
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <span className="block text-muted-foreground cursor-not-allowed opacity-60">
              Explore
            </span>
            <span className="block text-muted-foreground cursor-not-allowed opacity-60">
              About
            </span>
            <span className="block text-muted-foreground cursor-not-allowed opacity-60">
              FAQs
            </span>
            <span className="block text-muted-foreground cursor-not-allowed opacity-60">
              Contact
            </span>
            <Button
              variant="outline"
              disabled
              className="w-full bg-transparent opacity-60 cursor-not-allowed"
            >
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
