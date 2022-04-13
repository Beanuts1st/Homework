import "./style.css";
import Input from "@mui/material/Input";
const SearchBar = ({ handleSubmit, handleChange }) => {
  return (
    <div className="App-search">
      <form onSubmit={handleSubmit}>
        <Input
          style={{
            backgroundColor: "white ",
            borderRadius: "10px",
          }}
          placeholder="Tap here to search"
          onChange={handleChange}
        ></Input>
        <Input
          style={{
            marginLeft: "10px",
            backgroundColor: "white ",
            borderRadius: "10px",
          }}
          type="submit"
          onChange={handleSubmit}
        ></Input>
      </form>
    </div>
  );
};

export default SearchBar;
