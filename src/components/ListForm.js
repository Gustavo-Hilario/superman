import React from "react";

// Redux Form

import { reduxForm, Field } from "redux-form";

class ListForm extends React.Component {
    // Rendering the Components that will replace the Field Components
    renderFieldInput = ({ input, label, meta, type, id }) => {
        const className = {
            container: "mb-3",
            label: "form-label fw-bolder",
            input: "form-control",
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

        return (
            <div className={className.container}>
                <label className={className.label} htmlFor={id}>
                    {label}
                </label>
                {renderFieldType(className, type, id)}
            </div>
        );
    };

    render() {
        return (
            <div>
                <h3 className="text-center">ListForm Component</h3>
                <div className="d-flex justify-content-center">
                    <form className="w-75">
                        <Field
                            name="note-subject"
                            component={this.renderFieldInput}
                            label="Subject"
                            type="text"
                            id="my-field"
                        />

                        <Field
                            name="note-content"
                            component={this.renderFieldInput}
                            label="Content"
                            type="textarea"
                            id="note-content"
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

export default reduxForm({ form: "listForm" })(ListForm);
