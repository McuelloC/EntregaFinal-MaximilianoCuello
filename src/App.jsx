import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar, ViewCartItems,ProductDetail,Brief}from "./components/index";
import bgVideo from "./assets/Video/background-video.mp4";
import { DataProvider, CartProvider, CountProvider } from "./Context/index";
import { Contacto, Home, Productos  } from "./pages";
import { Checkout } from "./components/Checkout/Checkout";


function App() {
  return (
    <>
      <DataProvider>
        <div className="video-background">
          <video autoPlay muted loop>
            <source src={bgVideo} type="video/mp4" />
          </video>
        </div>
        <div className="contenedor-general">
          <BrowserRouter>
            <CountProvider>
              <CartProvider>
                <Routes>
                  <Route path="/" element={<NavBar />}>
                    <Route path="Productos" element={<Productos />} />
                    <Route path="contact" element={<Contacto />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/brief" element={<Brief />} />
                    <Route path="/Productos/:id" element={<ProductDetail />} />
                    <Route path="/cart" element={<ViewCartItems />} />
                    <Route path="/" element={<Home greeting="¡Bienvenidos a Bona Comida!" />} />
                    <Route element={<Home />} />
                  </Route>
                </Routes>
              </CartProvider>
            </CountProvider>
          </BrowserRouter>
        </div>
      </DataProvider>
    </>
  );
}

export default App;
