import React from "react";

import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

// Components

import Home from "./pages/Home";
import WPCom from "./pages/WPCom";
import MyList from "./pages/MyList";
import MyAccount from "./pages/MyAccount";
import Header from "./Header";

const Navigation = (props) => {
    return (
        <div>
            <Router history={history}>
                <Header></Header>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/wpcom" exact component={WPCom} />
                    <Route path="/mylist" exact component={MyList} />
                    <Route path="/my-account" exact component={MyAccount} />
                </Switch>
            </Router>
        </div>
    );
};

export default Navigation;
