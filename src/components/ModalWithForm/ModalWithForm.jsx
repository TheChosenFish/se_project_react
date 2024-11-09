import "../ModalWithForm/ModalWithForm.css";

function ModalWithForm({ children, buttonText, title, onClose, onSubmit }) {
  return (
    <div className={`modal modal_opened`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} type="button" className="modal__close" />
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <button type="submit" className="modal__submit-btn">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
