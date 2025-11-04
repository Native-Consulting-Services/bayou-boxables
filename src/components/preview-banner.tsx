"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Rocket, Mail } from "lucide-react";

export function PreviewBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-secondary text-secondary-foreground py-3 px-4 relative">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1">
          <Rocket className="h-5 w-5 shrink-0" />
          <p className="text-sm md:text-base">
            <span className="font-semibold">Preview Site:</span> Bayou Boxables
            is seeking investors. Booking features coming soon!
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="outline"
            className="hidden md:inline-flex bg-transparent border-secondary-foreground/20 hover:bg-secondary-foreground/10"
            onClick={() => {
              window.location.href =
                "mailto:invest@bayouboxables.com?subject=Investment Inquiry";
            }}
          >
            <Mail className="h-4 w-4 mr-2" />
            Contact Us
          </Button>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-secondary-foreground/10 rounded transition-colors"
            aria-label="Close banner"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
