const Content = ({ album_type, album_name }) => {
  return (
    <div className="album-header">
      {album_type}
      <div>{album_name}</div>
    </div>
  );
};

export default Content;
