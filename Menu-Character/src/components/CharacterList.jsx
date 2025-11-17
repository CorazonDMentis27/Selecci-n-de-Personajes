import React from "react";
import CharacterCard from "./CharacterCard";
import "./CharacterList.css";

export default function CharacterList({ characters, selectedId, onSelect }) {
  return (
    <div className="character-grid">
      {characters.map((ch) => (
        <CharacterCard
          key={ch.id}
          character={ch}
          selected={selectedId === ch.id}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
