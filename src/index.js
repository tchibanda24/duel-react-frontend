import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { Provider } from 'react-redux'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import App from './containers/App'
import userReducer from './ducks/user.duck'

// Styled-components have a built in way of adding global styling
const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    width: 100vw;
    background-color: #efefef;
    font-family: 'Fira Code', serif;
  }
`

// Because we only have one reducer in this example this isn't necessary here,
// however, this allows us to add any number of reducers and combine them here.
const rootReducer = combineReducers({
  user: userReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle/>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
