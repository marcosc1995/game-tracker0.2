import React from "react";
import '../styleSheet/GameCard.css'
function GameCard({ title, img }) {
  return (
    <div className="cardContainer">
      <img className="cardImg" src={img} alt="" />
      <h2 className="cardTitle" >{title}</h2>
    </div>
  );
}

export default GameCard;
