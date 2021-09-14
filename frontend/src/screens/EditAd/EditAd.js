import {useState} from "react";
import {useHistory} from "react-router-dom";
import Body from "components/layout/Body/Body";
import Input from "components/units/Input/Input";
import InputNumber from "components/units/InputNumber/InputNumber";
import TextArea from "components/units/TextArea/TextArea";
import Button from "components/units/Button/Button";
import {faMapMarkerAlt, faBed, faEuroSign, faHome, faBath} from "@fortawesome/free-solid-svg-icons";

// Styles
import {Wrapper, MapText} from "./EditAd.styles";
import {Container} from "theme/GlobalStyles";
import CustomMap from "components/composed/Map/CustomMap";

const EditAd = (props) => {
	const originalAd = Object.assign({}, props.location.state.ad);
	const {geometry, id} = props.location.state.ad;

	const [ad, setAd] = useState(originalAd);
	const [submittedData, setSubmittedData] = useState("");
	const [position, setPosition] = useState(geometry);

	const handleChange = (e) => {
		const {name, value, type} = e.target;
		setAd({
			...ad,
			[name]: type === "number" ? parseInt(value) : value,
		});
	};

	const handleMapClick = (latlng) => {
		setPosition(latlng);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmittedData(JSON.stringify({...ad, geometry: position, id: id}, 0, 2));
		//if using an API, delete the stringify and pass the object to the API
	};

	const history = useHistory();
	const handleCancel = (e) => {
		e.preventDefault();
		history.goBack();
	};

	const inputComponentData = [
		{
			Component: Input,
			type: "text",
			label: "Título",
			name: "title",
			required: true,
			inputContainerClassName: "createNewAd",
		},
		{
			Component: TextArea,
			type: "text",
			label: "Descripción",
			name: "description",
			inputContainerClassName: "textAreaCreateNewAd",
		},
		{
			Component: Input,
			type: "text",
			label: "Ciudad",
			name: "city",
			required: true,
			inputContainerClassName: "createNewAd",
			icon: faMapMarkerAlt,
		},
		{
			Component: InputNumber,
			label: "Habitaciones",
			name: "numRooms",
			icon: faBed,
			inputClassName: "styleInputCreateNewAd",
		},
		{
			Component: InputNumber,
			label: "Precio",
			name: "monthlyRent",
			required: true,
			icon: faEuroSign,
			inputClassName: "styleInputCreateNewAd",
		},
		{
			Component: InputNumber,
			label: "M\u00B2",
			name: "squareMeters",
			required: true,
			icon: faHome,
			inputClassName: "styleInputCreateNewAd",
		},
		{
			Component: InputNumber,
			label: "Baños",
			name: "numBaths",
			icon: faBath,
			inputClassName: "styleInputCreateNewAd",
		},
	];

	return (
		<>
			<Body title="Editar anuncio" isLoggedIn={true}>
				<Container>
					<Wrapper>
						<form onSubmit={handleSubmit}>
							{inputComponentData.map((el, i) => {
								const Component = el.Component;
								return (
									<Component
										key={i}
										type={el.type}
										label={el.label}
										name={el.name}
										required={el.required}
										value={ad[el.name]}
										onChange={handleChange}
										className={el.inputClassName}
										icon={el.icon}
										inputContainerClassName={el.inputContainerClassName}
									/>
								);
							})}
							<MapText>
								Índica la dirección de la propiedad pinchando sobre el mapa.
							</MapText>
							<CustomMap geometry={position} onClick={handleMapClick} />
							<Button
								buttonStyles={{width: "7.25rem", height: "2.125rem"}}
								text="Editar"
								type="normal"
								className="blueGradient"
							/>
							<Button
								buttonStyles={{
									width: "7.25rem",
									height: "2.125rem",
									marginLeft: "20px",
								}}
								text="Volver"
								onClick={handleCancel}
								type="normal"
								className="orangeGradient"
							/>
						</form>
						{submittedData && (
							<div>
								<p>The ad was changed as follows:</p>
								<pre>{submittedData}</pre>
							</div>
						)}
					</Wrapper>
				</Container>
			</Body>
		</>
	);
};

export default EditAd;
