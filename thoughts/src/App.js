// import media and styling
import './App.css';

// import modules
import React, { useState } from "react";
import { AddThoughtForm } from "./AddThoughtForm.js";
import { Thought } from "./Thought";
import { generateId, getNewExpirationTime } from "./utilities";

export default function App() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: "This is a place for your passing thoughts.",
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  function addThought(thought) {
    setThoughts((prevThoughts) => [thought, ...prevThoughts]);
  }

  function removeThought(thoughtIdToRemove) {
    setThoughts((prevThoughts) =>
      prevThoughts.filter((thought) => thought.id !== thoughtIdToRemove)
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Passing Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought} />
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought
              key={thought.id}
              thought={thought}
              removeThought={removeThought}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}