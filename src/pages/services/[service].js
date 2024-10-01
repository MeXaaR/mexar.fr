import PageBanner from "@/components/PageBanner";
import CallToSectionTwo from "@/components/CallToSectionTwo";
import HeaderOne from "@/components/HeaderOne";
import MobileMenu from "@/components/MobileMenu";
import Layout from "@/components/Layout";
import MainFooter from "@/components/MainFooter";
import Style from "@/components/Style";
import SidebarPageContainer from "@/components/SidebarPageContainer";
import { servicesSection } from "@/data/services/index";
import { useRouter } from "next/router";
import React from "react";

const SingleService = () => {
  const router = useRouter()
  const service = router.query.service
  const thisService = servicesSection.services.find(
    ({ info }) => info.href === `/services/${service}`
  );
  return (
    <Layout pageTitle={thisService?.info.title}>
      <Style />
      <HeaderOne />
      <MobileMenu />
      <PageBanner
        title={thisService?.info.title}
        parent="Services"
        parentHref="/services"
      />
      <SidebarPageContainer service={thisService?.details} />
      <CallToSectionTwo className="alternate" />
      <MainFooter />
    </Layout>
  );
};

export default SingleService;
