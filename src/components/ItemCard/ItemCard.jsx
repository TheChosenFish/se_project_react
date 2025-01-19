import "./ItemCard.css";
import React from "react";

function ItemCard({ item, onCardClick, handleCardLike }) {
  const handleCardClick = () => {
    onCardClick(item);
  };

  const isLiked = item.likes.some((id) => id === currentUser._id);
  const itemLikeButtonClassName = `...`;
  console.log(item);
  return (
    <div className="clothing-card">
      <h2 className="clothing-card__name">{item.name}</h2>
      <img
        onClick={handleCardClick}
        onCardLike={handleCardLike}
        src={item.imageUrl}
        alt={item.name}
        className={itemLikeButtonClassName}
      />
      <button onClick={handleRegister} type="button" className="item">
        Signup
      </button>
    </div>
  );
}

export default ItemCard;
