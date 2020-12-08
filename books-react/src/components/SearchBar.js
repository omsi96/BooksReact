import { SearchBarStyled } from "../styledComponents/SearchBarStyled";

export const SearchBar = ({ setQuery }) => (
  <SearchBarStyled
    placeholder="Search for a book name"
    onChange={(event) => {
      setQuery(event.target.value);
      console.log(("Query", event.target.value));
    }}
  />
);
