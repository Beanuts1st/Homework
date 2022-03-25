const Image = ({ url }) => {
  return (
    <div className="album-image">
      <img className="album-img" src={url} alt="img" />
    </div>
  );
};

export default Image;
