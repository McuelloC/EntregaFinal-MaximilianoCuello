import React from "react";
import bgImage from "../Video/background-video.mp4"

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="position-relative">
      <div className="d-none d-md-block">
        <video autoPlay loop muted style={{ width: "100%" }}>
          <source src={bgImage} type="video/mp4"/>
        </video>
      </div>
      <h1 className="text-center mb-4"
        style={{ position: "absolute", zIndex: "1", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
        {greeting}
      </h1>
    </div>
  );
};

export default ItemListContainer;
