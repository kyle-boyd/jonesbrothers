import ReviewCardDesignForward from "./ReviewCardDesignForward";

const reviews = [
  {
    image: "/images/Reviewer1.jpg",
    text: "Jordan and his helper came out this morning and within 2 hours they had this old metal shed completely torn down and removed, including the hefty base it was on! Will definitely give these guys a call if we need anything else. Highly recommend!!",
  },
  {
    image: "/images/Reviewer2.jpg",
    text: "I had a wonderful experience with Jones Bros Junk Removal! They came on time, were very kind and professional, and they took the items out of my house quickly. I’ll definitely be using their services again and recommending them to my friends and family. 100/10! Thank you!",
  },
  {
    image: "/images/Reviewer3.jpg",
    text: "I hired Jordan and his helper last week to remove a lot of junk from inside and outside my home. I use a cane so I was unable to help very much but that was no problem for these guys. They were so helpful and FAST!",
  },
  {
    image: "/images/Reviewer1.jpg",
    text: "Highly recommend! They were efficient, responsive and wonderful to work with. Do not hesitate to contact. They even came earlier than expected. Much appreciated! Will be referring others to them.",
  },
  {
    image: "/images/Reviewer2.jpg",
    text: "Jordan is easy to communicate with and timely in helping out. Saving me time and annoyance with getting rid of a large old mirror that I didn’t know what to do with. For sure reach out to them for help!",
  },
  {
    image: "/images/Reviewer3.jpg",
    text: "The Jones Bros. came out to our home for a much needed yard cleanup, and I can’t say enough good things. They cleared a huge pile of wood, carpet squares, and random junk that would’ve taken us days and a ton of trips to deal with.",
  },
];

export default function ReviewsSectionDesignForward() {
  return (
    <section id="reviews" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Customer Reviews
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <ReviewCardDesignForward
              key={index}
              reviewerImage={review.image}
              reviewText={review.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
