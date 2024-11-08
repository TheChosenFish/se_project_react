import "../ItemModal/ItemModal.css";
import DeleteConfirmModal from "../DeleteConfirmModal/DeleteConfirmModal";

function ItemModal({ onClose, card, handleDeleteCard, onSubmit }) {
  const handleDelete = () => {
    onDeleteClick();
  };
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
              onClick={handleDeleteCard}
              type="submit"
              className="modal__delete-btn"
            >
             <DeleteConfirmModal/>
            </button>
          </h2>

          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
