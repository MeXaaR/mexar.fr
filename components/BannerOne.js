import { bannerOne } from "@/data/bannerSection";
import React from "react";
import SlideItemOne from "./SlideItemOne";


const { dayRange, timeRange, socials, banners } = bannerOne;

const BannerOne = () => {

  return (
    <section className="banner-section banner-one">
      <div className="left-based-text">
        <div className="base-inner">
          <div className="hours">
            <ul className="clearfix">
              <li>
                <span>{dayRange}</span>
              </li>
              <li>
                <span>{timeRange}</span>
              </li>
            </ul>
          </div>
          <div className="social-links">
            <ul className="clearfix">
              {socials.map(({ id, href, title }) => (
                <li key={id}>
                  <a target="__blank" href={href}>
                    <span>{title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="banner-carousel">
        <div className="my-slider-11" >
          <SlideItemOne key={banners.id} slide={banners} />
        </div>
      </div>
    </section>
  );
};

export default BannerOne;
