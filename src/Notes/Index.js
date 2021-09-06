import React, { Component } from 'react'




import {getCurrentUserStatus} from './actions/userActions'
import {getUserList} from './actions/notesActions'


import { BrowserRouter as Router} from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './components/Home'
import Header from './components/Header/Header'



export class Index extends Component {

    componentDidMount(){
        this.props.getCurrentUserStatus()
        this.props.getUserList() 
    }

    componentWillMount(){
        this.props.getCurrentUserStatus()
      
    }


    render() {
        
        return (
            
                <div>
                    <Router>
                        <Header/>
                        <Home/>
                    </Router>
                </div>
           
        )
    }
}

const mapStateToProps = (state , ownProps) => {
    return state ;
}


export default connect(mapStateToProps , {
    getCurrentUserStatus : getCurrentUserStatus , 
    getUserList : getUserList 
})(Index)
