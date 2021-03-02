import React from "react";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import {Container} from "./Gallery.styles.js"

const Gallery = ({images, width=800, height=256}) => {
		return (
      <Container width={width} height={height}>
        <ImageGallery 
        items={images} 
        showFullscreenButton={false} 
        showBullets={false}
        showPlayButton={false}
        showNav={false}
      />
      </Container>
      
    );
	  
};

export default Gallery;
