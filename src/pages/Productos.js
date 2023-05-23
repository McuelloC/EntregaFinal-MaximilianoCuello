import { Dropdown, DropdownButton } from "react-bootstrap";
import ItemView from "../components/Items/ItemView";
import { useState } from "react";



const Productos = () => {
  const [filter, setFilter] = useState("Todo");
  const handleSelect = (value) => {
    setFilter(value);
  };


  return (
    <>
      <div className="container">
        <DropdownButton id="dropdown-basic-button" title="Categorias">

          <Dropdown.Item

            onClick={() => handleSelect("Todo")}
            className="List"

          >
            Todo
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => handleSelect("Carne")}
            className="List"
            href="#/Carne"

          >
            Carnes
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => handleSelect("Pastas")}
            className="List"
            href="#/Pastas"
          >
            Pastas
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => handleSelect("Pizza")}
            className="List"
            href="#/Pizzas"
          >
            Pizzas
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => handleSelect("Viandas")}
            className="List"
            href="#/Viandas"
          >
            Viandas
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => handleSelect("Catering")}
            className="List"
            href="#/Catering"
          >
            Catering
          </Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="row">
        <ItemView filter={filter} />
      </div>

    </>
  );
};

export { Productos };
