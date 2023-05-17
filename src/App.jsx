import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import bgVideo from "./assets/Video/background-video.mp4";
import { DataProvider } from "./Context/DataProvider";
import { Contacto, Home, Productos } from "./pages";
import ProductDetail from "./pages/ProductDetail";
import IdProvider from "./Context/IdProvider";



function App() {
  return (

    <>
      <DataProvider>
       
          <div className="video-background">
            <video autoPlay muted loop>
              <source src={bgVideo} type="video/mp4" />
            </video>
          </div>
          <div >
           <IdProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<NavBar />}>
                  <Route path="productos" element={<Productos />} />
                  <Route path="contact" element={<Contacto />} />
                  <Route path="/productos/:id" element={<ProductDetail />} />
                  <Route path="/" element={<Home greeting="¡Bienvenidos a Bona Comida!" />} />
                  <Route element={<Home />} />
                </Route>
              </Routes>
            </BrowserRouter>

            </IdProvider>
          </div>
        
      </DataProvider>
    </>
  );

}

export default App;
