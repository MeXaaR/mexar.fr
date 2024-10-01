import PageBanner from "@/components/PageBanner";
import ErrorSection from "@/components/ErrorSection";
import HeaderOne from "@/components/HeaderOne";
import MobileMenu from "@/components/MobileMenu";
import Layout from "@/components/Layout";
import MainFooter from "@/components/MainFooter";
import Style from "@/components/Style";
import React from "react";

const NotFound = () => {
  return (
    <Layout pageTitle="404 Error">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <PageBanner title="404 Error" />
      <ErrorSection />
      <MainFooter />
    </Layout>
  );
};

export default NotFound;
