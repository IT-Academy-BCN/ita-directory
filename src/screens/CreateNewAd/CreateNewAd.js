import {useState} from "react";
import Body from "components/layout/Body/Body";
//http://localhost:3000/newAd
import Input from "components/units/Input/Input";
import InputNumber from "components/units/InputNumber/InputNumber";
import Button from "components/units/Button/Button";
import {Wrapper} from "./CreateNewAd.styles";
import {faMapMarkerAlt, faBed, faEuroSign, faHome, faBath} from "@fortawesome/free-solid-svg-icons";

const CreateNewAd = () => {
	const [numericValue, setNumericValue] = useState("");

	const handleChangeNumeric = (e) => setNumericValue(e.target.value);

	const inputComponentData = [
		{
			label: "Título",
			inputClassName: "styleInputCreateNewAd",
		},
		{
			label: "Descripción",
			inputClassName: "styleInput styleInputCreateNewAd",
		},
		{
			label: "Ciudad",
			inputClassName: "styleInputCreateNewAd2",
			icon: faMapMarkerAlt,
		},
	];
	const inputNumberComponentData = [
		{
			label: "Habitaciones",
			icon: faBed,
		},
		{
			label: "Precio",
			icon: faEuroSign,
		},
		{
			label: "M\u00B2",
			icon: faHome,
		},
		{
			label: "Baños",
			icon: faBath,
		},
	];

	return (
		<>
			<Body title="Publicar anuncio" isLoggedIn={true}>
				<Wrapper>
					<form>
						{inputComponentData.map((el, i) => (
							<Input
								key={i}
								label={el.label}
								className={el.inputClassName}
								icon={el.icon}
								inputContainerClassName="createNewAd"
							/>
						))}
						{inputNumberComponentData.map((el, i) => (
							<InputNumber
								key={i}
								label={el.label}
								icon={el.icon}
								className="styleInputCreateNewAd"
								onChange={handleChangeNumeric}
								value={numericValue}
							/>
						))}
						<Button
							buttonStyles={{width: "7.25rem", height: "2.125rem"}}
							text="Enviar"
							className="blueGradient"
						/>
					</form>
				</Wrapper>
			</Body>
		</>
	);
};

export default CreateNewAd;
