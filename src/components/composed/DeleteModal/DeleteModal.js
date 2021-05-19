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
		updateDelete(columnSelect);

		if (errorEscritura()) {
			setError("Escribe la palabra ELIMINAR");
			return;
		}

		hideModal();
		resetForm();
	};

	const resetForm = () => {
		resetName();
		setError();
		hideModal();
	};

	return (
		<Modal
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
							fontFamily: "Arial",
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
						className="darkBlue"
						onClick={handleSubmit}
						buttonStyles={{marginRight: 0}}
					/>
				</ButtonWrapper>
			}
		>
			<Wrapper>
				<p>Escribe la palabra ELIMINAR para poder continuar:</p>
			</Wrapper>
			<Wrapper>
				<Input
					type="text"
					name="name"
					{...bindName}
					placeholder="escribe aqui"
					inputContainerClassName="inputContainer"
				/>
			</Wrapper>
			<StyledSmall>{error}</StyledSmall>
		</Modal>
	);
};

export default DeleteModal;
