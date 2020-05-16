import React from "react";

import useFetch from "./hooks/useFetch";

import "./App.css";

function App() {
  const [mutants, setUrl] = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div className="App">
      {mutants.map((mutant) => (
        <li key={mutant.id}>{mutant.name}</li>
      ))}
    </div>
  );
}

export default App;
