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
      <Link href={`/portfolio/${slug}`}>
        <div className="inner-box">
          <figure className="image">
            <Image
              src={`/images/gallery/${image}`}
              alt=""
            />
          </figure>
          <a className="lightbox-image overlay-box"></a>
          <div className="cap-box">
            <div className="cap-inner">
              <div className="cat">
                <span>{tagline}</span>
              </div>
              <div className="title">
                <h5>
                  <Link href={`/portfolio/${slug}`}>{title}</Link>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default GalleryItem;
