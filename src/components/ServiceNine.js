import { servicesSection } from "@/data/services/index";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const ServiceNine = () => {
  return (
    <section className="service-nine">
      <div className="auto-container">
        <Row>
          {servicesSection.services.map(({ info: { id, icon, title, href, image, text } }) => (
            <Col key={id} md={6} lg={4}>
              <div className="service-nine__card">
                <div className="service-nine__card__inner">
                  <div className="service-nine__image">
                    <Image
                      src={
                        `/images/services/${image}`
                      }
                      alt=""
                    />
                  </div>
                  <div className="service-nine__content">
                    <div className="service-nine__icon">
                      <i className={icon}></i>
                    </div>
                    <h3 className="service-nine__title">
                      <Link href={href}>{title}</Link>
                    </h3>
                    <p className="service-nine__text">{text}</p>
                    <Link href={href}>
                      <a className="service-nine__link">
                        <i className="fa fa-angle-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default ServiceNine;
