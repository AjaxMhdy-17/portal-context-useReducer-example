import React , {useState} from 'react'

import { Link } from 'react-router-dom'

const Register = (props) => {

    const [user , setUser] = useState({
        displayName : '' , 
        email : '' , 
        password : '',
        message : '' ,
    })

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
        // console.log(user.displayName);
        // console.log(user.email);
        // console.log(user.password);
        if(user.displayName === '' || user.email === '' || user.password===''){
            setUser({
                ...user , 
                message : 'All field must be filled with required information'
            })
        }
        else{
            props.handleSignIn(user.displayName , user.email , user.password)
        }
    }


    console.log(props);

    return (
        <div>
            <div className="form__full">
                <h3>Register Here</h3>
                {user.message?<p>{user.message}</p> : null}
                {props.errorMessage?<p>{props.errorMessage}</p>:null}
                <form onSubmit={handleSubmit}>
                    <div className="form__field">
                        <input 
                            type="text" 
                            placeholder='enter name'
                            name='displayName'
                            value={user.displayName}
                            onChange={handleChange}
                        />
                    </div>
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
                        
                        className='signIn__button'>
                            sign in 
                        </button>
                        <button 
                        onClick={props.signInWithGoogle}
                        className='signGoogle'>
                            sign with google 
                        </button>
                    </div>
                </form>
                <div className="to__register_login">
                    <Link to='/login'>
                        have a account , login here 
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Register
