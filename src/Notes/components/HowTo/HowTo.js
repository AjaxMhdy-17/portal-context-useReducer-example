import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import {updateNotes , deleteNotes} from '../../actions/notesActions'


import './HowTo.css' 

class AllPost extends Component {


    render() {

        const mainDocComponent = (
            <div className='main__doc'>
                <h3>this is simple blog</h3>
                <h5>author : ajax mhdy</h5>
                <div className="steps">
                    <ol>
                        <li>to register go to auth navigation option</li>
                        <li>after complete registration reload once</li>
                        <li> if registed before then press login option</li>
                        <li>after login choose your favorite option by click on the button</li>
                    </ol>
                </div>
            </div>
        )

        return (
            <div>
                {mainDocComponent}
            </div>
        )
    }
}

export default AllPost
