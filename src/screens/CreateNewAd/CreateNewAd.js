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

	return (
		<>
			<Body title="Publicar anuncio" isLoggedIn={true}>
				<Wrapper>
					<form>
						<Input label={"Título"} inputContainerClassName="createNewAd" />
						<Input label={"Descripción"} inputContainerClassName="createNewAd" />
						<Input
							label={"Ciudad"}
							icon={faMapMarkerAlt}
							inputContainerClassName="createNewAd"
						/>
						<InputNumber
							label={"Habitaciones"}
							icon={faBed}
							onChange={handleChangeNumeric}
							value={numericValue}
						/>
						<InputNumber
							label={"Precio"}
							icon={faEuroSign}
							onChange={handleChangeNumeric}
							value={numericValue}
						/>
						<InputNumber
							label={"M2"}
							icon={faHome}
							onChange={handleChangeNumeric}
							value={numericValue}
						/>
						<InputNumber
							label={"Baños"}
							icon={faBath}
							onChange={handleChangeNumeric}
							value={numericValue}
						/>
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
