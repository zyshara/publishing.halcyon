import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <div className="background"/>
        <div id="background-overlay"/>
        <App/>
    </React.StrictMode>,
    document.getElementsByTagName("body")[0]
);
