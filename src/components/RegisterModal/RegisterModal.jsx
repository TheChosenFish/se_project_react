import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../ModalWithForm/ModalWithForm.css";

function RegisterModal({ onClose, onRegister }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState ("");
    const [imageUrl, setAvatar] = useState ("");
  
    const handleEmail = (e) => {
      setEmail(e.target.value);
    };
    const handlePassword = (e) => {
      setPassword(e.target.value);
    };

    const handleName = (e) => {
        setName(e.target.value)
    };

    const handleChangeImageUrl = (e) => {
        setAvatar(e.target.value);
    };

    const onSubmit = () => {
      return onRegister({ email: email, password: password, name: name, imageUrl: imageUrl });
    };
  return (
    <ModalWithForm
      buttonText="Register"
      title="Register"
      onClose={onClose}
      onSubmit={onSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Email{" "}
        <input
          type="email"
          className="modal__input"
          id="name"
          placeholder="email"
          onChange={handleEmail}
          value={email}
          autoComplete="email"
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password{" "}
        <input
          type="password"
          className="modal__input"
          id="password"
          placeholder="password"
          value={password}
          onChange={handlePassword}
          autoComplete="password"
        />
      </label>
      <label htmlFor="name" className="modal__label">
        Name{" "}
        <input
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
          onChange={handleName}
          value={name}
          autoComplete="username"
        />
      </label>
      <label htmlFor="AvatarUrl" className="modal__label">
        Image{" "}
        <input
          type="url"
          className="modal__input"
          id="imageUrl"
          placeholder="Avatar URL"
          value={imageUrl}
          onChange={handleChangeImageUrl}
          autoComplete="url"
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
