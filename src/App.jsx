import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ContactsPage from "./pages/ContactsPage";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector((state) => state.auth.isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) return <p>Refreshing user...</p>;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="register"
          element={<RestrictedRoute component={RegistrationPage} />}
        />
        <Route
          path="login"
          element={<RestrictedRoute component={LoginPage} />}
        />
        <Route
          path="contacts"
          element={<PrivateRoute component={ContactsPage} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
