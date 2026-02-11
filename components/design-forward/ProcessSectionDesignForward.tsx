export default function ProcessSectionDesignForward() {
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
    <section id="process" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Simple, straightforward junk removal in four easy steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="p-6 sm:p-8 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center text-2xl font-bold text-white">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
