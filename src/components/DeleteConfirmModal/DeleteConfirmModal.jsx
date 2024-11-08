import "./DeleteConfirmModal.css"


function DeleteConfirmModal({ card, onClose, handleDeleteCard }) {
    return (
        <div className={`modal modal_opened`}>
          <div className="modal__content modal__content_type_image">
            <button
              onClick={onClose}
              type="button"
              className="modal__close-btn"
            ></button>
            <div className="modal__footer">
              <h2 className="modal__caption">Are you sure you want to delete this item? This action is irreversible.
                {card}
                <button
                  onClick={handleDeleteCard}
                  type="submit"
                  className="modal__delete-btn"
                >
                  Delete Item
                </button>
              </h2>
    
              <p className="modal__weather"> {card}</p>
            </div>
          </div>
        </div>
      );
}

export default DeleteConfirmModal;