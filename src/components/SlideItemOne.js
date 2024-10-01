import Link from "next/link";
import React, { forwardRef, useEffect } from "react";
import TextSplit from "./TextSplit";

const SlideItemOne = ({ slide = {} }) => {
  const { bg, subtitle, title } = slide;
  const [loaded, setLoaded] = React.useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [])

  return (
    <div style={{ userSelect: "none" }} className={loaded ? "slide-item tns-slide-active" : "slide-item"}>
      <div
        className="image-layer"
        style={{
          backgroundImage: `url(${require(`@/images/main-slider/${bg}`).default.src
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
                <Link href="/about-me">
                  <a className="theme-btn btn-style-one">
                    <i className="btn-curve"></i>
                    <span className="btn-title">En savoir plus</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(SlideItemOne);
