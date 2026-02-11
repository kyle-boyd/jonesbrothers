export default function ProcessSectionModern() {
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
    <section id="process" className="process max-w-[900px] mx-auto my-16 relative py-16 md:py-10 md:my-8">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-light mb-6 m-0 tracking-tight lg:text-4xl lg:mb-4 md:text-3xl md:mb-3 text-gray-900">
          How It Works
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Simple, straightforward junk removal in four easy steps
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-2xl font-light">
                {step.number}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-light mb-3 m-0 lg:text-xl md:text-lg text-gray-800">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 m-0 lg:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute left-8 top-16 w-0.5 h-full bg-gray-200 -z-10"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
