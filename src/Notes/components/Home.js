import React, { Component } from 'react'

import { Switch , Route } from 'react-router-dom'



import './Home.css' 


import HowTo from './HowTo/HowTo'
import Posts from './Posts/Posts'
import Auth from './Auth/Auth'


export class Home extends Component {

    componentDidMount(){
       
        // Database.on('value',(snapshot) => {
        //     console.log(snapshot.val());
        // })
    }

    componentDidUpdate(){
        // console.log(this.props.posts.notes);
        // console.log(this.state.isEdit);
    }


    


    render() {


    
        // const hey = _.map(this.props.posts.notes,(value,key) => {
        //     return(
        //         <div key={key}>
        //             {value.title}
        //             <h3>{value.description}</h3>
        //         </div>
        //     )
        // })


        // console.log(hey);

        return (
            <div className=''>
                
                    <Switch>
                        <Route exact path='/'>
                            <HowTo/>
                        </Route>
                        <Route exact path='/posts'>
                            <Posts/>
                        </Route>
                        <Route exact path='/auth'>
                            <Auth/>
                        </Route>
                    </Switch>
                
            </div>
        )
    }
}




export default Home
