
import './App.css' ;

// import Index from './color/Index'
import Index from './Notes/Index'

import { Provider } from 'react-redux'
import { createStore  , applyMiddleware} from 'redux'
import {rootReducer} from './Notes/reducers/rootReducer'
import thunk from 'redux-thunk'

const store = createStore(rootReducer,applyMiddleware(thunk))



function App() {
  return (
    <Provider store={store}>
      <div className="container">
          <div className=""></div>
          <Index/>
      </div>
    </Provider>
  );
}

export default App;
