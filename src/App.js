import "./styles.css";
import React from "react";

const title = "React Starter";

const useSemiPersistentState = () => {
  const [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem("search") || "React"
  );

  React.useEffect(() => {
    console.log("Fired: " + searchTerm);
    localStorage.setItem("search", searchTerm);
  }, [searchTerm]);

  return [searchTerm, setSearchTerm];
};

export default function App() {
  const [searchTerm, setSearchTerm] = useSemiPersistentState();

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
    setSearchTerm(event.target.value);
  };

  const searchedTerms = searchTerms.filter((search) =>
    search.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>{title}</h1>
      <Search search={searchTerm} onSearch={handleSearch} />
      <hr />
      <List list={searchedTerms} />
    </div>
  );
}

const List = ({ list }) => list.map((item) => <Item key={item.id} {...item} />);

const Item = ({ id, name }) => (
  <div>
    <span>{id}:</span>
    <span>{name}</span>
  </div>
);

const Search = ({ search, onSearch }) => (
  <div>
    <div>
      <input type="text" id="search" value={search} onChange={onSearch} />
      <input type="button" id="searchButton" value="Search" />
    </div>
    <div>Searching for: {search}</div>
  </div>
);
