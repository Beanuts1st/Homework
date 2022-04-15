import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../redux/tokenSlice";
import url from "../autorization";
import Button from "@mui/material/Button";

const LogIn = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.token.token);

  useEffect(() => {
    let auth = window.localStorage.getItem("auth");
    const getQueryParams = window.location.hash;
    if (getQueryParams) {
      auth = getQueryParams
        .substring(1)
        .split("&")
        .find((token) => token.startsWith("access_token"))
        .split("=")[1];
    }
    dispatch(getToken(auth));
    window.localStorage.setItem("auth", auth);
  }, [dispatch, isLogin]);

  const logout = () => {
    dispatch(getToken(""));
    window.localStorage.setItem("auth", "");
  };
  return (
    <>
      {!isLogin ? (
        <Button href={url} variant="contained" color="success">
          Login Spotify UI
        </Button>
      ) : (
        <>
          <Button onClick={logout} variant="contained">
            Log Out
          </Button>
        </>
      )}
    </>
  );
};

export default LogIn;
