import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../../components/atoms/Button'
import Modal from '../../../components/organisms/Modal/Modal'
import Input from '../../../components/atoms/Forms/Input'
import { Wrapper, ButtonWrapper } from './EditAdModal.style'
import Colors from '../../../theme/colors'
import Map from '../../../components/organisms/Map/Map/Map'

function EditAdModal({ ad, active, hideModal }) {
  const { name, m2, desc, habitaciones, gastosIncluidos, price, lat, long } = ad
  // const [error, setError] = useState("");

  return (
    <Modal
      active={active}
      hideModal={hideModal}
      title="Editar Anuncio"
      footer={
        <ButtonWrapper>
          <Button
            text="Cancelar"
            iconPosition="left"
            type="submit"
            onClick={() => hideModal()}
            name="close"
            buttonStyles={{
              color: Colors.lightGrey,
              background: 'transparent',
              boxShadow: 'none',
              fontSize: '0.95rem',
              fontFamily: 'Arial',
              width: 'auto',
              paddingLeft: 0,
            }}
            iconStyles={{
              paddingRight: '5px',
              paddingLeft: '0px',
              width: '1rem',
              height: '1rem',
            }}
          />
          <Button
            text="Enviar"
            loadingText="Enviando"
            iconPosition="left"
            type="submit"
            className="darkBlue"
            buttonStyles={{ marginRight: 0 }}
          />
        </ButtonWrapper>
      }
    >
      <Wrapper>
        <Input
          type="text"
          name="name"
          placeholder={name}
          label="Título"
          inputContainerClassName="input-container"
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          name="desc"
          label="Descripción"
          placeholder={desc}
          inputContainerClassName="input-container"
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          name="m2"
          label="Superficie total"
          placeholder={m2}
          inputContainerClassName="input-container"
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          name="habitaciones"
          label="Número de habitaciones"
          placeholder={habitaciones}
          inputContainerClassName="input-container"
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          name="price"
          label="Precio"
          placeholder={price}
          inputContainerClassName="input-container"
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          name="gastosIncluidos"
          label="Gastos Incluidos"
          placeholder={gastosIncluidos ? 'si' : 'no'}
          inputContainerClassName="input-container"
        />
      </Wrapper>
      <Wrapper>
        <Map lat={lat} lgn={long} />
      </Wrapper>

      {/* <StyledSmall>{error}</StyledSmall> */}
    </Modal>
  )
}

EditAdModal.propTypes = {
  ad: PropTypes.string,
  active: PropTypes.bool,
  hideModal: PropTypes.bool,
}

export default EditAdModal
