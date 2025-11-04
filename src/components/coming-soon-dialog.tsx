"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Rocket, Mail } from "lucide-react";

interface ComingSoonDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  feature: string;
}

export function ComingSoonDialog({
  open,
  onOpenChange,
  feature,
}: ComingSoonDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20">
              <Rocket className="h-8 w-8 text-secondary" />
            </div>
          </div>
          <DialogTitle className="text-center text-2xl">
            Coming Soon!
          </DialogTitle>
          <DialogDescription className="text-center text-base pt-2">
            {feature} will be available once we secure funding and launch
            officially. We're currently seeking investors to bring this unique
            bayou experience to life.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3 pt-4">
          <p className="text-sm text-center text-muted-foreground">
            Interested in learning more or investing in Bayou Boxables?
          </p>
          <Button
            onClick={() => {
              window.location.href =
                "mailto:invest@bayouboxables.com?subject=Investment Inquiry";
            }}
            className="w-full bg-primary hover:bg-primary/90"
            size="lg"
          >
            <Mail className="h-4 w-4 mr-2" />
            Contact Us About Investment
          </Button>
          <Button
            onClick={() => onOpenChange(false)}
            variant="outline"
            className="w-full"
            size="lg"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
