import React, { useState } from "react";

// REDUCER && REDUX COMPONENT
import { useDispatch } from "react-redux";
import { searchInput } from "../reducer/filterSlice";

const SearchInputFilter = () => {
  const [searchInputText, setSearchInputText] = useState("");
  const dispatch = useDispatch();

  const handleSearchInputChange = (event) => {
    setSearchInputText(event.target.value.toLowerCase());
    dispatch(
      searchInput({
        searchInput: event.target.value.toLowerCase(),
      })
    );
  };

  return (
    <input
      type="text"
      onChange={handleSearchInputChange}
      value={searchInputText}
      className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none placeholder:text-gray-400"
      placeholder="Search News..."
    />
  );
};

export default SearchInputFilter;
