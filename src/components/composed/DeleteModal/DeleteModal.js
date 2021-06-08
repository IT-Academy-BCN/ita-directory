import React, {useState} from "react";
import Button from "components/units/Button/Button";
import Modal from "components/composed/Modal/Modal.js";
import Input from "components/units/Input/Input.js";
import useInput from "hooks/useInput";
import {
	Wrapper,
	StyledSmall,
	ButtonWrapper,
} from "components/composed/DeleteModal/DeleteModal.style.js";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import Colors from "theme/Colors";

const DeleteModal = ({columnSelect, updateDelete, active, hideModal}) => {
	const [error, setError] = useState("");

	const [name, bindName, resetName] = useInput("");

	const eliminar = "ELIMINAR";

	const errorEscritura = () => {
		return name.length === 0 || name !== eliminar;
	};

	const handleSubmit = () => {
		if (errorEscritura()) {
			setError("Escribe la palabra ELIMINAR");
			return;
		}

		hideModal();
		resetForm();
		updateDelete(columnSelect);
	};

	const resetForm = () => {
		resetName();
		setError();
		hideModal();
	};

	return (
		<Modal
			colorModalTitle={Colors.extraDarkBlue}
			active={active}
			hideModal={resetForm}
			title="Eliminar Usuario"
			footer={
				<ButtonWrapper>
					<Button
						text="Cancelar"
						iconPosition="left"
						type="submit"
						icon={faTimes}
						onClick={resetForm}
						buttonStyles={{
							color: Colors.lightGrey,
							background: "transparent",
							boxShadow: "none",
							fontSize: "0.95rem",
							fontFamily: "Helvetica",
							width: "auto",
							paddingLeft: 0,
						}}
						iconStyles={{
							paddingRight: "5px",
							paddingLeft: "0px",
							width: "1rem",
							height: "1rem",
						}}
					/>
					<Button
						text="Eliminar"
						iconPosition="right"
						type="submit"
						className="darkRed"
						onClick={handleSubmit}
						buttonStyles={{marginRight: 0}}
					/>
				</ButtonWrapper>
			}
		>
			<Wrapper>
				<Input
					label="Escribe la palabra ELIMINAR para poder continuar"
					type="text"
					name="name"
					{...bindName}
					placeholder="Escribe aqui"
					inputContainerClassName="inputContainer"
				/>
			</Wrapper>
			<StyledSmall>{error}</StyledSmall>
		</Modal>
	);
};

export default DeleteModal;
