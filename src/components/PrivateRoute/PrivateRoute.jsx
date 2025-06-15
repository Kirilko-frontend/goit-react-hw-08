import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRoute({ component: Component }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isRefreshing = useSelector((state) => state.auth.isRefreshing);

  if (isRefreshing) {
    return <p>Loading...</p>;
  }

  return isLoggedIn ? <Component /> : <Navigate to="/login" replace />;
}
