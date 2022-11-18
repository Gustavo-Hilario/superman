import React from "react";

// Components
import ListForm from "../ListForm";

class MyList extends React.Component {
    render() {
        return (
            <div>
                <h1 className="text-center">MyList Component</h1>
                <ListForm />
            </div>
        );
    }
}

export default MyList;
