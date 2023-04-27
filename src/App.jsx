import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacto from "./components/layaouts/Contacto";
import About from "./components/layaouts/Productos";
import Home from "./components/layaouts/Home";
import NavBar1 from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import bgVideo from "./components/Video/background-video.mp4";


function App() {
  return (
    <>
    <div className="video-background">
    <video autoPlay muted loop>
      <source src={bgVideo} type="video/mp4" />
      </video>
      </div>
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar1 />}>
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contacto />} />
            <Route
              path="/"
              element={<ItemListContainer greeting="¡Bienvenidos a Bona Comida!" />}
            />
            <Route element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>

  
    </div>
    </>
  );
}

export default App;