import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Button } from "./components/Button";
import { Input } from "./components/Input";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Diana",
      last: "Prince",
    },
  ];

  return (
    <div className="App">
      <Greet name="Mark" messageCount={100} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading>Heading Text</Heading>
      <Oscar>
        <Heading>Heading Text</Heading>
      </Oscar>

      <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      />

      <Input value="" handleChange={(event) => console.log(event)} />
    </div>
  );
}

export default App;
