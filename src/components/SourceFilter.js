import React, { useState } from "react";

// REDUCER && REDUX COMPONENT
import { useDispatch } from "react-redux";
import { source } from "../reducer/filterSlice";

const SourceFilter = () => {
  const [selectedSource, setSelectedSource] = useState("all");
  const dispatch = useDispatch();

  const handleSourceChange = (event) => {
    setSelectedSource(event.target.value);
    dispatch(
      source({
        source: event.target.value,
      })
    );
  };
  return (
    <select
      className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
      value={selectedSource}
      onChange={handleSourceChange}
    >
      <option value="all">All</option>
      <option value="OpenNews">Open News</option>
      <option value="The Guardian">The Guardian</option>
      <option value="The New York Times">New York Times</option>
    </select>
  );
};

export default SourceFilter;
