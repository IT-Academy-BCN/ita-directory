import React, {useState} from "react";
import Button from "components/units/Button/Button";
import Modal from "components/composed/Modal/Modal.js";
import {UserModalStyled, ButtonWrapper} from "./UserModal.style.js";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import Colors from "theme/Colors";

const UserModal = ({nombreUsuario, currentUserState, active, hideModal, updateUser}) => {
	const [selectValue, setSelectValue] = useState(currentUserState);

	const handleSelect = (val) => {
		setSelectValue(val);
	};

	const handleClick = (val, nombreUsuario) => {
		updateUser(val, nombreUsuario);
		closeModal(val);
	};

	const closeModal = (val) => {
		hideModal();
	};

	return (
		<Modal
			colorModalTitle={Colors.extraDarkBlue}
			active={active}
			hideModal={hideModal}
			title="Cambiar Estado"
			footer={
				<ButtonWrapper>
					<Button
						text="Cancelar"
						iconPosition="left"
						type="submit"
						onClick={() => hideModal()}
						icon={faTimes}
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
						text="Actualizar"
						loadingText="Actualizar"
						iconPosition="left"
						type="submit"
						className="darkBlue"
						buttonStyles={{marginRight: 0}}
						onClick={() => handleClick(selectValue, nombreUsuario)}
					/>
				</ButtonWrapper>
			}
		>
			<UserModalStyled currentUserState={selectValue}>
				<p>Cambiar el estado del usuario {nombreUsuario}</p>
				<label htmlFor="estado-usuario">Estado usuario</label>
				<select
					name="estado-usuario"
					id="estado-usuario"
					defaultValue={currentUserState}
					onChange={(e) => handleSelect(e.target.value)}
				>
					<option value="aprobado" className="aprobado">
						Aprobado
					</option>
					<option value="pending" className="pending">
						Pendiente
					</option>
					<option value="rejected" className="rejected">
						Rechazado
					</option>
				</select>
			</UserModalStyled>
		</Modal>
	);
};

export default UserModal;
