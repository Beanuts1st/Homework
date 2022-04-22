import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getToken, selectToken } from "../redux/tokenSlice";
import url from "../autorization";
import Button from "@mui/material/Button";

const LogIn = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(selectToken);

  useEffect(() => {
    let token = window.localStorage.getItem("token");
    const getQueryParams = window.location.hash;
    if (getQueryParams) {
      token = getQueryParams
        .substring(1)
        .split("&")
        .find((token) => token.startsWith("access_token"))
        .split("=")[1];
    }
    dispatch(getToken(token));
    window.localStorage.setItem("token", token);
  }, [dispatch, isLogin]);

  const logout = () => {
    dispatch(getToken(""));
    window.localStorage.setItem("token", "");
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
