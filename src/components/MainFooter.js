import { mainFooter } from "@/data/mainFooter";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import TextSplit from "./TextSplit";

const {
  year,
  author,
  logo,
  text,
  socials,
  links,
  address,
  phone,
  email,
  textBottom,
} = mainFooter;

const MainFooter = ({ normalPadding = true }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("email"));
  };

  return (
    <footer className={`main-footer${normalPadding ? " normal-padding" : ""}`}>
      <div className="auto-container">
        <div className="widgets-section">
          <Row className="clearfix">
            <Col xl={6} lg={6} md={12} sm={12} className="column">
              <div className="footer-widget logo-widget">
                <div className="widget-content">
                  <div className="logo">
                    <Link href="/">
                      <a>
                        <Image id="fLogo" src={logo.src} alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="text">{text}</div>
                  <ul className="social-links clearfix">
                    {socials.map(({ id, icon, href }) => (
                      <li key={id}>
                        <a href={href}>
                          <span className={icon}></span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>
            <Col xl={3} lg={6} md={6} sm={12} className="column">
              <div className="footer-widget links-widget">
                <div className="widget-content">
                  <h6>Explorer</h6>
                  <Row className="clearfix">
                    <Col md={6} sm={12}>
                      <ul>
                        {links.slice(0, 5).map(({ id, href, title }) => (
                          <li key={id}>
                            <Link href={href}>{title}</Link>
                          </li>
                        ))}
                      </ul>
                    </Col>
                    <Col md={6} sm={12}>
                      <ul>
                        {links.slice(5).map(({ id, href, title }) => (
                          <li key={id}>
                            <Link href={href}>{title}</Link>
                          </li>
                        ))}
                      </ul>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>

            <Col xl={3} lg={6} md={6} sm={12} className="column">
              <div className="footer-widget info-widget">
                <div className="widget-content">
                  <h6>Contact</h6>
                  <ul className="contact-info">
                    <li className="address">
                      <span className="icon flaticon-pin-1"></span>{" "}
                      <TextSplit text={address} />
                    </li>
                    <li>
                      <span className="icon flaticon-call"></span>
                      <a href={`tel:${phone.split(" ").join("")}`}>{phone}</a>
                    </li>
                    <li>
                      <span className="icon flaticon-email-2"></span>
                      <a href={`mailto:${email}`}>{email}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="inner clearfix">
            <div className="copyright">
              &copy; copyright {year} par {author}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
