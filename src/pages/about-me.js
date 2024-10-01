import AboutMeCounter from "@/components/AboutMeCounter";
import AboutMeOne from "@/components/AboutMeOne";
import PageBanner from "@/components/PageBanner";
import HeaderOne from "@/components/HeaderOne";
import MobileMenu from "@/components/MobileMenu";
import Layout from "@/components/Layout";
import MainFooter from "@/components/MainFooter";
import Style from "@/components/Style";
import SponsorsSection from "@/components/SponsorsSection";
import TestimonialSectionPage from "@/components/TestimonialSectionPage";
import React from "react";

const AboutMe = () => {
  return (
    <Layout pageTitle="A Propos">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <PageBanner title="A Propos" />
      <AboutMeOne />
      <AboutMeCounter />
      <TestimonialSectionPage />
      <SponsorsSection className="sponsors-section__about-two" />
      <MainFooter />
    </Layout>
  );
};

export default AboutMe;
