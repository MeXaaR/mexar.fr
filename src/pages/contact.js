import PageBanner from "@/components/PageBanner";
import ContactSection from "@/components/ContactSection";
import HeaderOne from "@/components/HeaderOne";
import MobileMenu from "@/components/MobileMenu";
import Layout from "@/components/Layout";
import MainFooter from "@/components/MainFooter";
import Style from "@/components/Style";
import React from "react";

const Contact = () => {
  return (
    <Layout pageTitle="Contact">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <PageBanner title="Contact" />
      <ContactSection map form />
      <MainFooter />
    </Layout>
  );
};

export default Contact;
