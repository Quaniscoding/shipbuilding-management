import React from "react";
import { testimonials } from "../modules/auth/mocks/customers/testimontials";
import { customerBenefits } from "../modules/auth/mocks/customers/benefits";
import { successStories } from "../modules/auth/mocks/customers/success-stories";
import HeroSection from "../components/customers/hero-section";
import StatsSection from "../components/customers/stats-section";
import ReviewSection from "../components/customers/review-section";
import BenefitsSection from "../components/customers/benefits-section";
import StoriesSection from "../components/customers/stories-section";
import CtaSection from "../components/customers/cta-section";
import FinalStatsSection from "../components/customers/final-stats-section";

export default function CustomerPage() {
    return (
        <div className="bg-gray-50 text-gray-800 font-sans items-center justify-center">
            <HeroSection />
            <StatsSection />
            <ReviewSection testimonials={testimonials} />
            <BenefitsSection customerBenefits={customerBenefits} />
            <StoriesSection successStories={successStories} />
            <CtaSection />
            <FinalStatsSection />
        </div>
    );
}