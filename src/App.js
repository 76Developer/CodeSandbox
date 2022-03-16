import "./styles.css";

const title = "React Starter";

export default function App() {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="App">
      <h1>{title}</h1>
      <div>
        <input type="text" id="search" onChange={handleChange} />
        <input type="button" id="searchButton" value="Search" />
      </div>
    </div>
  );
}
