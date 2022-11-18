import React from "react";

import { WPCOMAuth, wpcomConst } from "../../apis/wpCOM";

// Components

import Sidebar from "../Sidebar";
import ContentHeader from "../ContentHeader";

class WPCom extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <ContentHeader
                    title="WordPress.com API"
                    titleClasses="display-4 text-center fw-semibold"
                    author="Gustavo Hilario"
                    authorRole="Happiness Engineer"
                />
                <div className="row">
                    <div className="col-md-8">
                        <button className="btn btn-primary">
                            <a
                                href={`https://public-api.wordpress.com/oauth2/authorize?client_id=${wpcomConst.clientId}&redirect_uri=${wpcomConst.redirectUrl}&response_type=code&scope=${wpcomConst.scope}`}
                            >
                                WordPress.com Authentication
                            </a>
                        </button>
                    </div>
                    <Sidebar colsize="col-md-4" />
                </div>
            </div>
        );
    }
}

export default WPCom;
