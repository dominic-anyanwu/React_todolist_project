// import the react and reactdom libraries
import React from "react";
import ReactDoM from "react-dom";

import App from './App';



// Take the react component and show it on the browser
ReactDoM.render(
    <App />, document.querySelector('#root')
);