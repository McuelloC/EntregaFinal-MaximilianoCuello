import React, { useContext, useState } from 'react'
import { Button } from 'react-bootstrap';
import "./checkout.css"
import { DataContext } from '../../Context';
import { useNavigate } from 'react-router-dom';



export const Checkout = () => {
  const { sendOrder } = useContext(DataContext)
  const [user, setUser] = useState({
    nombre: "",
    apellido: "",
    email: ""
  });
  const toBrief = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();



    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(user.email)) {
      alert("Por favor, ingrese un correo electrónico válido.");
      return;
    }

    if (user.nombre && user.apellido && user.email) {
      sendOrder(user);
      toBrief(`/checkout/Brief`);
    } else {
      alert("Por favor, complete todos los campos.");
    }

  };


  return (
    <>
      <div className="container" id="container-checkout">
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            value={user.nombre}
            onChange={(e) => setUser(prevState => ({ ...prevState, nombre: e.target.value }))}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="apellido" className="form-label">
            Apellido
          </label>
          <input
            type="text"
            className="form-control"
            id="apellido"
            value={user.apellido}
            onChange={(e) => setUser(prevState => ({ ...prevState, apellido: e.target.value }))}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Direccion de Mail
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="nombre@ejemplo.com.ar"
            value={user.email}
            onChange={(e) => setUser(prevState => ({ ...prevState, email: e.target.value }))}
            required
          />
        </div>

        <Button type="submit" onClick={handleSubmit}>
          Enviar
        </Button>
      </div>


    </>
  );
};
