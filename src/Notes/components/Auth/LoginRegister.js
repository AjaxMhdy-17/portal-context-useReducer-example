import React  , {useState , useEffect} from 'react'


import { connect } from 'react-redux'

import FormInput from '../CustomComponents/InputField'
import Button from '../CustomComponents/Button'
import Firebase, { Database } from '../../firebase/Firebase'

import {createUser , loginUser , getCurrentUserStatus } from '../../actions/userActions'



const LoginRegister = (props) => {


    const [user , setUser] = useState({
        displayName : '' , 
        email : '' ,
        password : '' ,
        register : false  , 
        message : '' , 
        photo : ''
    })



    useEffect(() => {
        // props.getCurrentUserStatus() 
    },[])
 
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
        if(user.register === true){
            if(user.displayName === '' || user.email === '' || user.password===''){
                waring('All field must be filled with required information')
            }
            else{
                const userData = {
                    displayName : user.displayName,
                    email : user.email , 
                    password : user.password , 
                    photo : user.photo
                }
                props.createUser(userData)
                resetAll()
            }
        }
        else{
            if(user.email === '' || user.password===''){
                waring('All field must be filled with required information')
            }
            else{

                const userData = {
                    displayName : user.displayName,
                    email : user.email , 
                    password : user.password , 
                    photo : user.photo
                }


                props.loginUser(userData)
                resetAll()

            }
        }
    }

    const toggleForm = () => {
        setUser({
            ...user , 
            displayName : '' , 
            email : '' ,
            password : '' ,
            register : !user.register
        })
    }

    const resetAll = () => {
        setUser({
            ...user , 
            message : '',
            displayName : '' , 
            email : '' ,
            password : '' ,
            photo : '' 
        })
    }

    const waring = (val) => {
        setUser({
            ...user , 
            message : val
        })
    }


    console.log(props);

   

    return (
        <>
            {/* <h3>hwllo {props.user.user}</h3>
                    <h4></h4> */}
    
                    <div className="user__form">
                            {props.user.message === '' ? (null) : <p>{props.user.message}</p>}
                            <form onSubmit={handleSubmit}>
                                {
                                    user.register && <FormInput 
                                    type='text' 
                                    placeholder = 'displayName'
                                    handleChange={handleChange}
                                    name='displayName'
                                    value={user.displayName}
                                    />
                                }
                                <FormInput
                                    type='email'
                                    placeholder='email'
                                    handleChange={handleChange}
                                    name='email'
                                    value={user.email}
                                />
                                <FormInput
                                    type='text'
                                    placeholder='password'
                                    handleChange={handleChange}
                                    name='password'
                                    value={user.password}
                                />
                                {
                                    user.register && <FormInput
                                        type='text'
                                        placeholder='copy image url from anywhere in internet and paste url here'
                                        handleChange={handleChange}
                                        name='photo'
                                        value={user.photo}
                                    />
                                }
                                <Button>
                                    {user.register ? 'register' : 'login'}
                                </Button>
                                
                            </form>
                            {

                                <span
                                onClick={toggleForm}
                                >
                                    <Button>
                                        {user.register ? 'already have account ? login here' : 'register for a new account'}
                                    </Button>
                                </span>
                            }
                        </div>
        </>
    )
}


const mapStateToProps = (state,ownProps) => {
    return({
        user : state.user
    }) ;
}

export default connect(mapStateToProps ,{
    createUser  : createUser ,
    loginUser : loginUser ,
    getCurrentUserStatus : getCurrentUserStatus , 
    
})(LoginRegister)
