import React from "react";
import { Link } from "react-router-dom";

import GoogleLog from "./GoogleLog";

const Header = (props) => {
    return (
        <div className="site-header row d-flex text-center px-4 py-4 fs-4">
            <div className="site-logo row justify-content-center mb-3">
                Site Logo
            </div>
            <div className="site-menu row">
                <div>
                    <Link to="/" className="pe-3">
                        Home
                    </Link>
                    <Link to="/shop" className="pe-3">
                        My Shop
                    </Link>
                    <GoogleLog />
                </div>
            </div>
        </div>
    );
};

export default Header;
