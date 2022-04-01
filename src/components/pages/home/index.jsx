import axios from "axios";
import { useEffect, useState } from "react";
import Content from "../../content";
import Action from "../../content/action";
import url from "../../content/autorization";
import Image from "../../content/img";
import Info from "../../content/info";
import "../../../App.css";

const Home = () => {
  const [search, setSearch] = useState("ed sheeran");
  const [tracks, setTracks] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    getTracks(search);
  }, [search]);

  const HandleSelected = (uri) => {
    const alreadySelected = selected.find((selectedUri) => selectedUri === uri);
    if (alreadySelected) {
      const filteredTracks = selected.filter(
        (selectedUri) => selectedUri !== uri
      );
      setSelected(filteredTracks);
    } else {
      setSelected([...selected, uri]);
    }
  };

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

  const getTracks = (search) => {
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
              getTracks(search);
            }}
          />
        </div>
        <div className="App-login">
          <a href={url}>login</a>
        </div>
        <div className="parent-card">
          {tracks.map((e) => {
            const isSelected = selected.find(
              (selectedUri) => selectedUri === e.uri
            );
            return (
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
                <button
                  className="btn-select"
                  onClick={() => {
                    HandleSelected(e.uri);
                  }}
                >
                  {isSelected ? "deselect" : "select"}
                </button>
                <Action
                  urlAlbum={e.album.external_urls.spotify}
                  urlLyric={e.external_urls.spotify}
                />
              </div>
            );
          })}
        </div>
      </header>
    </div>
  );
};
export default Home;
