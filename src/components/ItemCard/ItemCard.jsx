import "./ItemCard.css"

function ItemCard({ item }) {
  return (
    <div className="clothing-card">
      <h2 className="clothing-card__name">{item.name}</h2>
      <img src={item.link} alt={item.name} className="clothing-card__image"/>
    </div>
  );
}

export default ItemCard;
