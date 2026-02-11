import Image from "next/image";
import { asset } from "@/lib/site";

interface ReviewCardProps {
  reviewerImage: string;
  reviewText: string;
}

export default function ReviewCard({ reviewerImage, reviewText }: ReviewCardProps) {
  return (
    <div className="review border border-border p-6 rounded-lg shadow-[0_1px_1px_hsl(0deg_0%_0%_/_0.05),0_2px_2px_hsl(0deg_0%_0%_/_0.05),0_4px_4px_hsl(0deg_0%_0%_/_0.05),0_8px_8px_hsl(0deg_0%_0%_/_0.05),0_16px_16px_hsl(0deg_0%_0%_/_0.05)]">
      <div className="reviewHeader flex items-center mb-3">
        <Image
          src={reviewerImage}
          alt="Happy Customer"
          width={48}
          height={48}
          className="reviewImg h-12 w-12 object-cover rounded-full"
        />
        <div className="stars text-star text-[32px] ml-3 flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Image
              key={i}
              src={asset("/images/star.svg")}
              alt="Star"
              width={20}
              height={20}
              className="max-w-[15%]"
            />
          ))}
        </div>
      </div>
      <p className="xsText text-xl m-0 lg:text-xs">{reviewText}</p>
    </div>
  );
}
