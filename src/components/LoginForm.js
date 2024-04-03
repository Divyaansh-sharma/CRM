import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import styles from "../styles/loginform.module.css";
import { loginUser } from "../store/login-actions";
import { authentication } from "../helpers/authentication";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { token, isLoading, error } = useSelector((state) => state.log);

  console.log("isLoading", isLoading, "error", error, "token", token);

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      authentication(token);
      navigate("/dashboard");
    }
  }, [token, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ username, password }));
  };

  return (
    <div className={styles.login_form_container}>
      <div className={styles.login_form_subcontainer}>
        <h1>Log In</h1>
        {error?.isError && (
          <h3 className={styles.error_message}>{error.message}</h3>
        )}
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={styles.button} type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
