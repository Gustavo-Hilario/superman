import React, { useState } from "react";
import { Link } from "react-router-dom";

import GoogleLog from "./GoogleLog";

// User redux to consume UserInfo information
import { connect } from "react-redux";
import { fetchUserInfo } from "../actions";

class Header extends React.Component {
    // Helper functions to Render the entire header with renderHeader()
    renderBranding = () => {
        if (this.props.userInfo === null) {
            var col = "col-md-6";
        } else {
            var col = "col-md-3";
        }
        return (
            <div className={`${col} site-branding`}>
                <div className="d-flex justify-content-center align-items-center mb-3">
                    <div className="site-logo">
                        <Link to="/">
                            <img
                                src="/images/superman.png"
                                style={{
                                    width: "100px",
                                    height: "100px",
                                }}
                            />
                        </Link>
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
        );
    };

    // This could use some enhacement. I'm not sure how I could conditionally add the <GoogleLog> component in the menu
    renderMenu = () => {
        if (this.props.userInfo === null) {
            return (
                <div className="site-menu col-md-6 d-flex justify-content-center">
                    <Link to="/" className="pe-3">
                        Home
                    </Link>
                    <Link to="/wpcom" className="pe-3">
                        WordPress.com
                    </Link>
                    <GoogleLog />
                </div>
            );
        } else {
            return (
                <div className="site-menu col-md-6 d-flex justify-content-center">
                    <Link to="/" className="pe-3">
                        Home
                    </Link>
                    <Link to="/wpcom" className="pe-3">
                        WordPress.com
                    </Link>
                </div>
            );
        }
    };

    renderMyAccount = () => {
        if (this.props.userInfo === null) {
            return;
        } else {
            return (
                <div className="my-account-header col-md-3 d-flex justify-content-center align-items-center gap-3 ">
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
                            className="rounded-circle profile-img"
                            width="48px"
                            height="48px"
                        />
                    </Link>
                    <GoogleLog />
                </div>
            );
        }
    };

    renderHeaderUser = () => {
        return (
            <div className="row align-items-center">
                {this.renderBranding()}
                {this.renderMenu()}
                {this.renderMyAccount()}
            </div>
        );
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
