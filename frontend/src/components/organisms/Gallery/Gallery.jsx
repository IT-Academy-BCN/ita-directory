import React from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import PropTypes from 'prop-types'
import GalleryStyled from './Gallery.styles'

function Gallery({
  images,
  showFullscreenButton = true,
  showBullets = false,
  showPlayButton = false,
  showNav = false,
  showIndex = false,
  autoPlay = false,
  showThumbnails = true,
  infinite = false,
  lazyLoad = false,
  slideDuration = 450,
  slideInterval = 3000,
  startIndex = 0,
}) {
  return (
    <GalleryStyled>
      <ImageGallery
        items={images}
        showFullscreenButton={showFullscreenButton}
        showBullets={showBullets}
        showPlayButton={showPlayButton}
        showNav={showNav}
        showIndex={showIndex}
        autoPlay={autoPlay}
        showThumbnails={showThumbnails}
        infinite={infinite}
        lazyLoad={lazyLoad}
        slideDuration={slideDuration}
        slideInterval={slideInterval}
        startIndex={startIndex}
        useBrowserFullscreen={false}
      />
    </GalleryStyled>
  )
}

const propValueImage = {
  original: PropTypes.string.isRequired,
  thumbnail: PropTypes.string,
  originalAlt: PropTypes.string,
  thumbnailAlt: PropTypes.string,
}

Gallery.propTypes = {
  images(props, propName, componentName) {
    const val = props[propName]
    if (!Array.isArray(val)) return new Error(`${propName} must be an array`)
    if (val.length === 0) return new Error(`${propName} must have at least one element`)

    return val.forEach((elem) =>
      PropTypes.checkPropTypes(propValueImage, elem, 'prop', `${componentName}.${propName}`)
    )
  },
  showFullscreenButton: PropTypes.bool,
  showBullets: PropTypes.bool,
  showPlayButton: PropTypes.bool,
  showNav: PropTypes.bool,
  showIndex: PropTypes.bool,
  autoPlay: PropTypes.bool,
  showThumbnails: PropTypes.bool,
  infinite: PropTypes.bool,
  lazyLoad: PropTypes.bool,
  slideDuration: PropTypes.number,
  slideInterval: PropTypes.number,
  startIndex: PropTypes.number,
}
export default Gallery
