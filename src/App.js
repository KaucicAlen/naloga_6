import React, { ChangeEvent } from "react";
import "./styles.css";
import data from "./data";

export default function App() {
  const [search, setSearch] = React.useState("");

  const handleChangeName = (e) => {
    setSearch(e.target.value);
  };

  const players = data;
  const byName = players.filter(
    (iskan) =>
      iskan.name.includes(search.charAt(0).toUpperCase() + search.slice(1)) ||
      iskan.nationality.includes(
        search.charAt(0).toUpperCase() + search.slice(1)
      ) ||
      iskan.year_of_birth.toString().includes(search)
  );

  return (
    <div className="App">
      <h1>TEST 6 - React (part 2)</h1>

      <ol>
        <li>
          Add an input to filter the names. They can be filtered by name, year
          of birth or nationality
        </li>
        <li>
          When hovering a line the background of the hovered line should change.
          Like this:
          <img src="/ezgif-3-3c53e4bba14f.gif" alt="" />
        </li>
        <li>
          Add a onClick event on every element to print out the name with an
          alert when clicking on a line
        </li>
      </ol>
      <br />
      <br />

      <label> Search for player: </label>
      <input type="text" onChange={handleChangeName} />

      <ul>
        {byName.map((el) => (
          <li
            key={el.name}
            className="item"
            onClick={() => alert("My name is " + el.name)}
          >
            {el.name} - {el.year_of_birth} - {el.nationality}
          </li>
        ))}
      </ul>
    </div>
  );
}
