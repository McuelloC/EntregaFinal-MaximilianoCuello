import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import bgVideo from "./assets/Video/background-video.mp4";
import { DataProvider, CartProvider,CountProvider } from "./Context/index"
import { Contacto, Home, Productos, ProductDetail } from "./pages";
import ViewCartItems from "./components/CartWidget/ViewCartItems";
import { useState } from "react";



function App() {
  const [showCartModal, setShowCartModal] = useState(true);
  return (
    <>
      <DataProvider>

        <div className="video-background">
          <video autoPlay muted loop>
            <source src={bgVideo} type="video/mp4" />
          </video>
        </div>
        <BrowserRouter>
        <CountProvider>
          <CartProvider>
            <Routes>

              <Route path="/" element={<NavBar />}>
                <Route path="productos" element={<Productos />} />
                <Route path="contact" element={<Contacto />} />
                <Route path="/productos/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<ViewCartItems show={showCartModal} onHide={() => setShowCartModal(false)} />} />
                <Route path="/" element={<Home greeting="¡Bienvenidos a Bona Comida!" />} />
                <Route element={<Home />} />
              </Route>

            </Routes>
          </CartProvider>
          </CountProvider>
        </BrowserRouter>

      </DataProvider>
    </>
  );
}

export default App;
