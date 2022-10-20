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
                        this.auth.isSignedIn.listen(this.onAuthChange);

                        this.onAuthChange(this.auth.isSignedIn.get());
                    });
            }
        );
    }

    onAuthChange = (isSignedIn) => {
        // if (!isSignedIn) {
        //     console.log(this.props);
        // } else {
        //     console.log(this.props);
        // }
    };

    onGoogleSignIn = async () => {
        // return console.log("I Clicked on the Button");
        await this.auth.signIn();

        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    };

    onGoogleSignOut = async () => {
        await this.auth.signOut();

        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    };

    renderGoogleAuthButton = () => {
        if (!this.state.isSignedIn || this.state.isSignedIn === null) {
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
