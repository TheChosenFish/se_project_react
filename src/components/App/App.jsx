import { useEffect, useState } from "react";
import "./App.css";
import { coordinates, APIkey } from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import Footer from "../Footer/Footer";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { Routes, Route } from "react-router-dom";
import Profile from "../Profile/Profile";
import { getItems, postItem, deleteItem } from "../../utils/api";
import AddItemModal from "../AddItemModal/AddItemModal";
import DeleteConfirmModal from "../DeleteConfirmModal/DeleteConfirmModal";
function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    city: "",
    temp: { F: 999, C: 999 },
    isDay: true,
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [deleteCard, setDeleteCard] = useState("");
  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal(" ");
  };

  const handleDeleteCard = () => {
    setActiveModal("delete-card");
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filterData = filterWeatherData(data);
        setWeatherData(filterWeatherData(data));
        // console.log(filterData)
      })

      .catch(console.error);
  }, []);

  // useEffect(() => {
  //   getItems()
  //     .then((data) => {
  //       console.log(data);
  //       setClothingItems(ge(data))
  //     })
  //     .catch(console.error);
  // }, []);

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  const addItem = (name, weather, imageUrl) => {
    postItem({ name, weather, imageUrl })
      .then((data) => {
        setClothingItems((clothingItems) => {
          data, clothingItems;
        });
        closeActiveModal();
      })
      .catch(console.error);
  };

  const poofItem = (items) => {
    deleteItem(clothingItems);
  };
  // function handleAddItemModalSubmit(){
  //   // console.log('handleAddItemModalSubmit has run!!!')
  //   return postItem().then(()=>{
  //     if setClothingItems().submitter === activeModal
  //   }).catch(()=>{})
  // }

  console.log(currentTemperatureUnit);

  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="page__content">
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
            <Route
              path="/Profile"
              element={
                <Profile
                  onCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
          </Routes>
        </div>
        {activeModal === "add-garment" && (
          <AddItemModal onSubmit={postItem} onClose={closeActiveModal} />
        )}
        {activeModal === "preview" && (
          <ItemModal card={selectedCard} onClose={closeActiveModal} />
        )}
        {activeModal === "delete-card" && (
          <DeleteConfirmModal
            onSubmit={handleDeleteCard}
            onClose={closeActiveModal}
          />
        )}
        <Footer />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
