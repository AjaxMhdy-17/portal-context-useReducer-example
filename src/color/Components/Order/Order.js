import React , {useState}from 'react'
import { FcShipped } from 'react-icons/fc'
import { useHistory } from 'react-router'
import './Order.css' 


const Order = (props) => {


    // const history = useHistory() 

    const [shipment , setShipment] = useState({
        name : '' , 
        phone : '' , 
        location : '' ,
        card_number : '' , 
        message : ''
    })


    const handleChange = (e) => {
        e.preventDefault() 
        const name = e.target.name ;
        const value = e.target.value ;
        setShipment({
            ...shipment , 
            [name] : value 
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(shipment.name !=='' && shipment.phone !=='' && shipment.location !=='' && shipment.card_number !=='' ){
            props.handleShipMentInfo(shipment.name , shipment.phone , shipment.location,shipment.card_number)
        }
        else{
            setShipment({
                ...shipment , 
                message : 'please complete the form we need all information for shipment' 
            })
        }
    }


    return (
        <div>
            <div className="order__main">
                <h2>please fill up this form for shipment process</h2>
                {shipment.message === ''? null : <p>{shipment.message}</p>}
                <div className="shipment__form">
                    <form onSubmit={handleSubmit}>
                        <div className="shipment_inputs">
                            <input 
                                type="text" 
                                placeholder='enter name'
                                name='name'
                                value={shipment.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="shipment_inputs">
                            <input 
                                type="text" 
                                placeholder='enter phone'
                                name='phone'
                                value={shipment.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="shipment_inputs">
                            <input 
                                type="text" 
                                placeholder='enter location'
                                name='location'
                                value={shipment.location}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="shipment_inputs">
                            <input 
                                type="text" 
                                placeholder='enter card_number'
                                name='card_number'
                                value={shipment.card_number}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="shipment__button">
                            <button className="butt">
                                proceed 
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Order
