

import { Dropdown, DropdownButton } from "react-bootstrap"
import ItemView from "../components/Items/ItemView"


const Productos = () => {
   
    return (
        <>
            <div className="container">
            <DropdownButton id="dropdown-basic-button" title="Categorias">
                <Dropdown.Item href="#/action-1" className="List">Todo</Dropdown.Item>
                
                <Dropdown.Item href="#/action-2" className="List">Carnes</Dropdown.Item>
                <Dropdown.Item href="#/action-3" className="List">Pastas</Dropdown.Item>
                <Dropdown.Item href="#/action-3" className="List">Pizzas</Dropdown.Item>
            </DropdownButton>
            </div>
            <div className="row ">
                <ItemView />
            </div>


        </>

    )
}
export { Productos }