
import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className='Container-Footer'>
        <div className='col-4'>
          <h2 className="footer-title">Bona Comida</h2>
        </div>
        <div className='col-3'>
          <ul className="footer-links">
            <li><a href="/productos">Productos</a></li>
            <li><a href="/contact">Contacto</a></li>
            <li><a href="/">Home</a></li>
          </ul>
        </div>
        <div className='col-2'>
          <ul className="footer-links" id="footer-image">
            
            <li><a href="https://www.linkedin.com/in/roberto-maximiliano-cuello-canales/" target="_blank"  rel="noopener noreferrer"><i class="bi bi-linkedin" id='linkedin'></i></a></li>
            <li><a href="https://github.com/McuelloC" target="_blank"  rel="noopener noreferrer"><i class="bi bi-github" id='github'></i></a></li>
          </ul>
        </div>
      
      </div>
    </footer>
  );
};

export { Footer };
