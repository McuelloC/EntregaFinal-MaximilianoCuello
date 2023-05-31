import { useState } from "react";
import { Button } from "react-bootstrap";

const Contacto = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [consulta, setConsulta] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Por favor, ingrese un correo electrónico válido.");
      return;
    }



    setFormSubmitted(true);
    setNombre("");
    setApellido("");
    setEmail("");
    setConsulta("");
  };

  return (
    <>
      <div className="container" id="container-contacto">
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
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
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="consulta" className="form-label">
            Consulta
          </label>
          <textarea
            className="form-control"
            id="consulta"
            rows="3"
            value={consulta}
            onChange={(e) => setConsulta(e.target.value)}
            required
          ></textarea>
        </div>
        <Button type="submit" onClick={handleSubmit}>
          Enviar
        </Button>
      </div>
      {formSubmitted && <p>¡Tu consulta ha sido enviada!</p>}
    </>
  );
};

export { Contacto };
