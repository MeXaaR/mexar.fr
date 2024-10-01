import { portfolioSection } from "@/data/portfolio/portfolioSection";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";


const ProjectSingle = ({ portfolio }) => {
  const thisProduct = portfolioSection.items.find(
    (item) => item.slug === portfolio
  );
  const {
    images,
    title,
    text,
    clients,
    category,
    date,
    text2,
    image,
    featured,
    features,
    challenges,
    technologies,
    portrait
  } = thisProduct?.details || {};
  return (
    <section className={`project-single style-two`}>
      <div className="auto-container">
        {!!featured &&
          <Row className="clearfix" style={{ marginBottom: 20 }}>
            <Col
              lg={3}
              md={3}
            />
            <Col
              lg={6}
              md={6}
              sm={12}

            >
              <Image
                src={`/images/gallery/${featured}`} style={{ width: "100%" }}
              />
            </Col>
          </Row>}
        <Row className="clearfix">
          <Col
            lg={12}
            md={12}
            sm={12}
          >
            <div>
              <div className="text-content">

                <Row>
                  <Col lg={8} md={12} sm={12}>
                    <div className="inner">
                      <h5>{title}</h5>
                      <p>{text}</p>
                      <h5>TECH STACK</h5>
                      <p>{text2}</p>
                    </div>
                  </Col>
                  <Col lg={4} md={12} sm={12}>
                    <div className="inner">
                      <ul className="info">
                        <li>
                          <strong>Client:</strong> <br />
                          {clients}
                        </li>
                        <li>
                          <strong>Catégorie:</strong> <br />
                          {category}
                        </li>
                        <li>
                          <strong>Date:</strong> <br />
                          {date}
                        </li>
                        <li>
                          <strong>Technologies:</strong> <br />
                          {technologies?.join(", ")}
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>

              </div>
            </div>
          </Col>
          <Col xl={12} lg={12} md={12} sm={12} className="right-col">

            <div className="inner">
              <h5>FONCTIONNALITÉS</h5>
            </div>
            <div className="features">
              <div className="text">
                <ul>
                  {features?.map((text, i) => (
                    <li key={i}>{text}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>
        </Row>

        <div className="features" style={{ marginTop: 30 }}>
          <Row className="clearfix">
            <Col lg={8} md={12} sm={12}>
              <div className="inner">
                <h5>CHALLENGES</h5>
              </div>
            </Col>
            {challenges?.map(({ challenge, solution }) => (
              <Col key={challenge} md={6} sm={12} className="feature" style={{ marginBottom: 20 }}>
                <div className="inner-box">
                  <h6>{challenge}</h6>
                  <div className="text">{solution}</div>
                </div>
              </Col>
            ))}
          </Row>
          <Row className="clearfix" style={{ marginTop: 50 }}>
            {!!images?.length && <Col lg={12} md={12} sm={12}>
              <div className="inner">
                <h5>SCREENSHOTS</h5>
              </div>
            </Col>}
            {images
              ?.map((image, i) => (
                <Col
                  key={i}
                  lg={portrait ? 3 : 6}
                  md={portrait ? 3 : 6}
                  sm={12}
                >
                  <Image
                    src={`/images/gallery/${image}`}
                    style={{ width: "100%" }}
                    alt=""
                  />
                </Col>
              ))}
          </Row>
        </div>
      </div>
    </section>
  );
};

export default ProjectSingle;
