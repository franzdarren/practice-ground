function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(event) => event.stopPropagation()}>
        <h2>Hello from the modal</h2>
        <p>This component receives its close function as a prop.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;