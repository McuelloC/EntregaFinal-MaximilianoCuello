import React from "react";
import bgImage from "../Video/background-video.mp4";


const ItemListContainer = ({ greeting }) => {
  return (
    <div className="position-relative">
      <div className="d-none d-md-block">
        <video autoPlay loop muted style={{ width: "100%" }}>
          <source src={bgImage} type="video/mp4" />
        </video>
      </div>
      <div className="col-6" style={{ position: "absolute", zIndex: "1", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <h1 className="text-center mb-4">
          {greeting}
        </h1>
        <p className="text-center" style={{ fontSize: "1.5em", color: "white", textShadow: "none" }}>
          La empresa dedicada a ofrecer los más deliciosos platos, utilizando ingredientes frescos y de la más alta calidad. Nuestra pasión por la gastronomía se ve reflejada en cada creación que hacemos y en la atención personalizada que ofrecemos a nuestros clientes. Con Bona Comida, disfrutará de una experiencia culinaria única y sabrosa.
        </p>
        
      </div>
    </div>
  );
};

export default ItemListContainer;
