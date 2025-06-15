import { NavLink } from "react-router-dom";

export default function AuthNav() {
  return (
    <nav>
      <NavLink
        to="/register"
        style={{ marginRight: 15, color: "white", textDecoration: "none" }}
      >
        Register
      </NavLink>
      <NavLink to="/login" style={{ color: "white", textDecoration: "none" }}>
        Login
      </NavLink>
    </nav>
  );
}
