import "./App.css";
import Content from "./components/content";
import Action from "./components/content/action";
import Image from "./components/content/img";
import Info from "./components/content/info";
import data from "./constants/albums";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="parent-card">
          {data.map((e) => (
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
