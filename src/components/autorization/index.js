var client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
var redirect_uri = "https://witifyd.vercel.app/";
var scope = "playlist-modify-private";
var url = "https://accounts.spotify.com/authorize";
url += "?response_type=token";
url += "&client_id=" + encodeURIComponent(client_id);
url += "&scope=" + encodeURIComponent(scope);
url += "&redirect_uri=" + encodeURIComponent(redirect_uri);

export default url;
