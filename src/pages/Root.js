import React, { useEffect } from "react";
import styles from "../styles/root.module.css";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../store/login-slice";
import { logout } from "../helpers/logout";

export function Root() {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.log);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home");
    }
  }, [navigate,location]);

  const logoutHandler = () => {
    logout();
    dispatch(loginActions.logout());
    navigate("/");
  };

  return (
    <div className={styles.main_container}>
      <navbar className={styles.navbar}>
        <ul className={styles.navbar_items}>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? "active-navlink" : "")}
            >
              Home
            </NavLink>
          </li>
          {token && (
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? "active-navlink" : "")}
              >
                Dashboard
              </NavLink>
            </li>
          )}
          {token && (
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) => (isActive ? "active-navlink" : "")}
              >
                Products
              </NavLink>
            </li>
          )}
          <li>
            <NavLink
              to="/contact-us"
              className={({ isActive }) => (isActive ? "active-navlink" : "")}
            >
              Contact US
            </NavLink>
          </li>
        </ul>
        <div className={styles.auth_button_container}>
          {token ? (
            <button className={styles.button} onClick={logoutHandler}>
              Logout
            </button>
          ) : (
            <button
              className={styles.button}
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </button>
          )}
        </div>
      </navbar>
      {<Outlet />}

      <footer className={styles.footer}>
        <p>&copy; 2024 Your Company</p>
        <p>
          <a href="/">Privacy Policy</a> | <a href="/">Terms of Service</a>
        </p>
      </footer>
    </div>
  );
}
