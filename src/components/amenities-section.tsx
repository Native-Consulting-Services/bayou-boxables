import { Flame, Gamepad2, Wifi, Coffee, Wind, Shield } from "lucide-react";

const amenities = [
  {
    icon: Flame,
    title: "Shared Fire Pit",
    description:
      "Gather around our communal fire pit for evening stories and s'mores",
  },
  {
    icon: Gamepad2,
    title: "Outdoor Games",
    description:
      "Oversized yard games including cornhole, giant Jenga, and more",
  },
  {
    icon: Wifi,
    title: "High-Speed Wi-Fi",
    description: "Stay connected with reliable internet in all units",
  },
  {
    icon: Coffee,
    title: "Kitchen Basics",
    description: "Each unit includes a kitchenette with essential appliances",
  },
  {
    icon: Wind,
    title: "Climate Control",
    description: "AC and heating to keep you comfortable year-round",
  },
  {
    icon: Shield,
    title: "Secure Access",
    description: "Smart locks and on-site host for your peace of mind",
  },
];

export function AmenitiesSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-primary">
            Shared Amenities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enjoy modern comforts and communal spaces designed for connection
            and relaxation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity) => {
            const Icon = amenity.icon;
            return (
              <div key={amenity.title} className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    {amenity.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
