import React from "react";
import Cards from "../components/Cards/Cards"


const Home = ({ greeting }) => {
  return (
    <>
      <div className="position-relative" style={{ marginTop: "20%" }}>
        <div
          className="col-6"
          style={{
            position: "relative",
            zIndex: "1",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h1 className="text-center mb-4">{greeting}</h1>
          <p
            className="text-center"
            style={{
              fontSize: "1.5em",
              color: "white",
              textShadow: "none",
            }}
          >
            La empresa dedicada a ofrecer los más deliciosos platos, utilizando
            ingredientes frescos y de la más alta calidad. Nuestra pasión por la
            gastronomía se ve reflejada en cada creación que hacemos y en la
            atención personalizada que ofrecemos a nuestros clientes. Con Bona
            Comida, disfrutará de una experiencia culinaria única y sabrosa.
          </p>
        </div>
      </div>
      <div className="col-10 mx-auto" style={{ marginTop: "20%px" }}>
        <Cards />
      </div>
    </>
  );
};

export  {Home};
