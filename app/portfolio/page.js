import PageBanner from "@/components/PageBanner";
import GallerySectionOne from "@/components/GallerySectionOne";
import HeaderOne from "@/components/HeaderOne";
import MobileMenu from "@/components/MobileMenu";
import Layout from "@/components/Layout";
import MainFooter from "@/components/MainFooter";
import React from "react";

export const metadata = {
  title: 'Portfolio | Mexar - Creative Projects and Works',
  description: 'Explore our diverse portfolio of creative projects, digital solutions, and innovative works. Discover how we bring ideas to life through design and technology.',
  openGraph: {
    title: 'Portfolio | Mexar - Creative Projects and Works',
    description: 'Explore our diverse portfolio of creative projects, digital solutions, and innovative works. Discover how we bring ideas to life through design and technology.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/images/og-portfolio.jpg', // Make sure this image exists in your public folder
        width: 1200,
        height: 630,
        alt: 'Mexar Portfolio Projects',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Mexar - Creative Projects and Works',
    description: 'Explore our diverse portfolio of creative projects, digital solutions, and innovative works.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://mexar.fr/portfolio',
  }
};

const Portfolio = () => {
  return (
    <Layout pageTitle="Portfolio">
      <HeaderOne />
      <MobileMenu />
      <PageBanner title="Portfolio" />
      <GallerySectionOne portfolio />
      <MainFooter />
    </Layout>
  );
};

export default Portfolio;
