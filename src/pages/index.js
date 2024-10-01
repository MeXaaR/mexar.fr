import React, { useEffect } from "react";
import AgencySection from "@/components/AgencySection";
import BannerOne from "@/components/BannerOne";
import FeaturedSection from "@/components/FeaturedSection";
import GallerySectionOne from "@/components/GallerySectionOne";
import HeaderOne from "@/components/HeaderOne";
import MobileMenu from "@/components/MobileMenu";
import Layout from "@/components/Layout";
import MainFooter from "@/components/MainFooter";
import ParallaxSection from "@/components/ParallaxSection";
import Style from "@/components/Style";
import ServicesSection from "@/components/ServicesSectionOne";
import SponsorsSection from "@/components/SponsorsSection";

const HomeMain = () => {
  useEffect(() => {
    document.body.className = "body-dark";

    return () => {
      document.body.className = "";
    };
  }, []);
  return (
    <Layout pageTitle="Page d'accueil">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <BannerOne />
      <ServicesSection />
      <FeaturedSection />
      <ParallaxSection />
      <GallerySectionOne />
      <SponsorsSection />
      <MainFooter normalPadding={false} />
    </Layout>
  );
};

export default HomeMain;
