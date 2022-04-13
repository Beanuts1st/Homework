import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../redux/tokenSlice";
import url from "../autorization";
import Button from "@mui/material/Button";

const LogIn = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.token);
  useEffect(() => {
    const getQueryParams = (string) => {
      const queries = string.substring(1).split("&");
      const finalObj = {};
      queries.forEach((query) => {
        const arr = query.split("=");
        if (arr.length > 1) finalObj[arr[0]] = arr[1];
      });
      return finalObj;
    };
    const query = getQueryParams(window.location.hash);
    const queryHash = query.access_token;
    if (queryHash) {
      dispatch(getToken(queryHash));
    }
  }, [dispatch, token]);

  const logout = () => {
    dispatch(getToken(""));
  };
  return (
    <>
      {!token ? (
        <Button href={url} variant="contained" color="success">
          Login Spotify UI
        </Button>
      ) : (
        <>
          <Button href="/" onClick={logout} variant="contained">
            Log Out
          </Button>
        </>
      )}
    </>
  );
};

export default LogIn;
