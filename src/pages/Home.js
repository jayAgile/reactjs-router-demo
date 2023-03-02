import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <h1>Welcome</h1>
        {/* outlet used for nested rendering  */}
        <Outlet />
      </>
    );
  }
}
