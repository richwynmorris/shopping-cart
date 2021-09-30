import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux"
import { Provider } from "react-redux"
import "./index.css";
import "./whitespace-reset.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import rootReducer from './reducers/rootReducer'
const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
