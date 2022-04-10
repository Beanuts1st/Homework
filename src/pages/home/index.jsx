import axios from "axios";
import { useState } from "react";
import Content from "../../components/content";
import Action from "../../components/content/action";
import Image from "../../components/content/img";
import Info from "../../components/content/info";
import "./style.css";
import SearchBar from "../searchbar/";
import CreatePlaylist from "../../components/playlist/";
import { useSelector } from "react-redux";
import LogIn from "../../components/loginControl";

const Home = () => {
  const [search, setSearch] = useState("");
  const [tracks, setTracks] = useState([]);
  const [selected, setSelected] = useState([]);
  const [playlist, setPlaylist] = useState({
    title: "",
    description: "",
  });

  const token = useSelector((state) => state.token.token);

  const HandleSelected = (uri) => {
    const alreadySelected = selected.find((selectedUri) => selectedUri === uri);
    alreadySelected
      ? setSelected(selected.filter((selectedUri) => selectedUri !== uri))
      : setSelected([...selected, uri]);
  };

  const handleAddPlaylist = async (e) => {
    e.preventDefault();
    axios
      .get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        axios
          .post(
            `https://api.spotify.com/v1/users/${res.data.id}/playlists`,
            {
              name: playlist.title,
              description: playlist.description,
              public: false,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((res) => {
            axios.post(
              `https://api.spotify.com/v1/playlists/${res.data.id}/tracks`,
              { uris: selected },
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            alert("Playlist created");
          });
      });
  };

  const getTracks = (search) => {
    axios
      .get(`https://api.spotify.com/v1/search`, {
        headers: { Authorization: `Bearer ${token}` },
        params: { q: search, type: "track,artist" },
      })
      .then((res) => {
        const item = res.data.tracks.items;
        console.log(item);
        setTracks(item);
      });
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handlePlaylistChange = (e) => {
    const { name, value } = e.target;
    setPlaylist({ ...playlist, [name]: value });
  };

  return (
    <>
      <div className="App-topwrapper">
        <div className="App-header">
          <SearchBar
            handleSubmit={(e) => {
              getTracks(search);
              e.preventDefault();
            }}
            handleChange={handleChange}
          />
        </div>
        <div>
          <CreatePlaylist
            list={playlist}
            handleChange={handlePlaylistChange}
            handleSubmit={handleAddPlaylist}
          />
        </div>
      </div>
      <div className="App-contentwrapper">
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
      </div>
    </>
  );
};

export default Home;
