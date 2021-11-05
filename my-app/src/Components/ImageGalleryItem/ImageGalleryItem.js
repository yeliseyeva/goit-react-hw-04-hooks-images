import {useState} from "react";
import Modal from "../Modal/Modal";
import PropTypes from 'prop-types';

function ImageGalleryItem ({image}) {

    const [showModal, setShowModal] = useState(false)

    const toggleModal = () => {
        setShowModal(!showModal)
    };
    

    const onClickItem = () => {
        toggleModal();
    }

    return (
        <>
        <li className="ImageGalleryItem" 
            onClick={onClickItem}>
            <img src={image.webformatURL} alt={image.tags} className="ImageGalleryItem-image" />
        </li>

        {showModal && (<Modal toggleModal={toggleModal} largeImageURL={image.largeImageURL} alt={image.tags}/>)}
        </>
    )

}

ImageGalleryItem.propTypes = {
    image: PropTypes.object.isRequired
}


export default ImageGalleryItem;