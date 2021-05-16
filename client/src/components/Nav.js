import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="nav-wrapper"style={{backgroundColor: "deepskyblue"}}>
        <a href="/" className="brand-logo">
          Google Books
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/">Search</Link>
          </li>
          <li>
            <Link to="/Saved">Saved</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
