import React, { useContext, useState } from 'react'
import Cards from "react-credit-cards"
import "react-credit-cards/es/styles-compiled.css"
import "./payment.css"
import { Button, Spinner, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { CartContext, CountContext } from '../../Context'

const PaymentForm = () => {
    const { removeList } = useContext(CartContext);
    const { resetCounters } = useContext(CountContext)

    const [card, setCard] = useState({
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        focus: ""
    });

    const [isLoading, setIsLoading] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCard((prevCard) => ({
            ...prevCard,
            [name]: value
        }));
    };

    const handleFocusChange = (e) => {
        setCard({
            ...card,
            focus: e.target.name
        })
    }

    const navigate = useNavigate();

    const handleClick = () => {
        removeList();
        resetCounters();
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            setShowMessage(true);

            setTimeout(() => {
                setShowMessage(false);
                navigate('/productos');
            }, 2000);
        }, 2000);
    }

    return (
        <>
            <div className='card-paymend'>
                <div className='card-body'>
                    <Cards
                        number={card.number}
                        name={card.name}
                        expiry={card.expiry}
                        cvc={card.cvc}
                        focused={card.focus}
                    />
                    <form>
                        <div className='form-group'>
                            <label htmlFor="number">Numero</label>
                            <input
                                type="text"
                                name="number"
                                id='number'
                                maxLength="16"
                                required
                                className='form-control'
                                onChange={handleInputChange}
                                onFocus={handleFocusChange}
                            />

                            <label htmlFor="name">Nombre</label>
                            <input
                                type="text"
                                name="name"
                                id='name'
                                required
                                className='form-control'
                                onChange={handleInputChange}
                                onFocus={handleFocusChange}
                            />
                        </div>
                        <div className='form-row'>
                            <div className='form-group col-md-6'>
                                <label htmlFor="expiry">Fecha Expiracion</label>
                                <input
                                    type="text"
                                    name="expiry"
                                    id='expiry'
                                    required
                                    className='form-control'
                                    onChange={handleInputChange}
                                    onFocus={handleFocusChange}
                                />
                                <label htmlFor="cvc">CVC</label>
                                <input
                                    type="text"
                                    name="cvc"
                                    required
                                    id='cvc'
                                    className='form-control'
                                    onChange={handleInputChange}
                                    onFocus={handleFocusChange}
                                />
                            </div>
                        </div>
                    </form>
                    <div className='container mt-4'>
                        <Button onClick={handleClick}>PAGAR</Button>
                    </div>
                    {isLoading && (
                        <div className='container mt-2'>
                            <Spinner animation="border" variant="primary" />
                        </div>
                    )}
                    {showMessage && (
                        <div className='container mt-2'>
                            <Alert variant="success">Pago autorizado, !Gracias!</Alert>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export { PaymentForm }
