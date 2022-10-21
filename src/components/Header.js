import React, { useState } from "react";
import { Link } from "react-router-dom";

import GoogleLog from "./GoogleLog";

// User redux to consume UserInfo information
import { connect } from "react-redux";
import { fetchUserInfo } from "../actions";

class Header extends React.Component {
    renderHeaderUser = () => {
        console.log(this.props.userInfo);
        if (this.props.userInfo === null) {
            return (
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="site-logo row justify-content-center mb-3">
                            Site Logo
                        </div>
                    </div>
                    <div className="site-menu col-md-6 d-flex justify-content-center">
                        <Link to="/" className="pe-3">
                            Home
                        </Link>
                        <Link to="/shop" className="pe-3">
                            My Shop
                        </Link>
                        <GoogleLog />
                    </div>
                </div>
            );
        } else {
            return (
                <div className="row align-items-center">
                    <div className="col-md-3">
                        <div className="site-logo row justify-content-center mb-3">
                            Site Logo
                        </div>
                    </div>
                    <div className="site-menu col-md-6 d-flex justify-content-center">
                        <Link to="/" className="pe-3">
                            Home
                        </Link>
                        <Link to="/shop" className="pe-3">
                            My Shop
                        </Link>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center align-items-center gap-3 ">
                        {/* Getting Google Profile image from Google! It was necessary to add the referrerpolicy property. I was getting as 403 error */}
                        <p className="mb-0 fw-semibold">
                            {this.props.userInfo.UserName.split(" ")[0]}
                        </p>
                        <Link to="/my-account">
                            <img
                                src={this.props.userInfo.UserProfilePhoto}
                                referrerPolicy="no-referrer"
                                className="rounded-circle"
                                width="48px"
                                height="48px"
                            />
                        </Link>
                        <GoogleLog />
                    </div>
                </div>
            );
        }
    };

    render() {
        return (
            <div className="site-header row d-flex text-center px-4 py-4 fs-4">
                {this.renderHeaderUser()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.auth.userInfo,
    };
};

export default connect(mapStateToProps, { fetchUserInfo })(Header);
