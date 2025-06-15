import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.auth.user.name);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <p style={{ margin: 0, color: "white" }}>Hello, {userName}</p>
      <button onClick={handleLogout} style={{ cursor: "pointer" }}>
        Logout
      </button>
    </div>
  );
}
