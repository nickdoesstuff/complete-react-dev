import React from "react";

import "./card.css";

const Card = (props) => {
  const { id, name, email } = props.data;

  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt="monster"
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
