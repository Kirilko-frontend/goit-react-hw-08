import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          marginRight: 15,
          color: isActive ? "yellow" : "white",
          textDecoration: "none",
          fontWeight: "bold",
        })}
      >
        Home
      </NavLink>
      <NavLink
        to="/contacts"
        style={({ isActive }) => ({
          color: isActive ? "yellow" : "white",
          textDecoration: "none",
          fontWeight: "bold",
        })}
      >
        Contacts
      </NavLink>
    </nav>
  );
}
