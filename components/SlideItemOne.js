import Link from "next/link";
import React, { forwardRef } from "react";
import TextSplit from "./TextSplit";

const SlideItemOne = ({ slide = {} }) => {
  const { bg, subtitle, title } = slide;

  return (
    <div style={{ userSelect: "none" }} className={"slide-item tns-slide-active"}>
      <div
        className="image-layer"
        style={{
          backgroundImage: `url(${`/images/main-slider/${bg}`
            })`,
        }}
      ></div>
      <div className="left-top-line"></div>
      <div className="right-bottom-curve"></div>
      <div className="right-top-curve"></div>
      <div className="auto-container">
        <div className="content-box">
          <div className="content">
            <div className="inner">
              <div className="sub-title">{subtitle}</div>
              <h1>
                <TextSplit text={title} />
              </h1>
              <div className="link-box">
                <Link passHref href="/about-me" className="theme-btn btn-style-one">
                  <i className="btn-curve"></i>
                  <span className="btn-title">En savoir plus</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default forwardRef(SlideItemOne);
