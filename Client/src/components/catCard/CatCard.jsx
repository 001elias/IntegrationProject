import React from "react";
import { Link } from "react-router-dom";
import "./CatCard.scss";

function CatCard({ card, url }) {
  return (
      <div className="catCard">
        <img src={card.img} alt="" />
        <span className="desc">{card.desc}</span>
        <span className="title">{card.title}</span>
      </div>
  );
}

export default CatCard;
