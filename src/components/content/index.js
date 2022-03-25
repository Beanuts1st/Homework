import data from "../../albums/data";
import Action from "./action";
import Image from "./img";
import Info from "./info";
import "./style.css";

const Content = () => {
  const action = {
    urlAlbum: data.album.external_urls.spotify,
    urlLyric: data.album.external_urls.spotify,
  };
  return (
    <div className="album-type">
      {data.album.type}
      <div className="album-name">{data.album.name}</div>
      <Info
        url={data.album.artists[0].external_urls.spotify}
        name={data.album.artists[0].name}
        release_date={data.album.release_date}
        total_tracks={data.album.total_tracks}
      ></Info>
      <Image url={data.album.images[0].url} />
      <Action
        // urlAlbum={data.album.external_urls.spotify}
        // urlLyric={data.album.external_urls.spotify}
        {...action}
      />
    </div>
  );
};

export default Content;
