import React from "react";
import "./CharacterCard.css";

export default function CharacterCard({ character, selected, onSelect }) {
  return (
    <div
      className={`card ${selected ? "selected" : ""}`}
      onClick={() => onSelect(character.id)}
      style={{
        borderColor: selected ? character.color : "#333",
      }}
    >
      <img src={character.img} alt={character.name} className="card-img" />

      <div className="card-info">
        <h3 style={{ color: character.color }}>{character.name}</h3>
        <p>{character.description}</p>
      </div>
    </div>
  );
}
