import React from "react";

const Preloader = ({ loading, className = "" }) => {
  return (
    <div
      style={{
        zIndex: loading ? 9999 : -1,
      }}
      className={`preloader animated${loading ? "" : " fadeOut"} ${className}`}
    >
      <div style={{ backgroundImage: `url(/images/loader.png)` }} className="icon"></div>
    </div>
  );
};

export default Preloader;
