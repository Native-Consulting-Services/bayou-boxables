"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Search } from "lucide-react";
import { ComingSoonDialog } from "@/components/coming-soon-dialog";

export function SearchBar() {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);

  const handleSearch = () => {
    setShowComingSoon(true);
  };

  return (
    <>
      <div className="bg-card rounded-lg shadow-lg p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Check In */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-card-foreground flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Check In
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="px-3 py-2 border border-input rounded-md bg-background text-foreground"
            />
          </div>

          {/* Check Out */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-card-foreground flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Check Out
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="px-3 py-2 border border-input rounded-md bg-background text-foreground"
            />
          </div>

          {/* Guests */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-card-foreground flex items-center gap-2">
              <Users className="h-4 w-4" />
              Guests
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="px-3 py-2 border border-input rounded-md bg-background text-foreground"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? "Guest" : "Guests"}
                </option>
              ))}
            </select>
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <Button
              onClick={handleSearch}
              className="w-full bg-secondary hover:bg-secondary/90"
              size="lg"
            >
              <Search className="h-5 w-5 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </div>

      <ComingSoonDialog
        open={showComingSoon}
        onOpenChange={setShowComingSoon}
        feature="Search and booking"
      />
    </>
  );
}
