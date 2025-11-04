import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bed, Users, Bath } from "lucide-react";

interface UnitCardProps {
  unit: {
    id: string;
    name: string;
    image: string;
    sleeps: number;
    beds: number;
    baths: number;
    pricePerNight: number;
  };
}

export function UnitCard({ unit }: UnitCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-4/3 overflow-hidden bg-muted">
        <img
          src={unit.image || "/placeholder.svg"}
          alt={unit.name}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder.svg";
          }}
        />
      </div>
      <CardContent className="p-6">
        <h3 className="font-serif text-2xl font-bold mb-3 text-foreground">
          {unit.name}
        </h3>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>Sleeps {unit.sleeps}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            <span>
              {unit.beds} {unit.beds === 1 ? "Bed" : "Beds"}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span>
              {unit.baths} {unit.baths === 1 ? "Bath" : "Baths"}
            </span>
          </div>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold text-primary">
            ${unit.pricePerNight}
          </span>
          <span className="text-muted-foreground">/ night</span>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button
          disabled
          className="w-full bg-muted text-muted-foreground cursor-not-allowed opacity-60"
        >
          Check Availability
        </Button>
      </CardFooter>
    </Card>
  );
}
