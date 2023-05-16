import { Dropdown, DropdownButton } from "react-bootstrap";
import ItemView from "../components/Items/ItemView";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";

const Productos = () => {
  const [filter, setFilter] = useState("Todo");
  const { id } = useParams();
  console.log(id)

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
            href="#/Todo"
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
        </DropdownButton>
      </div>
      <div className="row">
        <ItemView filter={filter} />
      </div>
      {id && <ProductDetail id={id} />} 
    </>
  );
};

export { Productos };
