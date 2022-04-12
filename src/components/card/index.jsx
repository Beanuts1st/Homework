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
      <div className="card-header">
        <img src={url} alt="img" />
      </div>
      <div className="card-content">
        <ul>
          <li>
            <h3>{album_type}</h3>
          </li>
          <li>
            <h4>{name}</h4>
          </li>
          <li>
            <h4>{album_name}</h4>
          </li>
          <li>
            <button className="btn select" onClick={handleClick}>
              {isSelected}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
