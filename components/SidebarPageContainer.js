import React from "react";
import ContentSide from "./ContentSide";

const SidebarPageContainer = ({ service = {} }) => {
  return (
    <div className="sidebar-page-container">
      <div className="auto-container">
        <ContentSide service={service} />
      </div>
    </div>
  );
};

export default SidebarPageContainer;
