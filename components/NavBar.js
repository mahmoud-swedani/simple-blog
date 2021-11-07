import React from "react";
import Link from "next/link";

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
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
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link href="/" className="nav-item">
                <a className="nav-link active" aria-current="page">
                  Home
                </a>
              </Link>
              <Link href="/blog" className="nav-item">
                <a className="nav-link">Blog</a>
              </Link>
              <Link href="/about" className="nav-item">
                <a className="nav-link ">About</a>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
