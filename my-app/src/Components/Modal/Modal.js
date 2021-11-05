import {useEffect} from "react";
import {createPortal} from "react-dom";
import PropTypes from 'prop-types';

const modalRoot = document.querySelector("#modal-root");

function Modal ({largeImageURL, alt, toggleModal}) {

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        } 
    })

    const handleBackdropClick = (e) => {
        if (e.currentTarget === e.target) {
            toggleModal()
        }
    }

    const handleKeyDown = (e) => {
        if (e.code === 'Escape') {
            toggleModal()
        }
    }

    return createPortal(
        <div className="Overlay"
            onClick={handleBackdropClick}>
            <div className="Modal">
                <img src={largeImageURL} alt={alt}/>
            </div>
        </div>,
        modalRoot,
    )
}

Modal.propTypes = {
    toggleModal: PropTypes.func.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

export default Modal;