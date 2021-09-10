import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore , applyMiddleware } from 'redux'
import rootReducer from './redux/reducers/rootReducer'
import All from './All/All'

const store = createStore(rootReducer , applyMiddleware(thunk)) 

function Index() {
    return (
        <div>
            <Provider store={store}>
                <Router>
                    <All/>
                </Router>
            </Provider>
        </div>
    )
}

export default Index
