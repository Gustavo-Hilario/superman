import React from "react";

// Components
import ListForm from "../ListForm";

// Connecting Redux
import { connect } from "react-redux";

// Action creator
import { createMyList } from "../../actions";

class MyList extends React.Component {
    onListFormSubmit = (formValues) => {
        // redux-form helps making sure the code below runs and no event handling would be necessary
        // e.preventDefault();

        this.props.createMyList(formValues);
    };

    render() {
        return (
            <div>
                <h1 className="text-center">MyList Component</h1>
                <ListForm onSubmit={this.onListFormSubmit} />
            </div>
        );
    }
}

export default connect(
    null,
    /**should be between brackets { } **/ { createMyList }
)(MyList);
