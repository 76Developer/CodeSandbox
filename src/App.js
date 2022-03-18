import "./styles.css";
import React from "react";

const title = "React Starter";

export default function App() {
  const [searchTerm, setSearchTerm] = React.useState("");

  const searchTerms = [
    {
      name: "test",
      id: 1
    },
    {
      name: "word",
      id: 2
    },
    {
      name: "garden",
      id: 3
    }
  ];

  const handleSearch = (event) => {
    console.log("handleSearch");
    setSearchTerm(event.target.value);
  };

  const searchedTerms = searchTerms.filter((search) =>
    search.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>{title}</h1>
      <Search onSearch={handleSearch} />
      <hr />
      <List list={searchedTerms} />
    </div>
  );
}

const List = (props) => {
  return props.list.map((item) => (
    <div key={item.id}>
      <span>{item.name}</span>
    </div>
  ));
};

const Search = (props) => {
  return (
    <div>
      <div>
        <input type="text" id="search" onChange={props.onSearch} />
        <input type="button" id="searchButton" value="Search" />
      </div>
      <div>Searching for: </div>
    </div>
  );
};
