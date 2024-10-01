import { errorSection } from "@/data/errorSection";
import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";

const { image, title, text } = errorSection;

const ErrorSection = () => {
  return (
    <section className="error-section">
      <div className="auto-container">
        <div className="content">
          <div className="big-text">
            <Image
              src={image.src}
              id="error-404"
              className="img-fluid"
              alt=""
            />
          </div>
          <h2>{title}</h2>
          <div className="text">{text}</div>
          <div className="link-box">
            <Link href="/">
              <a className="theme-btn btn-style-one">
                <i className="btn-curve"></i>
                <span className="btn-title">Retour à l'accueil</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorSection;
