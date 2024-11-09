import "./ItemCard.css";
import React from "react";

function ItemCard({ item, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(item);
  };
  console.log(item)
  return (
    <div className="clothing-card">
      <h2 className="clothing-card__name">{item.name}</h2>
      <img
        onClick={handleCardClick}
        src={item.imageUrl}
        alt={item.name}
        className="clothing-card__image"
      />
    </div>
  );
}

export default ItemCard;
