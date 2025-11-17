import React, { useState } from "react";
import { characters } from "./data/characters";
import CharacterList from "./components/CharacterList";
import "./App.css";

export default function App() {
  const [selectedId, setSelectedId] = useState(null);

  const selectedCharacter = characters.find((c) => c.id === selectedId);

  return (
    <div className="app">
      <header>
        <h1 className="title">MARVEL SELECT</h1>
        <p className="subtitle">Elige tu héroe</p>
      </header>

      <CharacterList
        characters={characters}
        selectedId={selectedId}
        onSelect={setSelectedId}
      />

      {selectedCharacter && (
        <div className="selected-info">
          <h2 style={{ color: selectedCharacter.color }}>
            {selectedCharacter.name}
          </h2>
          <p>{selectedCharacter.description}</p>
        </div>
      )}
    </div>
  );
}
