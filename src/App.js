import axios from "axios";
import { useState } from "react";
import "./App.css";
import Content from "./components/content";
import Action from "./components/content/action";
import url from "./components/content/autorization";
import Image from "./components/content/img";
import Info from "./components/content/info";
// import data from "./constants/albums";

function App() {
  const [search, setSearch] = useState("");
  const [tracks, setTracks] = useState([]);
  function getQueryParams(string) {
    const queries = string.substring(1).split("&");
    const finalObj = {};
    queries.forEach((query) => {
      const arr = query.split("=");
      if (arr.length > 1) finalObj[arr[0]] = arr[1];
    });
    return finalObj;
  }
  const query = getQueryParams(window.location.hash);
  console.log(query);
  console.log(search);
  const handleSubmit = (search) => {
    axios
      .get(`https://api.spotify.com/v1/search`, {
        headers: { Authorization: `Bearer ${query.access_token}` },
        params: { q: search, type: "track,artist", limit: 12 },
      })
      .then((res) => {
        const item = res.data.tracks.items;
        console.log(item);
        setTracks(item);
      });
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-search">
          <input
            placeholder="Search Track or Artist"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          <input
            type="submit"
            value="Search"
            onClick={() => {
              handleSubmit(search);
            }}
          />
        </div>
        <div className="App-login">
          <a href={url}>login</a>
        </div>

        <div className="parent-card">
          {tracks.map((e) => (
            <div className="card" key={e.id}>
              <Content
                album_type={e.album.album_type}
                album_name={e.album.name}
              />
              <Info
                url={e.album.artists[0].external_urls.spotify}
                name={e.album.artists[0].name}
                release_date={e.album.release_date}
                total_tracks={e.album.total_tracks}
              />
              <Image url={e.album.images[0].url} />
              <Action
                urlAlbum={e.album.external_urls.spotify}
                urlLyric={e.external_urls.spotify}
              />
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
