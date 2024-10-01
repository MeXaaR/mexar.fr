import PageBanner from "@/components/PageBanner";
import GallerySectionOne from "@/components/GallerySectionOne";
import HeaderOne from "@/components/HeaderOne";
import MobileMenu from "@/components/MobileMenu";
import Layout from "@/components/Layout";
import MainFooter from "@/components/MainFooter";
import PostControl from "@/components/PostControl";
import ProjectSingle from "@/components/ProjectSingle";
import Style from "@/components/Style";
import { portfolioSection } from "@/data/portfolio/portfolioSection";
import { useRouter } from "next/router";
import React from "react";

const PortfolioSingle2 = () => {
  const router = useRouter()
  const product = router.query.product
  const thisProductIndex = portfolioSection.items.findIndex(
    (item) => item.slug === product
  );

  const thisProduct = portfolioSection.items[thisProductIndex];

  return (
    <Layout pageTitle={thisProduct?.details.title}>
      <Style />
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

export default PortfolioSingle2;
