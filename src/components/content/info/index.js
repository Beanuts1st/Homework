import "./style.css";
const Info = ({ url, name, release_date, total_tracks }) => {
  return (
    <div className="album-info">
      <a className="App-link" href={url}>
        {name}
      </a>{" "}
      . {release_date} . {total_tracks} Lagu
    </div>
  );
};

export default Info;
