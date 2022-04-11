const SearchBar = ({ handleSubmit, handleChange }) => {
  return (
    <div className="App-search">
      <form onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          placeholder="Search..."
          name="search"
          onChange={handleChange}
        />
        <input type="submit" value="Search" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default SearchBar;
