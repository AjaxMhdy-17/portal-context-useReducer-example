import React , {useState , useRef} from 'react'
import Input from '../../UI/Input'


import classes from './MealItemForm.module.css' 

function MealItemForm(props) {

    const [amountIsValid , setAmountIsValid] = useState(true)
    const amountInputRef = useRef() 

    const handleSubmit = (e) => {
        e.preventDefault() 
        const enteredAmount = amountInputRef.current.value
        props.addItemToCart(enteredAmount)
    }

    return (
        <>
            <form className={classes.form} onSubmit={handleSubmit}>
            <Input
                ref={amountInputRef}
                label = 'Amount'
                input={{
                    id : 'amount' , 
                    type : 'number', 
                    min : '1' , 
                    max : '5' , 
                    step : '1' , 
                    defaultValue : '1'
                }}
            />
            <button>+ Add</button>
        </form>
        </>
    )
}

export default MealItemForm
