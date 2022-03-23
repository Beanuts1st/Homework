import "./App.css";
import data from "./albums/data.js";

function App() {
  console.log(data.album.artists[0].external_urls);
  return (
    <div className="App">
      <header className="App-header">
        <div className="Card">
          <ul>
            <li>{data.album.type}</li>
            <li>
              <h3>{data.album.name}</h3>
            </li>
            <li>
              <a
                className="App-link"
                href={data.album.artists[0].external_urls.spotify}
              >
                {data.album.artists[0].name}
              </a>{" "}
              . {data.album.release_date} . {data.album.total_tracks} Lagu
            </li>
          </ul>
          <img src={data.album.images[0].url} className="App-logo" alt="logo" />
          <br></br>

          <a href={data.album.external_urls.spotify}>
            <button className="btn">Album</button>
          </a>
          <a href={data.external_urls.spotify}>
            <button className="btn lirik">Lyric</button>
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
