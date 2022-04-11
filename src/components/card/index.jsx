import "./style.css";
const Card = ({
  album_type,
  album_name,
  name,
  release_date,
  total_tracks,
  urla,
  url,
  urlAlbum,
  urlLyric,
  handleClick,
  isSelected,
}) => {
  return (
    <div className="card">
      <div className="album-header">
        <p>{album_type}</p>
        <p>{album_name}</p>
      </div>
      <div className="album-info">
        <a className="App-link" href={urla}>
          {name}
        </a>{" "}
        . {release_date} . {total_tracks} Lagu
      </div>
      <img className="song-image" src={url} alt="img" />;
      <div className="tombol">
        <a href={urlAlbum}>
          <button className="btn">album</button>
        </a>
        <a href={urlLyric}>
          <button className="btn lyric">lyric</button>
        </a>
      </div>
      <button className="btn select" onClick={handleClick}>
        {isSelected}
      </button>
    </div>
  );
};

export default Card;
