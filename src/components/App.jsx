import Loader from "./Loader/Loader.jsx";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectError } from "../redux/contacts/selectors.js";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout.jsx";
import HomePage from "../pages/HomePage/HomePage.jsx";
import ContactsPage from "../pages/ContactsPage/ContactsPage.jsx";
import LoginPage from "../pages/LoginPage/LoginPage.jsx";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage.jsx";
import { refreshUser } from "../redux/auth/operations";
import { PrivateRoute } from "../routes/PrivateRoute.jsx";
import { RestrictedRoute } from "../routes/RestrictedRoute.jsx";
import { selectIsRefreshing } from "../redux/auth/selectors.js";
import { Toaster } from "react-hot-toast";

function App() {
  const dispath = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispath(refreshUser());
  }, [dispath]);

  return isRefreshing ? (
    <Loader />
  ) : isError ? (
    <div>
      <h3>An error occurred. Refresh the page or go to Home page.</h3>
      <a href="/">Home Page</a>
    </div>
  ) : (
    <>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route
            path="register"
            element={
              <RestrictedRoute>
                <RegistrationPage />
              </RestrictedRoute>
            }
          ></Route>
          <Route
            path="login"
            element={
              <RestrictedRoute>
                <LoginPage />
              </RestrictedRoute>
            }
          ></Route>
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          ></Route>
          <Route path="*" element={<p>Page not found...</p>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
