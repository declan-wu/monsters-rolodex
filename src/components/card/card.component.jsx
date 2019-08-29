import React from "react";
import "./card.style.css";

export const Card = ({ monster, id }) => (
  <div className="card-container">
    <img alt="monster" src={`https://robohash.org/${id}?set=set2`}></img>
    <h1> {monster.name} </h1>
    <h2> {monster.email} </h2>
  </div>
);
