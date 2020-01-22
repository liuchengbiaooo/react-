import {BrowserRouter} from "react-router-dom"
import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import store from "./store/index"
import App from "./App"
import "./mock/mockServer"

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'))