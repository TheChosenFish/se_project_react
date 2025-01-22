import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../ModalWithForm/ModalWithForm.css";

function LoginModal({ onClose, onLogin, onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = () => {
    return onLogin(email, password);
  };
  return (
    <ModalWithForm
      buttonText="Login"
      secondButtonText="or Register"
      title="Login"
      onClose={onClose}
      onSubmit={onSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name{" "}
        <input
          type="email"
          className="modal__input"
          id="name"
          placeholder="email"
          onChange={handleEmail}
          value={email}
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Password{" "}
        <input
          type="password"
          className="modal__input"
          id="password"
          placeholder="password"
          value={password}
          onChange={handlePassword}
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
