import React from "react";

import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

// Components

import Home from "./Home";
import Shop from "./Shop";
import Header from "./Header";

const Navigation = (props) => {
    return (
        <div>
            <Router history={history}>
                <Header></Header>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/shop" exact component={Shop} />
                </Switch>
            </Router>
        </div>
    );
};

export default Navigation;
