"use client";

import { useState, useMemo } from "react";
import { UnitCard } from "@/components/unit-card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { SlidersHorizontal, X } from "lucide-react";

const allUnits = [
  {
    id: "1",
    name: "The Pioneer",
    image: "/rustic-shipping-container-home-exterior-with-wood-.jpg",
    sleeps: 4,
    beds: 2,
    baths: 1,
    pricePerNight: 145,
    amenities: ["wifi", "kitchen", "parking", "firepit"],
  },
  {
    id: "2",
    name: "The Voyager",
    image: "/modern-container-home-interior-with-cozy-lighting.jpg",
    sleeps: 2,
    beds: 1,
    baths: 1,
    pricePerNight: 125,
    amenities: ["wifi", "kitchen", "parking"],
  },
  {
    id: "3",
    name: "The Settler",
    image: "/industrial-chic-container-home-with-fire-pit-view.jpg",
    sleeps: 6,
    beds: 3,
    baths: 2,
    pricePerNight: 185,
    amenities: ["wifi", "kitchen", "parking", "firepit", "grill"],
  },
  {
    id: "4",
    name: "The Nomad",
    image: "/cozy-shipping-container-home-interior.jpg",
    sleeps: 2,
    beds: 1,
    baths: 1,
    pricePerNight: 115,
    amenities: ["wifi", "parking"],
  },
  {
    id: "5",
    name: "The Explorer",
    image: "/modern-shipping-container-home-with-deck.jpg",
    sleeps: 4,
    beds: 2,
    baths: 1.5,
    pricePerNight: 155,
    amenities: ["wifi", "kitchen", "parking", "firepit"],
  },
  {
    id: "6",
    name: "The Trailblazer",
    image: "/rustic-container-home-with-outdoor-seating.jpg",
    sleeps: 8,
    beds: 4,
    baths: 2,
    pricePerNight: 225,
    amenities: ["wifi", "kitchen", "parking", "firepit", "grill", "games"],
  },
];

export function ExploreFilters() {
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([100, 250]);
  const [minGuests, setMinGuests] = useState(1);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const filteredUnits = useMemo(() => {
    return allUnits.filter((unit) => {
      if (
        unit.pricePerNight < priceRange[0] ||
        unit.pricePerNight > priceRange[1]
      ) {
        return false;
      }
      if (unit.sleeps < minGuests) {
        return false;
      }
      if (selectedAmenities.length > 0) {
        const hasAllAmenities = selectedAmenities.every((amenity) =>
          unit.amenities.includes(amenity)
        );
        if (!hasAllAmenities) {
          return false;
        }
      }
      return true;
    });
  }, [priceRange, minGuests, selectedAmenities]);

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity]
    );
  };

  const clearFilters = () => {
    setPriceRange([100, 250]);
    setMinGuests(1);
    setSelectedAmenities([]);
  };

  const hasActiveFilters =
    priceRange[0] !== 100 ||
    priceRange[1] !== 250 ||
    minGuests > 1 ||
    selectedAmenities.length > 0;

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Filters Sidebar */}
      <aside className="lg:w-80 shrink-0">
        <div className="sticky top-4">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-4">
            <Button
              onClick={() => setShowFilters(!showFilters)}
              variant="outline"
              className="w-full"
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              {showFilters ? "Hide Filters" : "Show Filters"}
            </Button>
          </div>

          {/* Filters */}
          <div
            className={`${
              showFilters ? "block" : "hidden"
            } lg:block bg-card rounded-lg p-6 space-y-6`}
          >
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-2xl font-bold">Filters</h2>
              {hasActiveFilters && (
                <Button
                  onClick={clearFilters}
                  variant="ghost"
                  size="sm"
                  className="text-secondary"
                >
                  <X className="h-4 w-4 mr-1" />
                  Clear
                </Button>
              )}
            </div>

            {/* Price Range */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">Price per Night</Label>
              <div className="pt-2">
                <Slider
                  min={100}
                  max={250}
                  step={5}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="mb-3"
                />
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>

            {/* Guest Capacity */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">Minimum Guests</Label>
              <select
                value={minGuests}
                onChange={(e) => setMinGuests(Number(e.target.value))}
                className="w-full px-3 py-2 border border-input rounded-md bg-background"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
            </div>

            {/* Amenities */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">Amenities</Label>
              <div className="space-y-2">
                {[
                  { id: "wifi", label: "WiFi" },
                  { id: "kitchen", label: "Full Kitchen" },
                  { id: "parking", label: "Parking" },
                  { id: "firepit", label: "Fire Pit Access" },
                  { id: "grill", label: "BBQ Grill" },
                  { id: "games", label: "Yard Games" },
                ].map((amenity) => (
                  <div key={amenity.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={amenity.id}
                      checked={selectedAmenities.includes(amenity.id)}
                      onCheckedChange={() => toggleAmenity(amenity.id)}
                    />
                    <label
                      htmlFor={amenity.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      {amenity.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Results */}
      <div className="flex-1">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">
            {filteredUnits.length}{" "}
            {filteredUnits.length === 1 ? "Unit" : "Units"} Available
          </h2>
        </div>

        {filteredUnits.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredUnits.map((unit) => (
              <UnitCard key={unit.id} unit={unit} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground mb-4">
              No units match your current filters
            </p>
            <Button onClick={clearFilters} variant="outline">
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
