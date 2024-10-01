import Link from "next/link";
import React from "react";

const CallToSectionTwo = ({
  className = "",
  btnClassName = "btn-style-two",
}) => {
  return (
    <section className={`call-to-section-two ${className}`}>
      <div className="auto-container">
        <div className="inner clearfix">
          <h2>
            Vous voulez discuter de votre <br />Projet ?
          </h2>
          <div className="link-box">
            <Link href="/contact">
              <a className={`theme-btn ${btnClassName}`}>
                <i className="btn-curve"></i>
                <span className="btn-title">Contactez-moi</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToSectionTwo;
