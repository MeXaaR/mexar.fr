import PageBanner from "@/components/PageBanner";
import GallerySectionOne from "@/components/GallerySectionOne";
import HeaderOne from "@/components/HeaderOne";
import MobileMenu from "@/components/MobileMenu";
import Layout from "@/components/Layout";
import MainFooter from "@/components/MainFooter";
import React from "react";


export const metadata = {
  title: 'Portfolio | Mexar - Projets créatifs et travaux',
  description: 'Explorez notre portefeuille diversifié de projets créatifs, solutions numériques et travaux innovants. Découvrez comment nous donnons vie aux idées grâce au design et à la technologie.',
  openGraph: {
    title: 'Portfolio | Mexar - Projets créatifs et travaux',
    description: 'Explorez notre portefeuille diversifié de projets créatifs, solutions numériques et travaux innovants. Découvrez comment nous donnons vie aux idées grâce au design et à la technologie.',
    type: 'website',
    locale: 'fr_FR',
    images: [
      {
        url: '/images/og-portfolio.jpg', // Assurez-vous que cette image existe dans votre dossier public
        width: 1200,
        height: 630,
        alt: 'Projets du portefeuille Mexar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Mexar - Projets créatifs et travaux',
    description: 'Explorez notre portefeuille diversifié de projets créatifs, solutions numériques et travaux innovants.',
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
    <Layout>
      <HeaderOne />
      <MobileMenu />
      <PageBanner title="Portfolio" />
      <GallerySectionOne portfolio />
      <MainFooter />
    </Layout>
  );
};

export default Portfolio;
