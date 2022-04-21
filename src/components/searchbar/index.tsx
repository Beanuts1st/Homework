import "./style.css";
import Input from "@mui/material/Input";

interface Props {
  handleSubmit(event: React.FormEvent<HTMLFormElement>) : void;
  handleChange(event: React.ChangeEvent<HTMLInputElement>): void;
}
const SearchBar = ({ handleSubmit, handleChange }:Props) => {
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
        ></Input>
      </form>
    </div>
  );
};

export default SearchBar;
