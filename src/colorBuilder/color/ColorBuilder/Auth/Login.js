import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import './Register.css' 
import { connect } from 'react-redux'
import { signInWithGoogle , handleLogin } from '../../redux/actions/userActions'
import { useHistory } from 'react-router'              

const Login = (props) => {

    const [user , setUser] = useState({
        email : '' , 
        password : '' 
    })

    const history = useHistory()     

    const handleChange= (e) => {
        e.preventDefault() ;
        const name = e.target.name ;
        const value = e.target.value ;
        setUser({
            ...user , 
            [name] : value 
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault() ;
        // console.log(user.email);
        // console.log(user.password);
    }

    const errorMessage = (
        <div>
            {props.errorMessage}
        </div>
    )

    console.log(props.user);
    if(props.user.isLoggedIn === true){
        history.push('/')
    }

    return (
        <div>
            <div className="form__full">
                <h3>Login Here</h3>
                {props.user.message !== null ? props.user.message : null }
                <form onSubmit={handleSubmit}>
                    <div className="form__field">
                        <input 
                            type="text" 
                            placeholder='enter email'
                            name='email'
                            value={user.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form__field">
                        <input 
                            type="text" 
                            placeholder='enter password'
                            name='password'
                            value={user.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="signIn__buttons">
                        <button 
                        onClick={() => {
                            props.handleLogin(user.email , user.password)
                        }}
                        className='signIn__button'>
                            log in 
                        </button>
                        <button 
                        onClick={props.signInWithGoogle}
                        className='signGoogle'>
                            sign with google 
                        </button>
                    </div>
                    
                </form>
                <div className="to__register_login">
                    <Link to='/register'>
                        don't have a account , register here 
                    </Link>
                </div>
            </div>
        </div>
    )

}

const mapStateToProps = (state) => {
    return({
        state : state , 
        user : state.user
    })
}

export default connect(mapStateToProps , {
    signInWithGoogle : signInWithGoogle ,
    handleLogin : handleLogin 
})(Login)
