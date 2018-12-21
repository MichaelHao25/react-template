import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import configureStore from "./store/configureStore";

import App from './components/App'


const store = configureStore();

const Hmr = () => <Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>
ReactDom.render(
    <Hmr />,
    document.getElementById('app')
)

if (module.hot) {
    module.hot.accept();
}
