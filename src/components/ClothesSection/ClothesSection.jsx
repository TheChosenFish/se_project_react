import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css"

function ClothesSection({ onCardClick, clothingItems }) {
  return (
    <div className="clothes__section">
      <div className="clothes-section__header">
        <p>Your Items</p>
        <button className="clothes-section__button">+ Add New </button>
      </div>
      <ul className="clothes-section__list">
        {clothingItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={onCardClick}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
