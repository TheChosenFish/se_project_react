import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../ModalWithForm/ModalWithForm.css";

function AddItemModal({ onSubmit, onClose, name, imageUrl }) {
//   const [name, setName] = useState("");
//   const [imageUrl, setImageUrl] = useState("");
//   const [weather, setWeather] = useState("");

//   const handleChangeName = (e) => {
//     setName(e.target.value);
//   };
//   const handleChangeImageUrl = (e) => {
//     setImageUrl(e.target.value);
//   };

//   const onSubmit = () => {
//     console.log({ name: name, imageUrl: imageUrl, weather: weather });
//     return;
//     addItem({ name: name, imageUrl: imageUrl, weather: weather });
//   };
  return (
    <ModalWithForm
      buttonText="Add Garment"
      title="New Garment"
      onClose={onClose}
      onSubmit={onSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name{" "}
        <input
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
        //   onChange={handleChangeName}
          value={name}
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image{" "}
        <input
          type="url"
          className="modal__input"
          id="imageUrl"
          placeholder="Image URL"
          value={imageUrl}
        //   onChange={handleChangeImageUrl}
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type</legend>
        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            id="hot"
            type="radio"
            className="modal__radio-input"
            name="button"
          />
          Hot
        </label>
        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            id="cold"
            type="radio"
            className="modal__radio-input"
            name="button"
          />
          Cold
        </label>
        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            id="warm"
            type="radio"
            className="modal__radio-input"
            name="button"
          />
          Warm
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
