import React from "react";

class Sidebar extends React.Component {
    render() {
        return (
            <div
                className={`sidebar shadow ${this.props.colsize}`}
                style={{ backgroundColor: "var(--bg-color)" }}
            >
                <h1>Sidebar</h1>
            </div>
        );
    }
}

export default Sidebar;
