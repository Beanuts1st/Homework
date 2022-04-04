import "./info/style.css";
const Content = ({ album_type, album_name }) => {
  return (
    <div className="album-header">
      <p>{album_type}</p>
      <p>{album_name}</p>
    </div>
  );
};

export default Content;
