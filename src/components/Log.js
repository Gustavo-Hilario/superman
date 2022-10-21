import React from "react";

class Log extends React.Component {
    state = { isSignedIn: null };

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

                        // Add a listener that will return a function whenever the authentication state change
                        this.onAuthChange(this.auth.isSignedIn.get());

                        this.auth.isSignedIn.listen(this.onAuthChange);
                    });
            }
        );
    }

    onAuthChange = (isSignedIn) => {
        this.setState({ isSignedIn: isSignedIn });
    };

    onGoogleSignIn = () => {
        // return console.log("I Clicked on the Button");
        this.auth.signIn();
    };

    onGoogleSignOut = () => {
        this.auth.signOut();
    };

    renderGoogleAuthButton = () => {
        if (this.state.isSignedIn === null) {
            return;
        } else if (!this.state.isSignedIn) {
            return (
                <div className="btn btn-primary" onClick={this.onGoogleSignIn}>
                    Google Sign In
                </div>
            );
        } else {
            return (
                <div className="btn btn-danger" onClick={this.onGoogleSignOut}>
                    Google Sign Out
                </div>
            );
        }
    };

    render() {
        return (
            <div className="container-fluid">
                {this.renderGoogleAuthButton()}
            </div>
        );
    }
}

export default Log;
