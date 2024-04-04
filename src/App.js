import { Route, Routes, useNavigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import { Root } from "./pages/Root.js";
import Home from "./pages/Home.js";
import ContactUs from "./pages/ContactUs.js";
import { Dashboard } from "./pages/Dashboard.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTokenDuration } from "./helpers/getTokenDuration.js";
import { logout } from "./helpers/logout.js";
import { loginActions } from "./store/login-slice.js";
import { Products } from "./pages/Products.js";
import { PageNotFound } from "./pages/PageNotFound.js";

function App() {
  const { token } = useSelector((state) => state?.log);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const { duration, token } = getTokenDuration();

    dispatch(loginActions.loggedIn(token));
    if (duration) {
      setTimeout(() => {
        logout();
        navigate("/");
      }, duration);
    }
  }, [token, navigate, dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        {token && <Route path="/dashboard" element={<Dashboard />} />}
        {token && <Route path="/products" element={<Products />} />}
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
