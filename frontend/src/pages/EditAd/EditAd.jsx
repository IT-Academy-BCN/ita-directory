/* eslint-disable prefer-object-spread */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

// Styles
import Container from '../../theme/globalStyles'
import { Map } from '../../components/organisms'
import Button from '../../components/atoms/Button'
import InputGroupNumber from '../../components/molecules/InputGroupNumber'
import Input from '../../components/atoms/Forms/Input'
import Body from '../../components/layout/Body/Body'
import { Wrapper, MapText } from './EditAd.styles'
import TextArea from '../../components/molecules/TextAreaGroup'

function EditAd(props) {
  const originalAd = Object.assign({}, props.location.state.ad)
  const { geometry, id } = props.location.state.ad

  const [ad, setAd] = useState(originalAd)
  const [submittedData, setSubmittedData] = useState('')
  const [position, setPosition] = useState(geometry)

  const handleChange = (e) => {
    const { name, value, type } = e.target
    setAd({
      ...ad,
      [name]: type === 'number' ? parseInt(value, 10) : value,
    })
  }

  const handleMapClick = (latlng) => {
    setPosition(latlng)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmittedData(JSON.stringify({ ...ad, geometry: position, id }, 0, 2))
    // if using an API, delete the stringify and pass the object to the API
  }

  const history = useHistory()
  const handleCancel = (e) => {
    e.preventDefault()
    history.goBack()
  }

  const inputComponentData = [
    {
      Component: Input,
      type: 'text',
      label: 'Título',
      name: 'title',
      required: true,
      inputContainerClassName: 'createNewAd',
    },
    {
      Component: TextArea,
      type: 'text',
      label: 'Descripción',
      name: 'description',
      inputContainerClassName: 'textAreaCreateNewAd',
    },
    {
      Component: Input,
      type: 'text',
      label: 'Ciudad',
      name: 'city',
      required: true,
      inputContainerClassName: 'createNewAd',
      icon: 'Map',
    },
    {
      Component: InputGroupNumber,
      label: 'Habitaciones',
      name: 'numRooms',
      icon: 'Bed',
      inputClassName: 'style-input-create-new-ad',
    },
    {
      Component: InputGroupNumber,
      label: 'Precio',
      name: 'monthlyRent',
      required: true,
      icon: 'Euro',
      inputClassName: 'style-input-create-new-ad',
    },
    {
      Component: InputGroupNumber,
      label: 'M\u00B2',
      name: 'squareMeters',
      required: true,
      icon: 'Home',
      inputClassName: 'style-input-create-new-ad',
    },
    {
      Component: InputGroupNumber,
      label: 'Baños',
      name: 'numBaths',
      icon: 'Bathtub',
      inputClassName: 'style-input-create-new-ad',
    },
  ]

  return (
    <div>
      <Body title="Editar anuncio" isLoggedIn>
        <Container>
          <Wrapper>
            <form onSubmit={handleSubmit}>
              {inputComponentData.map((el) => {
                const { Component } = el
                return (
                  <Component
                    key={el.name}
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
                )
              })}
              <MapText>Índica la dirección de la propiedad pinchando sobre el mapa.</MapText>
              <Map geometry={position} onClick={handleMapClick} />
              <Button
                buttonStyles={{ width: '7.25rem', height: '2.125rem' }}
                text="Editar"
                type="normal"
                className="blue-gradient"
              />
              <Button
                buttonStyles={{
                  width: '7.25rem',
                  height: '2.125rem',
                  marginLeft: '20px',
                }}
                text="Volver"
                onClick={handleCancel}
                type="normal"
                className="orange-gradient"
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
    </div>
  )
}

export default EditAd
