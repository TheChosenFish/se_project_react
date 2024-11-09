import "../ItemModal/ItemModal.css";

function ItemModal({ onClose, card, handleDeleteCard }) {
  return (
    <div className={`modal modal_opened`}>
      <div className="modal__content modal__content_type_image">
        <button
          onClick={onClose}
          type="button"
          className="modal__close-btn"
        ></button>
        <img src={card.link} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">
            {card.name}
            <button
              type="submit"
              className="modal__delete-btn"
              onSubmit={handleDeleteCard}
            >
              Delete
            </button>
          </h2>

          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
