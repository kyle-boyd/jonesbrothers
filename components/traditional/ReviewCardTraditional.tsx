import Image from "next/image";

interface ReviewCardTraditionalProps {
  reviewerImage: string;
  reviewText: string;
}

export default function ReviewCardTraditional({ reviewerImage, reviewText }: ReviewCardTraditionalProps) {
  return (
    <div className="review border-2 border-gray-400 p-6 rounded-2xl shadow-md bg-white hover:shadow-lg transition-shadow">
      <div className="reviewHeader flex items-center mb-4 pb-4 border-b-2 border-gray-300">
        <Image
          src={reviewerImage}
          alt="Happy Customer"
          width={60}
          height={60}
          className="reviewImg h-15 w-15 object-cover rounded-full border-2 border-gray-400"
        />
        <div className="stars text-star text-2xl ml-4 flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Image
              key={i}
              src="/images/star.svg"
              alt="Star"
              width={22}
              height={22}
            />
          ))}
        </div>
      </div>
      <p className="text-base m-0 text-gray-800 leading-relaxed lg:text-sm font-serif italic">&quot;{reviewText}&quot;</p>
    </div>
  );
}
