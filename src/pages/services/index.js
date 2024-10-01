import PageBanner from "@/components/PageBanner";
import HeaderOne from "@/components/HeaderOne";
import MobileMenu from "@/components/MobileMenu";
import Layout from "@/components/Layout";
import MainFooter from "@/components/MainFooter";
import Style from "@/components/Style";
import ServiceNine from "@/components/ServiceNine";
import React from "react";

const Services2 = () => {
  return (
    <Layout pageTitle="Services">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <PageBanner title="Services" />
      <ServiceNine />
      <MainFooter />
    </Layout>
  );
};

export default Services2;
