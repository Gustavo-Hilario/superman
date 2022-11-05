import React from "react";

const ContentHeader = (props) => {
    return (
        <div className="content-header">
            <div className={`content-title ${props.titleClasses}`}>
                {props.title}
            </div>
            <hr className="hr-short" />
            <div className="author-box d-flex justify-content-center align-content-center fw-bold">
                <p
                    className="text-center"
                    style={{
                        borderRight: "3px solid var(--text-color)",
                        paddingRight: "10px",
                        marginBottom: "0",
                    }}
                >
                    {props.author}
                </p>
                <p
                    className="author-role"
                    style={{
                        paddingLeft: "10px",
                        marginBottom: "0",
                    }}
                >
                    {props.authorRole}
                </p>
            </div>
            <hr className="hr-short" />
        </div>
    );
};

export default ContentHeader;
