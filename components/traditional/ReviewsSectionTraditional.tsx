import ReviewCardTraditional from "./ReviewCardTraditional";
import { asset } from "@/lib/site";

const reviews = [
  {
    image: asset("/images/Reviewer1.jpg"),
    text: "Jordan and his helper came out this morning and within 2 hours they had this old metal shed completely torn down and removed, including the hefty base it was on! Will definitely give these guys a call if we need anything else. Highly recommend!!",
  },
  {
    image: asset("/images/Reviewer2.jpg"),
    text: "I had a wonderful experience with Jones Bros Junk Removal! They came on time, were very kind and professional, and they took the items out of my house quickly. I’ll definitely be using their services again and recommending them to my friends and family. 100/10! Thank you!",
  },
  {
    image: asset("/images/Reviewer3.jpg"),
    text: "I hired Jordan and his helper last week to remove a lot of junk from inside and outside my home. I use a cane so I was unable to help very much but that was no problem for these guys. They were so helpful and FAST!",
  },
  {
    image: asset("/images/Reviewer1.jpg"),
    text: "Highly recommend! They were efficient, responsive and wonderful to work with. Do not hesitate to contact. They even came earlier than expected. Much appreciated! Will be referring others to them.",
  },
  {
    image: asset("/images/Reviewer2.jpg"),
    text: "Jordan is easy to communicate with and timely in helping out. Saving me time and annoyance with getting rid of a large old mirror that I didn’t know what to do with. For sure reach out to them for help!",
  },
  {
    image: asset("/images/Reviewer3.jpg"),
    text: "The Jones Bros. came out to our home for a much needed yard cleanup, and I can’t say enough good things. They cleared a huge pile of wood, carpet squares, and random junk that would’ve taken us days and a ton of trips to deal with.",
  },
];

export default function ReviewsSectionTraditional() {
  return (
    <>
      <section id="reviews" className="services max-w-[900px] mx-auto my-12 relative text-left py-12 md:py-8 md:my-6 border-b-2 border-gray-300">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-6 m-0 lg:text-3xl lg:mb-4 md:text-2xl md:mb-3 text-gray-900 font-serif">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-serif mb-4">
            Hear from real customers who trust us with their junk removal needs.
          </p>
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-2xl text-star">★★★★★</span>
            <span className="text-lg text-gray-700 font-semibold font-serif">5.0 Rating</span>
          </div>
        </div>
      </section>
      <section className="reviews grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 px-8 lg:gap-5 lg:px-6 md:px-0 mb-12">
        {reviews.map((review, index) => (
          <ReviewCardTraditional
            key={index}
            reviewerImage={review.image}
            reviewText={review.text}
          />
        ))}
      </section>
    </>
  );
}
