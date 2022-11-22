import React from "react";

// Redux Form
// By importing this some props are added to the component including HandleSubmit
import { reduxForm, Field } from "redux-form";

// Action Creator → Handling form submission
// import { createMyList } from "../actions";

class ListForm extends React.Component {
    componentDidMount() {
        console.log(this.props);
    }

    // Rendering the Components that will replace the Field Components
    renderFieldInput = ({ input, label, meta, type, id }) => {
        // console.log(this.props);
        const className = {
            container: "mb-3",
            label: "form-label fw-bolder",
            input: "form-control form-control-lg",
        };

        var renderFieldType = (className, type, id) => {
            if (type === "text") {
                return (
                    <input
                        id={id}
                        type={type}
                        className={className.input}
                        autoComplete="off"
                    />
                );
            } else if (type === "textarea") {
                return (
                    <textarea
                        id={id}
                        type={type}
                        className={className.input}
                        autoComplete="off"
                    />
                );
            }
        };

        var renderError = (meta) => {
            if (meta.touched && meta.error) {
                return (
                    <div className="field-error-message">
                        <div className="">{meta.error}</div>
                    </div>
                );
            }
        };

        // renderError({ error, touched }) {
        //     if (touched && error) {
        //         return (
        //             <div className="ui error message">
        //                 <div className="header">{error}</div>
        //             </div>
        //         );
        //     }
        // }

        return (
            <div className={className.container}>
                <label className={className.label} htmlFor={id}>
                    {label}
                </label>
                {renderFieldType(className, type, id)}
                {renderError(meta)}
            </div>
        );
    };

    onFormSubmit = (formValues) => {
        // redux-form helps making sure the code below runs and no event handling would be necessary
        // e.preventDefault();

        console.log(formValues);
        this.props.onSubmit(formValues);
    };

    render() {
        return (
            <div>
                <h3 className="text-center">ListForm Component</h3>
                <div className="d-flex justify-content-center">
                    {/* handleSubmit is a function/props that comes from the redux-form library */}

                    <form
                        className="w-75"
                        onSubmit={this.props.handleSubmit(this.onFormSubmit)}
                    >
                        <Field
                            name="noteSubject"
                            component={this.renderFieldInput}
                            label="Subject"
                            type="text"
                            id="my-field"
                            placeholder="First Name"
                        />

                        <Field
                            name="noteContent"
                            component={this.renderFieldInput}
                            label="Content"
                            type="textarea"
                            id="noteContent"
                        />
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

const validate = (formValues) => {
    // console.log(formValues);
    const errors = {};

    if (!formValues.noteSubject) {
        errors.title = "You must enter a Subject";
    }

    if (!formValues.noteContent) {
        errors.title = "Enter the content!!";
    }

    return errors;
};

export default reduxForm({ form: "listForm", validate })(ListForm);
