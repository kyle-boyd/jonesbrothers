import ReviewCardModern from "./ReviewCardModern";
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

export default function ReviewsSectionModern() {
  return (
    <>
      <section id="reviews" className="services max-w-[900px] mx-auto my-16 relative text-left py-16 md:py-10 md:my-8">
        <h2 className="text-5xl font-light mb-12 m-0 tracking-tight lg:text-4xl lg:mb-8 md:text-3xl md:mb-6 text-gray-900">
          Customer Reviews
        </h2>
      </section>
      <section className="reviews grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-4 sm:gap-6 lg:gap-6 px-4 sm:px-6 md:px-8">
        {reviews.map((review, index) => (
          <ReviewCardModern
            key={index}
            reviewerImage={review.image}
            reviewText={review.text}
          />
        ))}
      </section>
    </>
  );
}
