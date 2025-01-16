import PageBanner from "@/components/PageBanner";
import ContactSection from "@/components/ContactSection";
import HeaderOne from "@/components/HeaderOne";
import MobileMenu from "@/components/MobileMenu";
import Layout from "@/components/Layout";
import MainFooter from "@/components/MainFooter";
import React from "react";

export const metadata = {
  title: `Contact | ${TITLE}`,
  description: 'Contactez Mexar, votre agence de développement web et mobile à Paris. Experts en création de sites web, applications mobiles et solutions digitales sur mesure.',
  keywords: KEYWORDS,
  openGraph: {
    title: `Contact | ${TITLE}`,
    description: 'Contactez Mexar, votre agence de développement web et mobile à Paris. Experts en création de sites web, applications mobiles et solutions digitales sur mesure.',
    locale: 'fr_FR',
    type: 'website',
  },
};

const Contact = () => {
  return (
    <Layout>
      <HeaderOne />
      <MobileMenu />
      <PageBanner title="Contact" />
      <ContactSection map form />
      <MainFooter />
    </Layout>
  );
};

export default Contact;
