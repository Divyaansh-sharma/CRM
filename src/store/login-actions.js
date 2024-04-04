import { loginActions } from "./login-slice";

export const loginUser = ({ username, password }) => {
  return async (dispatch) => {
    dispatch(loginActions.loggingIn());

    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error("user Authentication failed!");
      }
      const data = await response.json();
      return data;
    };

    try {
      const data = await fetchData();
      dispatch(loginActions.loggedIn(data.token));
    } catch (error) {
      dispatch(
        loginActions.showErrorNotification("username or password is incorrect.")
      );
    }
  };
};
