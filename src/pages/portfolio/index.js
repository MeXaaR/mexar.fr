import PageBanner from "@/components/PageBanner";
import GallerySectionOne from "@/components/GallerySectionOne";
import HeaderOne from "@/components/HeaderOne";
import MobileMenu from "@/components/MobileMenu";
import Layout from "@/components/Layout";
import MainFooter from "@/components/MainFooter";
import Style from "@/components/Style";
import React from "react";

const Portfolio = () => {
  return (
    <Layout pageTitle="Portfolio">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <PageBanner title="Portfolio" />
      <GallerySectionOne portfolio />
      <MainFooter />
    </Layout>
  );
};

export default Portfolio;
