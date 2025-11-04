"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users } from "lucide-react";
import { ComingSoonDialog } from "@/components/coming-soon-dialog";

interface BookingWidgetProps {
  unitId: string;
  pricePerNight: number;
  unitName: string;
}

export function BookingWidget({
  unitId,
  pricePerNight,
  unitName,
}: BookingWidgetProps) {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const nights = Math.ceil(
      (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
    );
    return nights > 0 ? nights : 0;
  };

  const nights = calculateNights();
  const subtotal = nights * pricePerNight;
  const cleaningFee = 75;
  const serviceFee = Math.round(subtotal * 0.12);
  const total = subtotal + cleaningFee + serviceFee;

  const handleReserve = () => {
    setShowComingSoon(true);
  };

  return (
    <>
      <Card className="shadow-xl">
        <CardHeader className="pb-4">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-primary">
              ${pricePerNight}
            </span>
            <span className="text-muted-foreground">/ night</span>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Check In */}
          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Check In
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              className="w-full px-3 py-2 border border-input rounded-md bg-background"
            />
          </div>

          {/* Check Out */}
          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Check Out
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              min={checkIn || new Date().toISOString().split("T")[0]}
              className="w-full px-3 py-2 border border-input rounded-md bg-background"
            />
          </div>

          {/* Guests */}
          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <Users className="h-4 w-4" />
              Guests
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full px-3 py-2 border border-input rounded-md bg-background"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? "Guest" : "Guests"}
                </option>
              ))}
            </select>
          </div>

          {/* Price Breakdown */}
          {nights > 0 && (
            <div className="pt-4 border-t space-y-2">
              <div className="flex justify-between text-sm">
                <span>
                  ${pricePerNight} × {nights}{" "}
                  {nights === 1 ? "night" : "nights"}
                </span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Cleaning fee</span>
                <span>${cleaningFee}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Service fee</span>
                <span>${serviceFee}</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2 border-t">
                <span>Total</span>
                <span>${total}</span>
              </div>
            </div>
          )}
        </CardContent>

        <CardFooter>
          <Button
            onClick={handleReserve}
            className="w-full bg-secondary hover:bg-secondary/90"
            size="lg"
          >
            Reserve
          </Button>
        </CardFooter>
      </Card>

      {/* Coming Soon Dialog */}
      <ComingSoonDialog
        open={showComingSoon}
        onOpenChange={setShowComingSoon}
        feature="Online booking"
      />
    </>
  );
}
