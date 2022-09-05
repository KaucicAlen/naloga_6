import React, { ChangeEvent } from "react";
import "./styles.css";
import data from "./data.json";

export default function App() {
  const names = data.map((item, index) => (
    <li
      key={index}
      className="item"
    >{`${item.name} - ${item.year_of_birth} - ${item.nationality}`}</li>
  ));

  const [name, setName] = React.useState<string>("");
  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const iskani = names.filter((iskan) => names.name.includes(name));

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
        {iskani.map((el) => (
          <li key={el.name}>{el.name}</li>
        ))}
      </ul>
      <ul>{names}</ul>
    </div>
  );
}
