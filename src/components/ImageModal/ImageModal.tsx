import React from "react";
import Modal from "react-modal";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    background: "none",
    overflow: "visible",
  },
};

Modal.setAppElement("#root");

interface ImageModalProps {
  urlImage: string;
  isOpen: boolean;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  urlImage,
  isOpen,
  onClose,
}) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
      >
        <img src={urlImage} alt="Large" />
      </Modal>
    </div>
  );
};

export default ImageModal;
