import React,{useState} from "react";
import Body from "components/layout/Body/Body";
import SimplifiedButton from "components/units/SimplifiedButton/SimplifiedButton"
import { BrowserRouter as Router, Redirect, Link } from "react-router-dom";
import CreateAd from '../CreateAd/CreateAd'
import {StyledAd} from './Ad.styles'


const Ad = () => {
	const [disabled, setIsDisabled] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
 const handleClick =(e) => {
	e.preventDefault();
	setIsDisabled(true);
	setIsLoading(true);
	console.log("cargando");
	setTimeout(() => {
		setIsDisabled(false);
		setIsLoading(false);
		console.log("finalizado")
	}, 2000);
 }

	return (
		<>
		
			<Body title="Anuncio">
			<StyledAd>
			{/* <Galery/> */}
			    <CreateAd/>
				<Link to="/"> {/* //contacto */}
				<SimplifiedButton text="Contacto"
				loadingText="Cargando"
				type="submit"
				isLoading={isLoading}
				disabled={disabled}
				onClick={handleClick}/>
				</Link>
			</StyledAd>
			</Body>

		</>
	);
};

export default Ad;