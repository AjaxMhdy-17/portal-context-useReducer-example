import './Button.css'

const Button = (props) => {

    return(
        <button className='butt'>
            {props.children}
        </button>
    )
}

export default Button ;