import React from "react";
import ImageGallery from 'react-image-gallery';
import { adImage1, adImage2, adImage3 } from "assets/images"
import {StyledImage} from "./Gallery.styles.js"
import "react-image-gallery/styles/css/image-gallery.css";

const renderImage = (isThumbnail, src) => {
  return (
    <StyledImage src={src} thumbnail={isThumbnail}/>
  )
}
const images = [
  {
    original: adImage1,
    renderThumbInner: () => renderImage(true, adImage1),
    renderItem: () => renderImage(false, adImage1)
  },
  {
    original: adImage2,
    renderThumbInner: () => renderImage(true, adImage2),
    renderItem: () => renderImage(false, adImage2)
  },
  {
    original: adImage3,
    renderThumbInner: () => renderImage(true, adImage3),
    renderItem: () => renderImage(false, adImage3)
  },
];

const Gallery = () => {
		return (
      <ImageGallery 
        items={images} 
        showFullscreenButton={false} 
        showBullets={false}
        showPlayButton={false}
        showNav={false}
      />
    );
	  
};

export default Gallery;
