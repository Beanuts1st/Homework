import { fireEvent, render, screen } from "@testing-library/react";
import SearchBar from "../components/searchbar";

it("searchBar component", () => {
  render(<SearchBar />);
  const searchInput = screen.queryByPlaceholderText("Tap here to search");
  const btnsearch = screen.queryByTestId("searchbtn");
  expect(searchInput).toBeTruthy();
  expect(btnsearch).toBeTruthy();
});

describe("input value", () => {
  it("update on change", () => {
    render(<SearchBar />);
    const searchInput = screen.queryByPlaceholderText("Tap here to search");
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(searchInput.value).toBe("test");
  });
});

describe("Search Button", () => {
  describe("with empty query", () => {
    it("does not trigger requestSearch function", () => {
      const searchItem = jest.fn();
      render(<SearchBar searchItem={searchItem} />);
      const btnsearch = screen.queryByTestId("searchbtn");
      fireEvent.click(btnsearch);
      expect(searchItem).not.toHaveBeenCalled();
    });
  });

  describe("with data inside query", () => {
    it("trigger requestSearch function", () => {
      const searchItem = jest.fn();
      render(<SearchBar searchItem={searchItem} handleChange={searchItem} />);
      const searchInput = screen.queryByPlaceholderText("Tap here to search");
      fireEvent.change(searchInput, { target: { value: "test" } });
      const btnsearch = screen.queryByTestId("searchbtn");
      fireEvent.click(btnsearch);
      expect(searchItem).toHaveBeenCalled();
    });
  });
});
