import TestDesignBanner from "@/components/TestDesignBanner";
import HeaderDesignForward from "@/components/design-forward/HeaderDesignForward";
import FooterDesignForward from "@/components/design-forward/FooterDesignForward";
import IntroSectionDesignForward from "@/components/design-forward/IntroSectionDesignForward";
import ServicesSectionDesignForward from "@/components/design-forward/ServicesSectionDesignForward";
import WhatWeHaulSectionDesignForward from "@/components/design-forward/WhatWeHaulSectionDesignForward";
import ProcessSectionDesignForward from "@/components/design-forward/ProcessSectionDesignForward";
import ReviewsSectionDesignForward from "@/components/design-forward/ReviewsSectionDesignForward";
import ContactSectionDesignForward from "@/components/design-forward/ContactSectionDesignForward";

export default function DesignForwardPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <TestDesignBanner />
      <HeaderDesignForward />
      <main className="relative z-[1]">
        <IntroSectionDesignForward />
        <ServicesSectionDesignForward />
        <WhatWeHaulSectionDesignForward />
        <ProcessSectionDesignForward />
        <ReviewsSectionDesignForward />
        <ContactSectionDesignForward />
      </main>
      <FooterDesignForward />
    </div>
  );
}
