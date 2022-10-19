import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <div className="site-footer container-fluid p-5 fs-4">
                <div className="row">
                    <div className="col-md-4 text-center">
                        Navigation Footer
                    </div>
                    <div className="col-md-4 text-center">Location</div>
                    <div className="col-md-4 text-center">
                        Contact Info + Social Links
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
