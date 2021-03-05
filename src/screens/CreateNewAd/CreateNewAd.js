import {useState} from "react";
import Body from "components/layout/Body/Body";
import Input from "components/units/Input/Input";
import InputNumber from "components/units/InputNumber/InputNumber";
import Button from "components/units/Button/Button";
import {Wrapper} from "./CreateNewAd.styles";
import {faMapMarkerAlt, faBed, faEuroSign, faHome, faBath} from "@fortawesome/free-solid-svg-icons";

const CreateNewAd = () => {
	const [formInput, setFormInput] = useState({
		title: "",
		description: "",
		city: "",
		rooms: "",
		price: "",
		squareM: "",
		bathrooms: "",
	});

	const handleChange = (e) => {
		const {name, value} = e.target;
		setFormInput({
			...formInput,
			[name]: value,
		});
	};

	const inputComponentData = [
		{
			label: "Título",
			name: "title",
			inputClassName: "styleInputCreateNewAd",
		},
		{
			label: "Descripción",
			name: "description",
			inputClassName: "styleInput styleInputCreateNewAd",
		},
		{
			label: "Ciudad",
			name: "city",
			inputClassName: "styleInputCreateNewAd2",
			icon: faMapMarkerAlt,
		},
	];
	const inputNumberComponentData = [
		{
			label: "Habitaciones",
			name: "rooms",
			inputClassName: "styleInputCreateNewAd",
			icon: faBed,
		},
		{
			label: "Precio",
			name: "price",
			inputClassName: "styleInputCreateNewAd",
			icon: faEuroSign,
		},
		{
			label: "M\u00B2",
			name: "squareM",
			inputClassName: "styleInputCreateNewAd",
			icon: faHome,
		},
		{
			label: "Baños",
			name: "bathrooms",
			inputClassName: "styleInputCreateNewAd",
			icon: faBath,
		},
	];

	const mapInput = (data, Component, type, inputContainerClassName) => {
		let inputs = data.map((el, i) => {
			const inputName = el.name;
			return (
				<Component
					key={i}
					type={type}
					label={el.label}
					name={inputName}
					value={formInput.inputName}
					onChange={handleChange}
					className={el.inputClassName}
					icon={el.icon}
					inputContainerClassName={inputContainerClassName}
				/>
			);
		});
		return inputs;
	};

	return (
		<>
			<Body title="Publicar anuncio" isLoggedIn={true}>
				<Wrapper>
					<form>
						{mapInput(inputComponentData, Input, "text", "createNewAd")}
						{mapInput(inputNumberComponentData, InputNumber)}
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
