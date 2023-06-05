import React from "react";
import Cards from "../components/Cards/Cards"
import "./pages.css"
import { Footer } from "../components";


const Home = ({ greeting }) => {

  return (
    <>
      <div className="position-relative" id="DivGral-Home" style={{ marginTop: "20%" }}>
        <div
          className="col-4"
          id="Div-Home"

        >
          <h1 className="text-center mb-4">{greeting}</h1></div>

        <p
          className="text-center"
          id="P-Home"

        >
          La empresa dedicada a ofrecer los más deliciosos platos, utilizando
          ingredientes frescos y de la más alta calidad. Nuestra pasión por la
          gastronomía se ve reflejada en cada creación que hacemos y en la
          atención personalizada que ofrecemos a nuestros clientes. Con Bona
          Comida, disfrutará de una experiencia culinaria única y sabrosa.
        </p>

      </div>
      <div className="col-10 mx-auto" style={{ marginTop: "50%px" }}>
        <Cards />

      </div>

      <Footer />


    </>
  );
};

export { Home };
