import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { getToken } from "../../components/redux/tokenSlice";
import url from "../content/autorization";

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

  return (
    <>
      {!token ? (
        <a href={url}>
          <button className="login">Login Spotify</button>
        </a>
      ) : (
        <Redirect to="/home" />
      )}
    </>
  );
};

export default LogIn;
