import React from "react";
import Gallery from "components/composed/Gallery/Gallery"
import Body from "components/layout/Body/Body"
import { adImage1, adImage2, adImage3, adThumbnail1, adThumbnail2, adThumbnail3 } from "assets/images";

const Advertisement = () => {

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

	  
	return <Body title="Anuncio"><Gallery images={images} width={925} height={230}/></Body>;
};

export default Advertisement;
