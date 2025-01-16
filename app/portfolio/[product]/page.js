import PageBanner from "@/components/PageBanner";
import GallerySectionOne from "@/components/GallerySectionOne";
import HeaderOne from "@/components/HeaderOne";
import MobileMenu from "@/components/MobileMenu";
import Layout from "@/components/Layout";
import MainFooter from "@/components/MainFooter";
import PostControl from "@/components/PostControl";
import ProjectSingle from "@/components/ProjectSingle";
import { portfolioSection } from "@/data/portfolio/portfolioSection";
import React from "react";

export async function generateMetadata({ params }) {
  const parameters = await params
  const product = parameters.product;
  const thisProduct = portfolioSection.items.find(
    (item) => item.slug === product
  );

  return {
    title: `${thisProduct?.details.title} | Mexar Portfolio`,
    description: thisProduct?.details.description || "Discover our amazing portfolio work at Mexar",
    openGraph: {
      title: `${thisProduct?.details.title} | Mexar Portfolio`,
      description: thisProduct?.details.description,
      images: thisProduct?.details.image ? [thisProduct.details.image] : [],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${thisProduct?.details.title} | Mexar Portfolio`,
      description: thisProduct?.details.description,
      images: thisProduct?.details.image ? [thisProduct.details.image] : [],
    },
  };
}

export async function generateStaticParams() {
  return portfolioSection.items.map((item) => ({
    product: item.slug,
  }));
}

// detailed metadata for this page

const Portfolio = async ({ params }) => {
  const parameters = await params
  const product = parameters.product
  const thisProductIndex = portfolioSection.items.findIndex(
    (item) => item.slug === product
  );

  const thisProduct = portfolioSection.items[thisProductIndex];

  return (
    <Layout pageTitle={thisProduct?.details.title}>
      <HeaderOne />
      <MobileMenu />
      <PageBanner parent="Portfolio" parentHref="/portfolio" title={thisProduct?.details.title} />
      <ProjectSingle portfolio={product} />
      <PostControl next={portfolioSection.items[thisProductIndex + 1] || portfolioSection.items[0]} previous={
        portfolioSection.items[thisProductIndex - 1] || portfolioSection.items[portfolioSection.items.length - 1]
      } />
      <GallerySectionOne similar={false} />
      <MainFooter />
    </Layout>
  );
};

export default Portfolio;
