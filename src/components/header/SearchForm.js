import { useState } from "react";
import "./SearchForm.css";

const SearchForm = ({ onMenuFilter }) => {
  const [searchInput, setSearchInput] = useState("");
  const changeSearchHandler = (event) => {
    setSearchInput(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (searchInput.trim().length > 0) {
      onMenuFilter(searchInput);
      setSearchInput("");
    }
  };

  return (
    <form className="search-form" onSubmit={formSubmitHandler}>
      <input
        type="search"
        value={searchInput}
        className="search-form__input"
        placeholder="Search..."
        onChange={changeSearchHandler}
      />
    </form>
  );
};

export default SearchForm;
