import type { LucideIcon } from "lucide-react";

interface Amenity {
  icon: LucideIcon;
  label: string;
  description: string;
}

interface AmenitiesListProps {
  amenities: Amenity[];
}

export function AmenitiesList({ amenities }: AmenitiesListProps) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {amenities.map((amenity, index) => {
        const Icon = amenity.icon;
        return (
          <div
            key={index}
            className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border"
          >
            <Icon className="h-6 w-6 text-primary shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">{amenity.label}</h3>
              <p className="text-sm text-muted-foreground">
                {amenity.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
