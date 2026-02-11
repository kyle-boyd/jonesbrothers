import Image from "next/image";
import { asset } from "@/lib/site";

interface ReviewCardDesignForwardProps {
  reviewerImage: string;
  reviewText: string;
}

export default function ReviewCardDesignForward({ reviewerImage, reviewText }: ReviewCardDesignForwardProps) {
  return (
    <div className="p-6 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
      <div className="flex items-center mb-4 pb-4 border-b border-[#2a2a2a]">
        <div className="relative">
          <Image
            src={reviewerImage}
            alt="Happy Customer"
            width={48}
            height={48}
            className="h-12 w-12 object-cover rounded-full border-2 border-primary/50"
          />
        </div>
        <div className="ml-4 flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Image
              key={i}
              src={asset("/images/star.svg")}
              alt="Star"
              width={16}
              height={16}
              className="w-4 h-4"
            />
          ))}
        </div>
      </div>
      <p className="text-gray-300 leading-relaxed text-sm">&quot;{reviewText}&quot;</p>
    </div>
  );
}
