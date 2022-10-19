import React from "react";

// Components
import Navigation from "./Navigation";
import Footer from "./Footer";

import Button from "./Button";

// CSS
import "../css/index.css";

const App = (props) => {
    return (
        <div className="page-main">
            <Navigation></Navigation>
            <Footer></Footer>
        </div>
    );
};

export default App;
