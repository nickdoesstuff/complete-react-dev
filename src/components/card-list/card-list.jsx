import React from "react";

import Card from "../card/card";

import "./card-list.css";

const CardList = ({ data }) => {
  return (
    <div className="card-list">
      {data.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
};

export default CardList;
