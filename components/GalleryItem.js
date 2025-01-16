import Link from "next/link";
import React from "react";
import { Col, Image } from "react-bootstrap";

const GalleryItem = ({ item = {} }) => {
  const { image, title, tagline, filter, slug } = item;

  return (
    <Col
      lg={4}
      md={6}
      sm={12}
      className={`gallery-item position-absolute ${filter?.join(" ")}`}
    >
      <div className="inner-box">
        <Link passHref href={`/portfolio/${slug}`}>
          <figure className="image">
            <Image
              src={`/images/gallery/${image}`}
              alt=""
            />
          </figure>
          <div className="lightbox-image overlay-box"></div>
          <div className="cap-box">
            <div className="cap-inner">
              <div className="cat">
                <span>{tagline}</span>
              </div>
              <div className="title">
                <h5>{title}</h5>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </Col>
  );
};

export default GalleryItem;
