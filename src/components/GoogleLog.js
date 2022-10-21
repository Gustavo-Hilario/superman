import React from "react";

// REDUX
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleLog extends React.Component {
    componentDidMount() {
        // Initializing Google Auth so it can be used later any time to authenticate users
        window.gapi.load(
            "client:auth2",
            /*callback function after auth2 loads */ () => {
                window.gapi.auth2
                    .init({
                        client_id:
                            "253405588288-v3bk5emgtlr1prpte36q6dssogi6jhr1.apps.googleusercontent.com",
                        scope: "email",
                        plugin_name: "superman",
                    })
                    .then(() => {
                        // Save GoogleAuth object as auth
                        this.auth = window.gapi.auth2.getAuthInstance();

                        // Get the auth state when the component mount
                        this.onAuthChange(this.auth.isSignedIn.get());

                        // Add a listener that will return a function whenever the authentication state change
                        this.auth.isSignedIn.listen(this.onAuthChange);
                    });
            }
        );
    }

    // Handle Actions that will change the log in state on our STORED
    // Once maptoStateProps functions is connect, it is also give us the functions to run the ACTION
    onAuthChange = (isSignedIn) => {
        // Modifying the auth state → Using the signIn and signOut functions from the actions that was connected to this component as props via mapStateToProps function
        if (isSignedIn) {
            return this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            return this.props.signOut();
        }
    };

    // Logging in with this.auth (Google Auth) whenever users hits the Sign In button
    onGoogleSignIn = () => {
        this.auth.signIn();
    };

    // Logging out with this.auth (Google Auth) whenever users hits the Sign Out button

    onGoogleSignOut = () => {
        this.auth.signOut();
    };

    // Rendering Google Sign In/Out buttons according to the current Login in state

    renderGoogleAuthButton = () => {
        if (this.props.isSignedIn === null) {
            return;
        } else if (!this.props.isSignedIn) {
            return (
                <a className="btn btn-primary" onClick={this.onGoogleSignIn}>
                    Google Sign In
                </a>
            );
        } else {
            return (
                <a className="btn btn-danger" onClick={this.onGoogleSignOut}>
                    Google Sign Out
                </a>
            );
        }
    };

    render() {
        // React Fragment will enclose JSX without creating a DOM Element – That might help sometimes when a <div> Like the one we had here is breaking the design
        return <React.Fragment>{this.renderGoogleAuthButton()}</React.Fragment>;
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn,
    };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleLog);
