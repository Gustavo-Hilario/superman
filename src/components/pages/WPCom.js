import React from "react";

import { WPCOMAuth } from "../../apis/wpCOM";

const clientId = 81668;
const clientSecret =
    "62sRrYEaiaGXMMYqldOXvmM3ApnYP6wVRmTSINwX3hYvNqTYgrwdQpeRdmlFR20z";
const redirectUrl = "http://localhost:3000/";
const scope = "global";

class WPCom extends React.Component {
    WPComAPI = async () => {
        const response = await WPCOMAuth.post("/", null, {
            client_id: clientId,
            redirect_uri: redirectUrl,
            client_secret: clientSecret,
            code: "code",
            grant_type: "authorization_code",
        })
            .then(() => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    render() {
        return (
            <div className="container-fluid">
                <h1 className="display-4 text-center fw-semibold">
                    WordPress.com API
                </h1>
                <button className="btn btn-primary" onClick={this.WPComAPI}>
                    WordPress.com
                </button>
            </div>
        );
    }
}

export default WPCom;
