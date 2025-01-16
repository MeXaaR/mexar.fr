import React from "react";

const MapBox = () => {
  return (
    <div className="map-box">
      <iframe
        className="map-iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.1847772250217!2d1.4516280123633363!3d43.60269417098416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebc909159744b%3A0xab65b14e23f622cf!2sLa%20Cantine%20by%20La%20M%C3%AAl%C3%A9e!5e0!3m2!1sfr!2sfr!4v1727783381428!5m2!1sfr!2sfr"
        style={{ border: 0 }}
        aria-hidden={false}
        tabIndex={0}
      ></iframe>
    </div>
  );
};

export default MapBox;