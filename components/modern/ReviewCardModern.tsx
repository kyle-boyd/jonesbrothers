import Image from "next/image";
import { asset } from "@/lib/site";

interface ReviewCardModernProps {
  reviewerImage: string;
  reviewText: string;
}

export default function ReviewCardModern({ reviewerImage, reviewText }: ReviewCardModernProps) {
  return (
    <div className="review border border-gray-200 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
      <div className="reviewHeader flex items-center mb-4">
        <Image
          src={reviewerImage}
          alt="Happy Customer"
          width={56}
          height={56}
          className="reviewImg h-14 w-14 object-cover rounded-full ring-2 ring-gray-100"
        />
        <div className="stars text-star text-2xl ml-4 flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Image
              key={i}
              src={asset("/images/star.svg")}
              alt="Star"
              width={20}
              height={20}
              className="opacity-90"
            />
          ))}
        </div>
      </div>
      <p className="text-base m-0 text-gray-700 leading-relaxed lg:text-sm">{reviewText}</p>
    </div>
  );
}
