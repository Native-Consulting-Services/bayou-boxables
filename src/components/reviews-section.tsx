import { Star } from "lucide-react";

interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
}

interface ReviewsSectionProps {
  reviews: Review[];
}

export function ReviewsSection({ reviews }: ReviewsSectionProps) {
  const averageRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <h2 className="font-serif text-2xl font-bold">Guest Reviews</h2>
        <div className="flex items-center gap-2">
          <Star className="h-5 w-5 fill-secondary text-secondary" />
          <span className="text-xl font-bold">{averageRating.toFixed(1)}</span>
          <span className="text-muted-foreground">
            ({reviews.length} reviews)
          </span>
        </div>
      </div>

      <div className="space-y-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="border-b border-border pb-6 last:border-0"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                {review.author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold">{review.author}</p>
                <p className="text-sm text-muted-foreground">{review.date}</p>
              </div>
            </div>
            <div className="flex gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < review.rating
                      ? "fill-secondary text-secondary"
                      : "text-muted"
                  }`}
                />
              ))}
            </div>
            <p className="leading-relaxed">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
