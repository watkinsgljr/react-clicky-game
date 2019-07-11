import React from "react";
import "./style.css";

function PlayerCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.position}
          </li>
          <li>
            <strong>Location:</strong> {props.team}
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default PlayerCard;
