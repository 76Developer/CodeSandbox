import "./styles.css";
import React from "react";

const title = "React Starter";

export default function App() {
  return (
    <div className="App">
      <h1>{title}</h1>
      <Search />
    </div>
  );
}

const Search = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <div>
        <input type="text" id="search" onChange={handleChange} />
        <input type="button" id="searchButton" value="Search" />
      </div>
      <div>Searching for: {searchTerm}</div>
    </div>
  );
};
