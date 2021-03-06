import {useState} from "react";
import Body from "components/layout/Body/Body";
import Input from "components/units/Input/Input";
import InputNumber from "components/units/InputNumber/InputNumber";
import Button from "components/units/Button/Button";
import {Wrapper} from "./CreateNewAd.styles";
import {faMapMarkerAlt, faBed, faEuroSign, faHome, faBath} from "@fortawesome/free-solid-svg-icons";

const CreateNewAd = () => {
	const [form, setForm] = useState({
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
		setForm({
			...form,
			[name]: value,
		});
	};

	const inputComponentData = [
		{
			Component: Input,
			type: "text",
			label: "Título",
			name: "title",
			inputClassName: "styleInputCreateNewAd",
			inputContainerClassName: "createNewAd",
		},
		{
			Component: Input,
			type: "text",
			label: "Descripción",
			name: "description",
			inputClassName: "styleInput styleInputCreateNewAd",
			inputContainerClassName: "createNewAd",
		},
		{
			Component: Input,
			type: "text",
			label: "Ciudad",
			name: "city",
			inputClassName: "styleInputCreateNewAd2",
			inputContainerClassName: "createNewAd",
			icon: faMapMarkerAlt,
		},
		{
			Component: InputNumber,
			label: "Habitaciones",
			name: "rooms",
			inputClassName: "styleInputCreateNewAd",
			icon: faBed,
		},
		{
			Component: InputNumber,
			label: "Precio",
			name: "price",
			inputClassName: "styleInputCreateNewAd",
			icon: faEuroSign,
		},
		{
			Component: InputNumber,
			label: "M\u00B2",
			name: "squareM",
			inputClassName: "styleInputCreateNewAd",
			icon: faHome,
		},
		{
			Component: InputNumber,
			label: "Baños",
			name: "bathrooms",
			inputClassName: "styleInputCreateNewAd",
			icon: faBath,
		},
	];

	return (
		<>
			<Body title="Publicar anuncio" isLoggedIn={true}>
				<Wrapper>
					<form>
						{inputComponentData.map((el, i) => {
							const inputName = el.name;
							const Component = el.Component;
							return (
								<Component
									key={i}
									type={el.type}
									label={el.label}
									name={inputName}
									value={form.inputName}
									onChange={handleChange}
									className={el.inputClassName}
									icon={el.icon}
									inputContainerClassName={el.inputContainerClassName}
								/>
							);
						})}
						<Button
							buttonStyles={{width: "7.25rem", height: "2.125rem"}}
							text="Enviar"
							type="submit"
							className="blueGradient"
						/>
					</form>
				</Wrapper>
			</Body>
		</>
	);
};

export default CreateNewAd;
