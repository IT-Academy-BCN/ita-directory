import {useState} from "react";
import axios from "axios";
import Body from "components/layout/Body/Body";
import Input from "components/units/Input/Input";
import InputNumber from "components/units/InputNumber/InputNumber";
import TextArea from "components/units/TextArea/TextArea";
import Button from "components/units/Button/Button";
import Notification from "components/units/Notifications/Notification";
import {faMapMarkerAlt, faBed, faEuroSign, faHome, faBath} from "@fortawesome/free-solid-svg-icons";

// Styles
import {Wrapper, MapText, MapBox} from "./CreateNewAd.styles";
import {Container} from "theme/GlobalStyles";
import CustomMap from "components/composed/Map/CustomMap";

const CreateNewAd = () => {
	const emptyForm = {
		title: "",
		description: "",
		city: "",
		rooms: "",
		price: "",
		squareM: "",
		bathrooms: "",
	};
	const [form, setForm] = useState(emptyForm);
	const [submittedData, setSubmittedData] = useState("");
	const [error, setError] = useState(false);
	const [successfulPost, setSuccessfulPost] = useState(false);

	const postAd = async (newAdP) => {
		try {
			const res = await axios.post("http://localhost:5000/ads/v1/post-ad", newAdP);
			console.log(res.status);
			setSuccessfulPost(true);
		} catch (error) {
			console.error(error);
			setError(true);
		}
	};

	const handleChange = (e) => {
		const {name, value} = e.target;
		setForm({
			...form,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmittedData(JSON.stringify(form, 0, 2));
		setForm(emptyForm);
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
			name: "rooms",
			icon: faBed,
			inputClassName: "styleInputCreateNewAd",
		},
		{
			Component: InputNumber,
			label: "Precio",
			name: "price",
			required: true,
			icon: faEuroSign,
			inputClassName: "styleInputCreateNewAd",
		},
		{
			Component: InputNumber,
			label: "M\u00B2",
			name: "squareM",
			required: true,
			icon: faHome,
			inputClassName: "styleInputCreateNewAd",
		},
		{
			Component: InputNumber,
			label: "Baños",
			name: "bathrooms",
			icon: faBath,
			inputClassName: "styleInputCreateNewAd",
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
									<Component
										key={i}
										type={el.type}
										label={el.label}
										name={el.name}
										required={el.required}
										value={form[el.name]}
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
							<MapBox>
								<CustomMap />
							</MapBox>
							<Button
								buttonStyles={{
									width: "7.25rem",
									height: "2.125rem",
									marginBottom: "2rem",
								}}
								text="Enviar"
								type="normal"
								className="blueGradient"
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
