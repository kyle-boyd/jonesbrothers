import TestDesignBanner from "@/components/TestDesignBanner";
import HeaderModern from "@/components/modern/HeaderModern";
import FooterModern from "@/components/modern/FooterModern";
import IntroSectionModern from "@/components/modern/IntroSectionModern";
import ServicesSectionModern from "@/components/modern/ServicesSectionModern";
import WhatWeHaulSectionModern from "@/components/modern/WhatWeHaulSectionModern";
import ProcessSectionModern from "@/components/modern/ProcessSectionModern";
import ReviewsSectionModern from "@/components/modern/ReviewsSectionModern";
import ContactSectionModern from "@/components/modern/ContactSectionModern";

export default function ModernPage() {
  return (
    <>
      <TestDesignBanner />
      <HeaderModern />
      <main className="text-center mx-auto relative z-[1] px-4 sm:px-6 md:px-6 lg:px-12">
        <IntroSectionModern />
        <ServicesSectionModern />
        <WhatWeHaulSectionModern />
        <ProcessSectionModern />
        <ReviewsSectionModern />
        <ContactSectionModern />
      </main>
      <FooterModern />
    </>
  );
}
