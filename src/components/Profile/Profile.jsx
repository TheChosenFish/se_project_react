import SideBar from "../Sidebar/Sidebar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css"

function Profile({ onCardClick, clothingItems, addItem }) {

  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
      </section>
      <section className="profile__clothes-section">
        <ClothesSection onCardClick={onCardClick} onSubmit={addItem} clothingItems={clothingItems}/>
      </section>
    </div>
  );
}

export default Profile;
