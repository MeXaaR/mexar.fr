import AboutMeCounter from "@/components/AboutMeCounter";
import AboutMeOne from "@/components/AboutMeOne";
import PageBanner from "@/components/PageBanner";
import HeaderOne from "@/components/HeaderOne";
import MobileMenu from "@/components/MobileMenu";
import Layout from "@/components/Layout";
import MainFooter from "@/components/MainFooter";
import SponsorsSection from "@/components/SponsorsSection";
import TestimonialSectionPage from "@/components/TestimonialSectionPage";
import React from "react";
import { aboutMeOne } from "@/data/aboutSection";

export const metadata = {
  title: `À Propos | ${aboutMeOne.title} | ${TITLE}`,
  description: 'Découvrez mon parcours professionnel en tant que développeur Full Stack. Expertise en développement web, mobile et solutions IA innovantes.',
  keywords: ['développeur full stack', 'expert IA', 'développement web', 'intelligence artificielle', aboutMeOne.title],
  openGraph: {
    title: `À Propos | ${aboutMeOne.title} | ${TITLE}`,
    description: 'Découvrez mon parcours professionnel en tant que développeur Full Stack.',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://mexar.fr/about-me',
    siteName: aboutMeOne.title,
    images: [
      {
        url: aboutMeOne.image,
        width: 1200,
        height: 630,
        alt: `${aboutMeOne.title} - Développeur Full Stack`,
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `À Propos | ${aboutMeOne.title} | ${TITLE}`,
    description: 'Découvrez mon parcours professionnel en tant que développeur Full Stack.',
    images: [aboutMeOne.image],
  },
};

const AboutMe = () => {
  return (
    <Layout>
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
