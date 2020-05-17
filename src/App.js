import React, { useState } from "react";

import useFetch from "./hooks/useFetch";

import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";

import "./App.css";

function App() {
  const [mutants] = useFetch("https://jsonplaceholder.typicode.com/users");

  const [searchVal, setSearchVal] = useState("");

  const filteredMutants = mutants.filter((mutant) =>
    mutant.name.toLowerCase().includes(searchVal.toLowerCase())
  );

  const handleSearchChange = (newVal) => {
    setSearchVal(newVal);
  };

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox value={searchVal} onChange={handleSearchChange} />
      {filteredMutants.length > 0 && <CardList data={filteredMutants} />}
      {filteredMutants.length === 0 && (
        <h2>There are no mutants matching that name!!!</h2>
      )}
    </div>
  );
}

export default App;
