import PageBanner from "@/components/PageBanner";
import CallToSection from "@/components/CallToSection";
import HeaderOne from "@/components/HeaderOne";
import MobileMenu from "@/components/MobileMenu";
import Layout from "@/components/Layout";
import MainFooter from "@/components/MainFooter";
import ProcessOne from "@/components/ProcessSection/ProcessOne";
import Style from "@/components/Style";
import React from "react";

const Process = () => {
  return (
    <Layout pageTitle="Process Page">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <PageBanner title="our process" page="process" parent="Page" />
      <ProcessOne />
      <CallToSection />
      <MainFooter normalPadding={false} />
    </Layout>
  );
};

export default Process;
