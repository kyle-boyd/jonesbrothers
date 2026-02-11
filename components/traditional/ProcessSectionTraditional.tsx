export default function ProcessSectionTraditional() {
  const steps = [
    {
      number: "1",
      title: "Call or Request Estimate",
      description: "Contact us by phone or fill out our form. We'll ask about what you need removed and provide a free, no-obligation estimate.",
    },
    {
      number: "2",
      title: "Schedule Your Service",
      description: "Choose a time that works for you. We offer same-day service for most jobs and work around your schedule.",
    },
    {
      number: "3",
      title: "We Do the Heavy Lifting",
      description: "Our team arrives on time, removes everything safely, and cleans up after ourselves. You just point, we haul.",
    },
    {
      number: "4",
      title: "You're Done!",
      description: "We handle disposal, recycling, and donation. You get a clean space and peace of mind.",
    },
  ];

  return (
    <section id="process" className="process max-w-[900px] mx-auto my-12 relative py-12 md:py-8 md:my-6 border-b-2 border-gray-300">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-6 m-0 lg:text-3xl lg:mb-4 md:text-2xl md:mb-3 text-gray-900 font-serif">
          How It Works
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto font-serif mb-2">
          Simple, straightforward junk removal in four easy steps
        </p>
        <p className="text-base text-gray-600 max-w-xl mx-auto font-serif italic">
          Every new client gets a free consultation. We create personalized removal plans tailored to your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="border-2 border-gray-300 p-4 sm:p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white flex items-center justify-center text-xl font-bold rounded-full shadow-lg">
                {step.number}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 m-0 lg:text-xl md:text-lg text-gray-800 font-serif">
                  {step.title}
                </h3>
                <p className="text-base text-gray-700 m-0 lg:text-sm leading-relaxed font-serif">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
