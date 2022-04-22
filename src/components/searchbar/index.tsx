import "./style.css";
import Input from "@mui/material/Input";

interface Props {
  searchItem(event: React.FormEvent<HTMLFormElement>) : void;
  handleChange(event: React.ChangeEvent<HTMLInputElement>): void;
}
const SearchBar = ({ searchItem, handleChange }:Props) => {
  return (
    <div className="App-search">
      <form onSubmit={searchItem}>
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
          data-testid="searchbtn"
          value="Go !!"
        ></Input>
      </form>
    </div>
  );
};

export default SearchBar;
