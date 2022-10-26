import React from "react";
import { WPCOMSite } from "../../apis/wpCOM";

// Components

import Button from "../Button";

class Home extends React.Component {
    state = { searchPostsTerm: "gustavohilario.com", posts: [] };

    componentDidMount() {
        this.searchPosts(this.state.searchPostsTerm);
    }

    onSearchPostChange = (e) => {
        this.setState({ searchPostsTerm: e.target.value });
    };

    onWPComPostsSearch = (e) => {
        e.preventDefault();
        // console.log(this.state.searchPostsTerm);

        this.searchPosts(this.state.searchPostsTerm);
    };

    // Using WordPress.com API to search posts made on the site the user provided
    searchPosts = async (site) => {
        const posts = await WPCOMSite.get(`/${site}/posts`)
            .then((response) => {
                this.setState({ posts: response.data.posts });
            })
            .catch((err) => {
                window.alert(
                    "Something went wrong!\n\n" +
                        "Make sure you enter the correct URL of your WordPress.com site \n\n" +
                        err
                );
            });
    };

    onWPComPostsRender = () => {
        if (this.state.posts.length > 0) {
            return this.state.posts.map((post) => {
                return (
                    <div key={post.ID} className="col-md-4">
                        <div className="card mb-5">
                            {/* <img src="..." className="card-img-top" alt="..."> */}
                            <div className="card-body">
                                <div
                                    className="post-card-overlay"
                                    style={{
                                        boxShadow:
                                            "inset 0 0 0 1000px rgba(0,0,0,.2)",
                                    }}
                                >
                                    <h4
                                        className="card-title px-5 fw-bold"
                                        dangerouslySetInnerHTML={{
                                            __html: post.title,
                                        }}
                                    ></h4>
                                </div>
                                <p
                                    className="card-text fw-light"
                                    dangerouslySetInnerHTML={{
                                        __html: post.excerpt,
                                    }}
                                ></p>
                                <div className="text-center">
                                    <a
                                        href={post.URL}
                                        className="btn btn-primary fw-bolder"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            });
        } else {
            return (
                <div className="text-center fs-3 fw-bold">
                    <p>Loading ...</p>
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            );
        }
    };

    render() {
        return (
            <div className="container-fluid">
                <h1 className="display-5 text-center fw-semibold">
                    Find WordPress.com Posts
                </h1>

                {/* Controlling Search Post Submit */}
                <form className="mb-5" onSubmit={this.onWPComPostsSearch}>
                    <div className="d-flex justify-content-center mt-4 gap-4">
                        <div className="w-50 mr-5">
                            {/* Changing state when typing on the form  */}
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your WordPress.com site here"
                                aria-label="Enter your WordPress.com site here"
                                onChange={this.onSearchPostChange}
                            />
                        </div>
                        <div className="">
                            <button className="btn btn-primary" type="submit">
                                Find my Posts
                            </button>
                        </div>
                    </div>
                </form>

                <div className="row">
                    <h3>
                        {this.state.posts.length > 0 ? (
                            <div>
                                Showing posts for{" "}
                                <span className="fw-bolder">
                                    {this.state.searchPostsTerm}
                                </span>
                            </div>
                        ) : (
                            ""
                        )}
                    </h3>
                    {this.onWPComPostsRender()}
                </div>
            </div>
        );
    }
}

export default Home;
