import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function RestrictedRoute({ component: Component }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isRefreshing = useSelector((state) => state.auth.isRefreshing);

  if (isRefreshing) {
    return <p>Loading...</p>;
  }

  return isLoggedIn ? <Navigate to="/contacts" replace /> : <Component />;
}
