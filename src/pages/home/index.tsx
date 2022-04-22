import axios from "axios";
import React, { useState } from "react";
import "./style.css";
import SearchBar from "../../components/searchbar";
import CreatePlaylist from "../../components/playlist";
import { useSelector } from "react-redux";
import LogIn from "../../components/isLogIn";
import Card from "../../components/card";
import { selectToken } from "../../components/redux/tokenSlice";
import { Item } from "../../initialize/playlist";

const Home = () => {
  const [search, setSearch] = useState("");
  const [tracks, setTracks] = useState([]);
  const [selected, setSelected] = useState<Item[]>([]);
  const [playlist, setPlaylist] = useState({
    title: "",
    description: "",
  });
  const token = useSelector(selectToken);

  console.log(selected);
  
  const HandleSelected = (uri:Item) => {
    const alreadySelected = selected.find((selectedUri) => selectedUri === uri);
    alreadySelected
      ? setSelected(selected.filter((selectedUri) => selectedUri !== uri))
      : setSelected([...selected, uri]);
  };
  const handleAddPlaylist = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
            const uriSelected = selected.map((item) => item.uri);      
            axios.post(
              `https://api.spotify.com/v1/playlists/${res.data.id}/tracks`,
              { uris: uriSelected },
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

  const getTracks = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .get(`https://api.spotify.com/v1/search`, {
        headers: { Authorization: `Bearer ${token}` },
        params: { q: search, type: "track" },
      })
      .then((res) => {
        setTracks(res.data.tracks.items);
        
      });
  };
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
  };
  const handlePlaylistChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setPlaylist({ ...playlist, [name]: value });
  };

  return (
    <>
      <div className="App-header">
        <LogIn />
        <SearchBar
          searchItem={(event) => {
            getTracks(event);
          }}
          handleChange={handleChange}
        />
      </div>
      {tracks.length > 0 ? (
        <div className="App-contentwrapper">
          <CreatePlaylist
            list={playlist}
               handleChange={handlePlaylistChange}
            handleSubmit={handleAddPlaylist}
          />
          <div className="parent-card">
            {tracks.map((uri:Item) => {
              const isSelected = selected.find(
                (selectedUri) => selectedUri === uri
              );
              console.log(isSelected);
              return (
                <Card
                  key={uri.id}
                  album_type={uri.album.album_type}
                  album_name={uri.album.name}
                  name={uri.album.artists[0].name}
                  url={uri.album.images[0].url}
                  handleClick={() => HandleSelected(uri)}
                  isSelected={isSelected ? "deselect" : "select"}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <div className="App-footer"></div>
      )}
    </>
  );
};

export default Home;
