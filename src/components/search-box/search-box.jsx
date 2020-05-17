import React, { useEffect } from "react";

import useInput from "../../hooks/useInput";

import "./search-box.css";

const SearchBox = (props) => {
  const { type, value, onChange, className, placeholder } = props;

  //extrapolated input value/onChange hook
  const [searchVal, onSearchChange] = useInput(value);

  //trigger onChange event on props
  useEffect(() => {
    onChange(searchVal);
  }, [searchVal, onChange]);

  //what properties should be on our input item?
  const inputProps = {
    type: type || "search",
    value: searchVal,
    onChange: onSearchChange,
    className: className || "search",
    placeholder: placeholder || "Search Monsters...",
  };

  return <input {...inputProps} />;
};

export default SearchBox;
