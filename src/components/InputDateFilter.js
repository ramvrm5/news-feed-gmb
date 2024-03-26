import React, { useState } from "react";
import moment from "moment";

// REDUCER && REDUX COMPONENT
import { useDispatch } from "react-redux";
import { inputDate } from "../reducer/filterSlice";

const InputDateFilter = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const dispatch = useDispatch();

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    dispatch(
      inputDate({
        inputDate: moment(event.target.value).format("YYYY MMMM Do"),
      })
    );
  };

  return (
    <input
      type="date"
      value={selectedDate}
      onChange={handleDateChange}
      className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
    />
  );
};

export default InputDateFilter;
