import { comingSoonSection } from "@/data/comingSoonSection";
import React from "react";
import { Col, Row } from "react-bootstrap";
import CountdownOne from "./CountdownOne";

const { bg, logo, logoTitle, title, text, formTitle, formText } =
  comingSoonSection;

const ComingSoonSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("email"));
  };

  return (
    <section
      className="coming-soon"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="auto-container">
        <Row>
          <Col lg={7}>

            <h3 className="coming-soon__title">{title}</h3>
            <p className="coming-soon__text">{text}</p>
            <ul
              className="countdown-one__list list-unstyled"
              data-leading-zeros="true"
              data-enable-days="true"
              data-deadline-date="dynamicDate"
            ></ul>
            <CountdownOne
              leadingZeros
              deadlineDate="dynamicDate"
              className="coming-soon__countdown"
            />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ComingSoonSection;
