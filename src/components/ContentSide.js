import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import SidebarSide from "./SidebarSide";

const ContentSide = ({ service = {} }) => {
  const {
    image,
    title,
    text1,
    featuredImage,
    featuredTitle,
    featuredText,
    features,
    text2,
    text3,
  } = service || {};

  return (

    <div className="service-details">
      <Row className="clearfix">
        <Col lg={8} md={12} sm={12} className="content-side">
          <div className="main-image image">
            <Image src={image?.src} alt="" />
          </div>
          <div className="text-content">
            <h3>{title}</h3>
            <p>{text1}</p>
          </div>
        </Col>

        <Col lg={4} md={12} sm={12} className="sidebar-side">
          <SidebarSide />
        </Col>

        <Col lg={12} md={12} sm={12} className="content-side">
          <div className="text-content">
            <div className="featured">
              <Row className="clearfix">
                <Col md={6} sm={12} className="image-col">
                  <div className="image">
                    <Image src={featuredImage?.src} alt="" />
                  </div>
                </Col>
                <Col md={6} sm={12} className="text-col">
                  <div className="inner">
                    <h4>{featuredTitle}</h4>
                    <p>{featuredText}</p>
                    <ul>
                      {features?.map((text, i) => (
                        <li key={i}>{text}</li>
                      ))}
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
            <p>{text2}</p>
            <p className="last">{text3}</p>
          </div>
        </Col></Row>
    </div>
  );
};

export default ContentSide;
