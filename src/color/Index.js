import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'

import All from './All/All'

function Index() {
    return (
        <div>
            <Router>
                <All/>
            </Router>
        </div>
    )
}

export default Index
