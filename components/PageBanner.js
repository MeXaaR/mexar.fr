import Link from "next/link";
import React from "react";

const PageBanner = ({
  title = "",
  page = "",
  parent = "",
  parentHref = "/",
}) => {
  return (
    <section className="page-banner">
      <div
        className="image-layer"
        style={{ backgroundImage: `url(/images/background/parallax-bg-1-4.jpg)` }}
      ></div>
      <div className="shape-1"></div>
      <div className="shape-2"></div>
      <div className="banner-inner">
        <div className="auto-container">
          <div className="inner-container clearfix">
            <h1>{title}</h1>
            <div className="page-nav">
              <ul className="bread-crumb clearfix">
                <li>
                  <Link href="/index-main">Accueil</Link>
                </li>
                {parent && (
                  <li>
                    <Link href={parentHref}>{parent}</Link>
                  </li>
                )}
                <li className="active">{page || title}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
