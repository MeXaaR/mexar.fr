import PageBanner from "@/components/PageBanner";
import CallToSection from "@/components/CallToSection";
import FeatureEight from "@/components/FeatureEight";
import HeaderOne from "@/components/HeaderOne";
import MobileMenu from "@/components/MobileMenu";
import HowItWorksPage from "@/components/HowItWorksPage";
import Layout from "@/components/Layout";
import MainFooter from "@/components/MainFooter";
import ParallaxSection from "@/components/ParallaxSection";
import Style from "@/components/Style";
import SponsorsSection from "@/components/SponsorsSection";
import React from "react";

const HowItWorks = () => {
  return (
    <Layout pageTitle="How It Works">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <PageBanner title="How It Works" />
      <HowItWorksPage />
      <SponsorsSection />
      <ParallaxSection />
      <FeatureEight />
      <CallToSection />
      <MainFooter normalPadding={false} />
    </Layout>
  );
};

export default HowItWorks;
