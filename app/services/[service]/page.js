import PageBanner from "@/components/PageBanner";
import CallToSectionTwo from "@/components/CallToSectionTwo";
import HeaderOne from "@/components/HeaderOne";
import MobileMenu from "@/components/MobileMenu";
import Layout from "@/components/Layout";
import MainFooter from "@/components/MainFooter";
import SidebarPageContainer from "@/components/SidebarPageContainer";
import { servicesSection } from "@/data/services/index";
import React from "react";

export async function generateMetadata({ params }) {
  const parameters = await params
  const service = parameters.service;
  const thisService = servicesSection.services.find(
    ({ info }) => info.href === `/services/${service}`
  );

  if (!thisService) {
    return {
      title: "Service Not Found | Mexar",
      description: "The requested service could not be found.",
    };
  }

  return {
    title: `${thisService.info.title.replace('\n', ' ')} | Mexar`,
    description: thisService.info.text,
    openGraph: {
      title: `${thisService.info.title.replace('\n', ' ')} | Mexar`,
      description: thisService.info.text,
      images: [{
        url: `/images/services/${thisService.info.image}`,
        width: 1200,
        height: 630,
        alt: thisService.info.title,
      }],
      type: 'website',
      locale: 'fr_FR',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${thisService.info.title.replace('\n', ' ')} | Mexar`,
      description: thisService.info.text,
      images: [`/images/services/${thisService.info.image}`],
    },
    alternates: {
      canonical: `https://mexar.fr/services/${service}`,
    },
  };
}

const SingleService = async ({ params }) => {
  const parameters = await params
  const service = parameters.service;
  const thisService = servicesSection.services.find(
    ({ info }) => info.href === `/services/${service}`
  );

  if (!thisService) {
    return null;
  }

  return (
    <Layout>
      <HeaderOne />
      <MobileMenu />
      <PageBanner
        title={thisService.info.title}
        parent="Services"
        parentHref="/services"
      />
      <SidebarPageContainer service={thisService.details} />
      <CallToSectionTwo className="alternate" />
      <MainFooter />
    </Layout>
  );
};

export default SingleService;
