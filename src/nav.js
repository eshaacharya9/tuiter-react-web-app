import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav nav-tabs mb-2">
      <NavLink className="nav-link" to="/labs/a3">
        A3
      </NavLink>
      <NavLink className="nav-link" to="/labs/a4">
        A4
      </NavLink>
      <NavLink className="nav-link" to="/hello">
        Hello
      </NavLink>
      <NavLink className="nav-link" to="/tuiter">
        Tuiter
      </NavLink>
    </nav>
  );
}

export default Nav;
