import {useState, useEffect} from "react";
import axios from "axios";
import Body from "components/layout/Body/Body";
import Input from "components/units/Input/Input";
import InputNumber from "components/units/InputNumber/InputNumber";
import TextArea from "components/units/TextArea/TextArea";
import Button from "components/units/Button/Button";
import Notification from "components/units/Notifications/Notification";
import {faMapMarkerAlt, faBed, faEuroSign, faHome, faBath} from "@fortawesome/free-solid-svg-icons";
import {Wrapper, MapText, MapBox} from "./CreateNewAd.styles";
import {Container} from "theme/GlobalStyles";
import CustomMap from "components/composed/Map/CustomMap/CustomMap";

const CreateNewAd = () => {
	const emptyForm = {
		user_id: 1,
		title: "",
		description: "",
		city: "",
		n_rooms: "",
		price: "",
		square_meters: "",
		n_bathrooms: "",
		map_lat: 0,
		map_lon: 0,
	};
	const [form, setForm] = useState(emptyForm);
	const [submittedData, setSubmittedData] = useState(""); //@todo -> remove -probably unecessary
	const [error, setError] = useState(false);
	const [successfulPost, setSuccessfulPost] = useState(false);
	const [coordinates, setCoordinates] = useState([]);

	const postAd = async (formInfo) => {
		try {
			const res = await axios({
				method: "post",
				url: "http://localhost:5000/ads/v1/post-ad",
				data: formInfo,
			});
			await console.log(res);
			await setSuccessfulPost((prev) => true);
			await setTimeout(() => setSuccessfulPost((prev) => false), 3000);
		} catch (err) {
			console.log(err);
			setError((prev) => true);
			setTimeout(() => setError((prev) => false), 3000);
		}
	};

	const handleChange = (e) => {
		let {name, value} = e.target;
		if (Number(value)) {
			value = Number(value);
		}
		setForm({
			...form,
			[name]: value,
			map_lat: Number(coordinates[0]),
			map_lon: Number(coordinates[1]),
		});
	};
	//	,

	useEffect(() => {
		setForm({
			...form,
			map_lat: Number(coordinates[0]),
			map_lon: Number(coordinates[1]),
		});
	}, [coordinates]);

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(JSON.stringify(form));
		postAd(form);
		setSubmittedData(JSON.stringify(form, 0, 2));
		//variables reset
		setForm(emptyForm);
		setError((prev) => false);
		setSuccessfulPost((prev) => false);
		setTimeout(() => setSubmittedData(""), 5000);
	};

	const inputComponentData = [
		{
			Component: Input,
			type: "text",
			label: "Título",
			name: "title",
			required: true,
			inputContainerClassName: "style-input-create-new-ad",
		},
		{
			Component: TextArea,
			type: "text",
			label: "Descripción",
			name: "description",
			inputContainerClassName: "style-input-create-new-ad", // textAreaCreateNewAd
		},
		{
			Component: InputNumber,
			type: "text",
			label: "Ciudad",
			name: "city",
			required: true,
			inputContainerClassName: "style-input-create-new-ad",
			icon: faMapMarkerAlt,
		},
		{
			Component: InputNumber,
			type: "number",
			label: "Habitaciones",
			name: "n_rooms",
			icon: faBed,
			inputClassName: "style-input-create-new-ad",
		},
		{
			Component: InputNumber,
			type: "number",
			label: "Precio",
			name: "price",
			required: true,
			icon: faEuroSign,
			inputClassName: "style-input-create-new-ad",
		},
		{
			Component: InputNumber,
			type: "number",
			label: "M\u00B2",
			name: "square_meters",
			required: true,
			icon: faHome,
			inputClassName: "style-input-create-new-ad",
		},
		{
			Component: InputNumber,
			type: "number",
			label: "Baños",
			name: "n_bathrooms",
			icon: faBath,
			inputClassName: "style-input-create-new-ad",
		},
	];

	return (
		<>
			{" "}
			{error && (
				<Notification
					message={"Ha habido un error. Vuelve ha intentar ahora o mas tarde"}
					isSuccess={false}
				/>
			)}
			{successfulPost && (
				<Notification
					message={`Tu anuncio ha sido publicado con exito.`}
					isSuccess={true}
				/>
			)}
			<Body
				title="Publicar anuncio"
				justifyTitle="flex-start"
				paddingTitle="0px"
				paddingTitle2="15vw"
				isLoggedIn="true"
			>
				<Container>
					<Wrapper>
						<form onSubmit={handleSubmit}>
							{inputComponentData.map((el, i) => {
								const Component = el.Component;
								return (
									<div key={i}>
										<div className="form-label">
											<label>{el.label}</label>
										</div>
										<Component
											key={i}
											type={el.type}
											name={el.name}
											className={el.inputClassName}
											icon={el.icon && el.icon}
											inputContainerClassName={el.inputContainerClassName}
										/>
									</div>
								);
							})}
							<MapText>
								Índica la dirección de la propiedad pinchando sobre el mapa.
							</MapText>
							<MapBox>
								<CustomMap setCoordinates={setCoordinates} />
							</MapBox>
							<Button
								buttonStyles={{
									width: "7.25rem",
									height: "2.125rem",
									marginBottom: "2rem",
								}}
								text="Enviar"
								type="normal"
								className="blue-gradient"
							/>
						</form>
						{submittedData && (
							<div>
								<p>The following data was submitted:</p>
								<pre>{submittedData}</pre>
							</div>
						)}
					</Wrapper>
				</Container>
			</Body>
		</>
	);
};

export default CreateNewAd;
