const Action = ({ urlAlbum, urlLyric }) => {
  return (
    <div>
      <a href={urlAlbum}>
        <button className="btn">album</button>
      </a>
      <a href={urlLyric}>
        <button className="btn lyric">lyric</button>
      </a>
    </div>
  );
};

export default Action;
