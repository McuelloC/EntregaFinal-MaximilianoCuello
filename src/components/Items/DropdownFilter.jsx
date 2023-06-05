import React from 'react'
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const DropdownFilter = () => {
    const navigate = useNavigate();
    const handleSelect = (value) => {
        navigate(`/Productos/${value}`);
    };
    return (
        <div className="container">
            <DropdownButton id="dropdown-basic-button" title="Categorias">

                <Dropdown.Item

                    as={Link} to="/Productos"
                    className="List"
                >
                    Todo
                </Dropdown.Item>
                <Dropdown.Item

                    onClick={() => handleSelect("Carne")}
                    className="List"
                >
                    Carnes
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => handleSelect("Pastas")}
                    className="List"
                >
                    Pastas
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => handleSelect("Pizza")}
                    className="List"
                >
                    Pizzas
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => handleSelect("Viandas")}
                    className="List"
                >
                    Viandas
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => handleSelect("Catering")}
                    className="List"

                >
                    Catering
                </Dropdown.Item>
            </DropdownButton>
        </div>
    )
}

export { DropdownFilter }
