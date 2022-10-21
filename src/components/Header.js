import React, { useState } from "react";
import { Link } from "react-router-dom";

import GoogleLog from "./GoogleLog";

// User redux to consume UserInfo information
import { connect } from "react-redux";
import { fetchUserInfo } from "../actions";

class Header extends React.Component {
    renderHeaderUser = () => {
        if (this.props.userInfo === null) {
            return (
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="site-branding d-flex justify-content-center align-items-center mb-3">
                            <div className="site-logo">
                                <img
                                    src="/images/superman.png"
                                    style={{ width: "100px", height: "100px" }}
                                />
                            </div>
                            <div className="">
                                <div className="site-title fw-bolder">
                                    <Link to="/">Superman</Link>
                                </div>
                                <div className="site-tagline fs-6 fw-semibold">
                                    This is my awesome site!
                                </div>
                            </div>
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
                        <div className="site-branding d-flex justify-content-center align-items-center mb-3">
                            <div className="site-logo">
                                <img
                                    src="/images/superman.png"
                                    style={{ width: "100px", height: "100px" }}
                                />
                            </div>
                            <div className="">
                                <div className="site-title fw-bolder">
                                    <Link to="/">Superman</Link>
                                </div>
                                <div className="site-tagline fs-6 fw-semibold">
                                    This is my awesome site!
                                </div>
                            </div>
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
                        <Link to="/my-account">
                            <p className="mb-0 fw-semibold">
                                {this.props.userInfo.UserName.split(" ")[0]}
                            </p>
                        </Link>
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
