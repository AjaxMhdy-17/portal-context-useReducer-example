import React , {useState}from 'react'
import { FcShipped } from 'react-icons/fc'
import { useHistory } from 'react-router'
import { connect } from 'react-redux'
import { handleShipMentInfo } from '../../redux/actions/userActions'
import { resetColor } from '../../redux/actions/otherAction'
import './Order.css' 


const Order = (props) => {


    const history = useHistory() 

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


    // console.log(props.color.totalNumberOfColor);
    const totalNumberOfColor = props.color.totalNumberOfColor
    const totalPrice = props.color.totalPrice 
    const colors = props.color.colors ;
    const userUid = props.user.userAllInformation.uid 

    const handleSubmit = (e) => {
        e.preventDefault();
        if(shipment.name !=='' && shipment.phone !=='' && shipment.location !=='' && shipment.card_number !=='' ){
            props.handleShipMentInfo( colors , userUid , shipment.name , shipment.phone , shipment.location,shipment.card_number , totalNumberOfColor , totalPrice)
            props.resetColor() 
            setShipment({
                name : '' , 
                phone : '' , 
                location : '' ,
                card_number : '' , 
                message : ''
            })
            history.push('/thanks')
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


const mapStateToProps = (state) => {
    return ({
        user : state.user , 
        color : state.color 
    })
}

export default connect(mapStateToProps , {
    handleShipMentInfo : handleShipMentInfo ,
    resetColor : resetColor 
})(Order)
