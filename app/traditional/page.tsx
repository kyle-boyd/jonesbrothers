import TestDesignBanner from "@/components/TestDesignBanner";
import HeaderTraditional from "@/components/traditional/HeaderTraditional";
import FooterTraditional from "@/components/traditional/FooterTraditional";
import IntroSectionTraditional from "@/components/traditional/IntroSectionTraditional";
import ServicesSectionTraditional from "@/components/traditional/ServicesSectionTraditional";
import WhatWeHaulSectionTraditional from "@/components/traditional/WhatWeHaulSectionTraditional";
import ProcessSectionTraditional from "@/components/traditional/ProcessSectionTraditional";
import ReviewsSectionTraditional from "@/components/traditional/ReviewsSectionTraditional";
import ContactSectionTraditional from "@/components/traditional/ContactSectionTraditional";

export default function TraditionalPage() {
  return (
    <>
      <TestDesignBanner />
      <HeaderTraditional />
      <main className="text-center mx-auto relative z-[1] px-4 sm:px-6 md:px-6 lg:px-12">
        <IntroSectionTraditional />
        <ServicesSectionTraditional />
        <WhatWeHaulSectionTraditional />
        <ProcessSectionTraditional />
        <ReviewsSectionTraditional />
        <ContactSectionTraditional />
      </main>
      <FooterTraditional />
    </>
  );
}
