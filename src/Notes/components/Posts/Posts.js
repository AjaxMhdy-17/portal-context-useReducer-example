import React, { Component } from 'react'

import {Link}  from 'react-router-dom'
import {connect} from 'react-redux'
import _ from 'lodash' 
import FormInput from '../CustomComponents/InputField'
import Button from '../CustomComponents/Button'
import singlePost from './singlePost'
import {
    saveNotes , getNotes ,
    clearNotes , updateNotes , 
    deleteNotes , getYourNotes , 
    getUserList , 
} from '../../actions/notesActions'

import {logoutUser} from '../../actions/userActions'

import Firebase from '../../firebase/Firebase'
import {Database} from '../../firebase/Firebase'

import './Posts.css'
import '../Home.css'


class Posts extends Component {


    state = {
        userId : '' , 
        title : '' , 
        description : '' , 
        message : '' , 
        isEdit : false , 
        key : '' , 
        photo : '' , 
        all : false , 
        your : false , 
    }



    getAllPosts = () =>{
        this.setState({
            ...this.state , 
            all : true , 
            your : false , 
           
        })
    }

    getYourPosts = () =>{
        this.setState({
            ...this.state , 
            all : false  , 
            your : true , 
           
        })
    }

    getAllUserList = () => {
        this.setState({
            ...this.state , 
            allUser : true , 
            all : false , 
            your : false 
        })
    }

    removeAlert = () => {
        setTimeout(() => {
            this.setState({
                ...this.state , 
                message : '' 
            })
        },3000)
    }


    handleChange = (e) => {
        e.preventDefault() ;
        const name = e.target.name ;
        const value = e.target.value  

        this.setState({
            [name] : value 
        })
    }

    changeEdit = (uid , key) => {
        
        console.log(uid);
        console.log(key);

        const val = this.props.posts.notes[uid][key]

        this.setState({
            ...this.state , 
            userId : uid , 
            isEdit : true , 
            title : val.title , 
            description : val.description , 
            photo : val.photo , 
            key : key
        })

    }

    handleSubmit = (e) => {
        e.preventDefault();

        
        if(this.state.isEdit){

            const note = {
                title : this.state.title , 
                description : this.state.description , 
                photo : this.state.photo
            }

            // console.log(this.props.posts.user);
            // console.log(this.state.key);

            const uid = this.state.userId ; 
            const key = this.state.key ;

            this.props.updateNotes(uid , key , note)
            this.setState({
                title : '' , 
                description : '' , 
                photo : '' , 
                isEdit : false , 
                key : null , 
                userId : '' 
            })
        }
        else{
            const title = this.state.title 
            const description = this.state.description

            if( title === '' || description === '' ){
                this.setState({
                    ...this.state , 
                    message : 'please fill up all fields' 
                })
                this.removeAlert() 
            }
            else{
                const post = {
                    uid :  this.props.posts.user.uid , 
                    author : this.props.posts.user.user , 
                    date : new Date().toLocaleTimeString(),
                    title : this.state.title , 
                    description : this.state.description ,
                    photo : this.state.photo
                }
                this.props.saveNotes(this.props.posts.user.uid,post)
                this.setState({
                    ...this.state , 
                    title : '' , 
                    description : '' ,
                    message : 'post submitted' , 
                    photo : ''
                })
                
            }
        }
    }


    componentDidMount(){
        console.log(this.props);
    }

    componentDidUpdate(){
        // console.log(this.props.posts.notes.userList);
        console.log(this.state.allUser);
    }

    render() {

        const allPosts = Object.keys(this.props.posts.notes).map(userId => {
            // console.log(userId);
            // console.log(this.props.posts.notes[userId]);
            return Object.keys(this.props.posts.notes[userId]).map(key => {
                const value = this.props.posts.notes[userId][key]
                    return(
                        <div key={key}>
                            <div className="post__card">
                                <div className="post__card__content">
                                    <h3>{value.title}</h3>
                                    <h4>
                                        {value.author}
                                        <br />
                                        <small>{value.date}</small>
                                    </h4>
                                    <p>{value.description}</p>
                                    {
                                        this.props.posts.user.user == value.author ? (
                                            <div className="user_control_buttons">
                                                <button
                                                    onClick={() => {
                                                        this.changeEdit(userId , key)
                                                    }}
                                                    className='blue'
                                                >
                                                    edit
                                                </button>
                                                <button
                                                    onClick={() => this.props.deleteNotes(key , this.props.posts.user.uid)}
                                                    className='red'
                                                >
                                                    delete
                                                </button>
                                            </div>
                                        ) : (null)
                                    }
                                </div>
                            </div>
                        </div>
                    )                
            })
        })


        const yourPost = Object.keys(this.props.posts.notes).map(userId => {
            // console.log(userId);
            // console.log(this.props.posts.notes[userId]);
            return Object.keys(this.props.posts.notes[userId]).map(key => {
                const value = this.props.posts.notes[userId][key]

                    if( value.uid === this.props.posts.user.uid){
                        return(
                            <div key={key}>
                            <div className="post__card">
                                <div className="post__card__content">
                                    <h3>{value.title}</h3>
                                    <h4>
                                        {value.author}
                                        <br />
                                        <small>{value.date}</small>
                                    </h4>
                                    <p>{value.description}</p>
                                   
                                    <div className="user_control_buttons">
                                        <button
                                            onClick={() => {
                                                this.changeEdit(userId , key)
                                            }}
                                            className='blue'
                                        >
                                            edit
                                        </button>
                                        <button
                                            onClick={() => this.props.deleteNotes(key , this.props.posts.user.uid)}
                                            className='red'
                                        >
                                            delete
                                        </button>
                                    </div>
                                        
                                </div>
                                </div>
                            </div>
                        )             
                    }else{
                        return null ;
                    }   
            })
        })

        return (
            <div className='full__page'>
                <div className="left__side">
                <div className="user__avatar"></div>
                    <div>
                        <div className="user__form">
                            {this.state.message === '' ? (null) : <p>{this.state.message}</p>}
                            <form onSubmit={this.handleSubmit}>
                                <FormInput 
                                    type='text' 
                                    placeholder = 'title'
                                    handleChange={this.handleChange}
                                    name='title'
                                    value={this.state.title}
                                />
                                <FormInput
                                    type='textarea'
                                    placeholder='description'
                                    handleChange={this.handleChange}
                                    name='description'
                                    value={this.state.description}
                                />
                                <FormInput
                                    type='file'
                                    handleChange={this.handleChange}
                                    name='photo'
                                    value={this.state.photo}
                                />
                                <Button>
                                    {this.state.isEdit ? 'edit' : 'post'}
                                </Button>
                            </form>
                        </div>
                        <div>
                            <span
                                onClick={() => {
                                    this.props.getNotes()
                                    this.getYourPosts()
                                }}
                            >
                                <Button>
                                    get your posts
                                </Button>
                            </span>
                            <span
                                onClick={() => {
                                    this.props.getNotes()
                                    this.getAllPosts() 
                                }}
                            >
                                <Button>
                                    get all posts
                                </Button>
                            </span>
                            <span>
                                <Link to='/auth'>
                                    <Button>
                                        your profile
                                    </Button>
                                </Link>
                            </span>
                            <span
                                onClick={this.props.logoutUser}
                            >
                                <Link to='auth'>
                                    <Button>
                                        logout
                                    </Button>
                                </Link>
                            </span>
                            <span
                                onClick={this.props.clearNotes}
                            >
                                <Button>
                                    clear
                                </Button>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="right__side">
                    <div className="all_notes">
                      
                        {this.state.all && allPosts} 
                        {this.state.your && yourPost} 
                        {/* {
                            <div>
                                {this.state.all ? (
                                    <div className='post__list'>
                                        <h2 className="all__post__heading">
                                            all posts 
                                        </h2>
                                        {allPosts}
                                    </div>
                                ) : (
                                    <div className='post__list'>
                                        <h2 className="all__post__heading">
                                            your posts
                                        </h2>
                                        {yourPost}
                                    </div>
                                )}
                            </div>
                        } */}                        
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return({
        posts : state
    })
}


export default connect(
    mapStateToProps,
    { 
        saveNotes: saveNotes , 
        getNotes : getNotes , 
        getYourNotes : getYourNotes , 
        clearNotes : clearNotes , 
        updateNotes : updateNotes , 
        deleteNotes : deleteNotes , 
        logoutUser : logoutUser , 
        getUserList : getUserList 
    }
    )(Posts)

