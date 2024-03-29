import React from "react";
import { Link, useNavigate } from "react-router-dom";

function UserHeader() {
    const navigate = useNavigate();
    const handleLogoutClick = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        navigate("/");
    };
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <h2>Blogzzy</h2>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarTogglerDemo02"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    aria-current="page"
                                    to="/user"
                                >
                                    Home Page
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/user/newpost">
                                    New Post
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/user/mypost">
                                    My Posts
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/user/suggestions"
                                >
                                    Check Suggestions
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/user/profile">
                                    Edit Profile
                                </Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <button
                                onClick={handleLogoutClick}
                                className="btn btn-outline-primary"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default UserHeader;
