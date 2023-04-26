import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Contacto from './components/layaouts/Contacto';
import About from './components/layaouts/Productos';
import Home from './components/layaouts/Home';
import NavBar1 from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer';
function App() {
  return (
<div>
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<NavBar1/>}>
    <Route path='about' element={<About/>}/>
    <Route  element={<Home/>}/>
    <Route path='contact' element={<Contacto/>}/>
    <Route path='contact' element={<Contacto/>}/>
    <Route path="/" element={<ItemListContainer greeting="¡Bienvenidos a Bona Comida!" />} />
  </Route>
 </Routes>
 </BrowserRouter>

 <div className='container-fluid'>

 </div>
 
</div>

  );
}

export default App;
