import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

// REDUX
import reducers from "./reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
// Importing Redux thunk …
// This should help with returning functions from actions creators

// Redux Thunk is middleware that allows you to return functions, rather than just actions, within Redux. This allows for delayed actions, including working with promises.
import reduxThunk from "redux-thunk";

// Here we need to connect reducters to the store const that will be added to the Provider component
const store = createStore(reducers, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector("#root")
);
