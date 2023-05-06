import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar1 from "./components/Navbar/Navbar";
import bgVideo from "./components/Video/background-video.mp4";
import { DataProvider } from "./hooks/DataProvider";
import { CountProvider } from "./hooks/CountProvider";
import { Contacto, Home, Productos } from "./pages";



function App() {
  return (
   
    <>
     <DataProvider>
      <CountProvider>
    <div className="video-background">
    <video autoPlay muted loop>
      <source src={bgVideo} type="video/mp4" />
      </video>
      </div>
    <div >
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar1 />}>
            <Route path="Productos" element={<Productos />} />
            <Route path="contact" element={<Contacto />} />
            <Route
              path="/"
              element={<Home greeting="¡Bienvenidos a Bona Comida!" />}
            />
            <Route element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    
  
    </div>
    </CountProvider> 
    </DataProvider>
    </>
  );
  
}

export default App;
