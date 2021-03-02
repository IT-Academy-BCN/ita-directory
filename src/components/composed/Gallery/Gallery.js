import React from "react";
import ImageGallery from 'react-image-gallery';
import { adImage1, adImage2, adImage3, adThumbnail1, adThumbnail2, adThumbnail3 } from "assets/images";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: adImage1,
    thumbnail: adThumbnail1
  },
  {
    original: adImage2,
    thumbnail: adThumbnail2
  },
  {
    original: adImage3,
    thumbnail: adThumbnail3
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
