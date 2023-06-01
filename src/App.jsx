import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar, ViewCartItems, ProductDetail, Brief, Footer, PaymentForm, Checkout } from "./components/index";
import bgVideo from "./assets/Video/background-video.mp4";
import { DataProvider, CartProvider, CountProvider } from "./Context/index";
import { Contacto, Home, Productos } from "./pages";




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
                    <Route path="/checkout/brief" element={<Brief />} />
                    <Route path="/Productos/:id" element={<ProductDetail />} />
                    <Route path="/cart" element={<ViewCartItems />} />
                    <Route path="/checkout/brief/payment" element={<PaymentForm />} />
                    <Route path="/" element={<Home greeting="¡Bienvenidos a Bona Comida!" />} />
                    <Route element={<Home />} />
                  </Route>

                </Routes>
                <Footer />
              </CartProvider>
            </CountProvider>
          </BrowserRouter>
        </div>
      </DataProvider>
    </>
  );
}

export default App;
