import "./style.css";
const CreatePlaylist = ({ list, handleChange, handleSubmit }) => {
  return (
    <div className="create-playlist">
      <h1> Create Playlist</h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2>Title</h2>
          <input
            className="playlist-title"
            type="text"
            placeholder="Insert Playlist Title"
            name="title"
            minLength="10"
            value={list.title}
            onChange={handleChange}
          />
          <h2>Description</h2>
          <textarea
            cols="30"
            rows="10"
            className="playlist-description"
            placeholder="Insert Playlist Description"
            name="description"
            value={list.description}
            onChange={handleChange}
          />
          <br />
          <br />
          <input
            className="playlist-submit"
            type="submit"
            value="Create Playlist"
          />
        </form>
      </div>
    </div>
  );
};

export default CreatePlaylist;
