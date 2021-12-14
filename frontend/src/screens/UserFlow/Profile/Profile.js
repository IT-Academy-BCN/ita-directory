import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

// Layout Components
import Body from "components/layout/Body/Body";

// Units Components
import AsyncButton from "components/units/Button/Button";
import Input from "components/units/Input/Input";
import InputValidated from "components/units/InputValidated/InputValidated";
import Notification from "components/units/Notifications/Notification";

// Composed Components
import Modal from "components/composed/Modal/Modal";

// Style Components
import {ProfileWrapper, ProfileForm, ProfileImage, ProfileUploadPhoto} from "./Profile.styles";
import {Container} from "theme/GlobalStyles";

// *** testing
import people1b from "../../../assets/images/people1b.jpg";
import people4b from "../../../assets/images/people4b.jpg";
import people13b from "../../../assets/images/people13b.jpg";

import initLoggedinUserInfo from "../fakeUser.json";

const usersPhoto = {
    people1b: people1b,
    people4b: people4b,
    people13b: people13b,
};
// testing ***

const Profile = () => {
    const [newPassword, setNewPassword] = useState("");
    const [newPasswordRepeated, setNewPasswordRepeated] = useState("");
    const [newPhoto, setNewPhoto] = useState(null);
    const [validNewPassword, setValidNewPassword] = useState(false);
    const [validNewPasswordRepeated, setValidNewPasswordRepeated] = useState(false);
    const [loggedinUserInfo, setLoggedinUserInfo] = useState({});
    const [showUploadPhotoModal, setShowUploadPhotoModal] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(null);
    const [message, setMessage] = useState(null);
    const [firstLoad, setFirstLoad] = useState(null);

    // aquí deberá cargarse info de usuario autenticado correctamente
    // (o de otro modo se le pasará o estará accesible para componente):
    useEffect(() => {
        // *** testing
        const loggedinUserInfoOnLocalStorage = localStorage.getItem("loggedinUserInfo");
        if (loggedinUserInfoOnLocalStorage)
            setLoggedinUserInfo(JSON.parse(loggedinUserInfoOnLocalStorage));
        else setLoggedinUserInfo(initLoggedinUserInfo);
        setFirstLoad(true);
        // testing ***
    }, []);

    useEffect(() => {
        try {
            localStorage.setItem("loggedinUserInfo", JSON.stringify(loggedinUserInfo));
            setSubmitSuccess(true);
            setMessage("Your new account information was saved succesfully!");
        } catch (e) {
            setSubmitSuccess(false);
            setMessage(
                "Ups, something went wrong saving your new account information. Please, try later or contact us."
            );
        } finally {
            setNewPassword("");
            setNewPhoto(null);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loggedinUserInfo]);

    useEffect(() => {
        setNewPasswordRepeated("");
    }, [newPassword]);

    useEffect(() => {
        setValidNewPasswordRepeated(
            newPasswordRepeated !== "" && newPassword === newPasswordRepeated
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [newPasswordRepeated]);

    const changePhoto = () => {
        const photos = Object.keys(usersPhoto);
        const pos = photos.indexOf(newPhoto || loggedinUserInfo.photo);
        setNewPhoto(pos === photos.length - 1 ? photos[0] : photos[pos + 1]);
        setShowUploadPhotoModal(false);
    };

    const submitUserInfo = () => {
        setLoggedinUserInfo((prev) => {
            return {
                ...prev,
                photo: newPhoto || loggedinUserInfo.photo,
                password: newPassword === "" ? loggedinUserInfo.password : newPassword,
            };
        });
    };

    const closeNotification = () => setMessage(null);

    return (
        <Body title="Editar perfil" justifyTitle="flex-start" isLoggedIn="true">
            <Container>
                {message && !firstLoad ? (
                    <Notification
                        message={message}
                        isSuccess={submitSuccess}
                        closeNotification={closeNotification}
                        autoClose={true}
                    />
                ) : null}
                <Modal
                    hideModal={() => setShowUploadPhotoModal(false)}
                    active={showUploadPhotoModal}
                    title="Upload Profile's Photo"
                >
                    <ProfileForm className="uploadphoto-modal">
                        <input type="file" name="selectfile" />
                        <AsyncButton
                            text="Sube"
                            loadingText="Subiendo"
                            className="blue-gradient w-36"
                            type="button"
                            onClick={changePhoto}
                        />
                    </ProfileForm>
                </Modal>
                <ProfileWrapper>
                    <ProfileForm className="profile-photo">
                        <ProfileImage>
                            <img
                                src={usersPhoto[newPhoto || loggedinUserInfo.photo]}
                                alt={"Foto de perfil"}
                            />
                        </ProfileImage>
                        <ProfileUploadPhoto>
                            <div>
                                <p>Fotografía de perfil</p>
                                <p>Tamaño recomendado: 1000x1000</p>
                                <p>Formatos admitidos: JPG, JPEG, PNG, o GIF</p>
                            </div>
                            <div>
                                <AsyncButton
                                    text="Subir"
                                    type="button"
                                    className="blue-gradient w-28"
                                    onClick={() => setShowUploadPhotoModal(true)}
                                    isLoading={false}
                                />
                                {newPhoto && (
                                    <small className="info-photo-uploaded">
                                        Photo uploaded. Remember to save your data!
                                    </small>
                                )}
                            </div>
                        </ProfileUploadPhoto>
                    </ProfileForm>
                    <ProfileForm className="profile-data">
                        <div>
                            <div>
                                <label htmlFor="username">Nombre de usuario</label>
                                <Input
                                    style={`marginTop: 0`}
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder={loggedinUserInfo.name}
                                    onChange={() => console.log("disabled")} // attr necesario, sinó da error
                                    disabled={true}
                                    minMarginTop
                                />
                                <p>El nombre de usuario no se puede modificar</p>
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder={loggedinUserInfo.email}
                                    onChange={() => console.log("disabled")} // attr necesario, sinó da error
                                    disabled={true}
                                    minMarginTop
                                />
                                <p>
                                    El email no se puede modificar. Ponte en{" "}
                                    <Link to="#">contacto</Link> si necesitas actualizarlo.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="passName">Nueva Contraseña</label>
                                <InputValidated
                                    type="password"
                                    value={newPassword}
                                    placeholder="Introducir contraseña"
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    id="passName"
                                    name="passName"
                                    valid={setValidNewPassword}
                                    minMarginTop
                                />
                            </div>
                            <div>
                                <label htmlFor="confirmPassName">Confirmar Contraseña</label>
                                <Input
                                    type="password"
                                    value={newPasswordRepeated}
                                    placeholder="Confirma tu contraseña"
                                    onChange={(e) => setNewPasswordRepeated(e.target.value)}
                                    id="confirmPassName"
                                    name="confirmPassName"
                                    error={newPasswordRepeated !== "" && !validNewPasswordRepeated}
                                    errorText="Las 2 contraseñas tienen que ser iguales"
                                    success={newPasswordRepeated !== "" && validNewPasswordRepeated}
                                    disabled={!validNewPassword}
                                    minMarginTop
                                />
                            </div>
                        </div>
                        <div>
                            <AsyncButton
                                text="Guardar"
                                loadingText="Guardando"
                                type="button"
                                onClick={() => {
                                    if (firstLoad) setFirstLoad(false);
                                    submitUserInfo();
                                }}
                                className="green-gradient"
                                disabled={
                                    !newPhoto && (!validNewPassword || !validNewPasswordRepeated)
                                }
                            />
                        </div>
                    </ProfileForm>
                </ProfileWrapper>
            </Container>
        </Body>
    );
};

export default Profile;
