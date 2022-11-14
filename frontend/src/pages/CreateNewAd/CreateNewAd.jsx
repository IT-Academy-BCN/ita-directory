import { useState, useEffect } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch } from 'react-redux'
import newAdSchema from '../../validation/createNewAdSchema'
import { newNotification, NotificationTypes } from '../../store/notificationSlice'
import Body from '../../components/layout/Body/Body'
import TextArea from '../../components/atoms/Forms/TextArea'
import Button from '../../components/atoms/Button'
import Input from '../../components/atoms/Forms/Input'
import Modal from '../../components/organisms/Modal/Modal'
import {
  Wrapper,
  MapText,
  MapBox,
  CsvNotificationError,
  CsvNotificationSuccess,
} from './CreateNewAd.styles'
import { Container } from '../../theme'
import CustomMap from '../../components/organisms/Map/CustomMap/CustomMap'
import { Label } from '../../components/atoms'
import { InputGroupNumber } from '../../components/molecules'
import InputGroupText from '../../components/molecules/InputGroupText'

function CreateNewAd() {
  const emptyForm = {
    userId: 1,
    title: '',
    description: '',
    city: '',
    nRooms: '',
    price: '',
    squareMeters: '',
    nBathrooms: '',
    mapLat: 0,
    mapLon: 0,
  }
  const [form, setForm] = useState(emptyForm)
  const [submittedData, setSubmittedData] = useState('') // @todo -> remove -probably unecessary
  const [, setError] = useState(true)
  const [, setSuccessfulPost] = useState(false)
  const [coordinates, setCoordinates] = useState([41.38879, 2.15899])
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(newAdSchema),
  })
  const dispatch = useDispatch()

  const postAd = async (formInfo) => {
    try {
      //   console.log(res)
      setSuccessfulPost(() => true)
      setTimeout(() => setSuccessfulPost(() => false), 3000)
      dispatch(
        newNotification({
          message: 'Tu anuncio ha sido publicado con exito.',
          type: NotificationTypes.succes,
        })
      )
    } catch (err) {
      //   console.log(err)

      dispatch(
        newNotification({
          message: 'Ha habido un error. Vuelve ha intentar ahora o mas tarde',
          type: NotificationTypes.error,
        })
      )
    }
  }

  const [city, setCity] = useState('')
  const [address, setAddress] = useState('')
  const [listPlace, setListPlace] = useState(null)

  /* useEffect(() => {
    if (listPlace.length !== 0) {
      setForm({
        ...form,
        mapLat: listPlace[0].lat,
        mapLon: listPlace[0].lon,
      })
    }
  }, [coordinates]) */

  useEffect(() => {
    setForm({
      ...form,
      mapLat: Number(coordinates[0]),
      mapLon: Number(coordinates[1]),
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coordinates])

  const submitForm = (data) => {
    const formInfo = {
      ...form,
      ...data,
      mapLat: Number(coordinates[0]),
      mapLon: Number(coordinates[1]),
    }
    postAd(formInfo)
    setSubmittedData(JSON.stringify(formInfo, 0, 2))
    // variables reset
    setForm(emptyForm)
    setError(() => false)
    setSuccessfulPost(() => false)
    /*  setTimeout(() => setSubmittedData(''), 5000) */
  }

  const inputComponentData = [
    {
      Component: InputGroupText,
      id: 'title',
      name: 'title',
      label: 'Título',
      hiddenLabel: true,
      required: true,
      inputContainerClassName: 'style-input-create-new-ad',
    },
    {
      id: 'description',
      name: 'description',
      Component: TextArea,
      type: 'textarea',
      label: 'Descripción',
      hiddenLabel: false,
      inputContainerClassName: 'style-input-create-new-ad', // textAreaCreateNewAd
    },
    {
      Component: InputGroupText,
      id: 'city',
      name: 'city',
      label: 'Ciudad',
      hiddenLabel: true,
      required: true,
      inputContainerClassName: 'style-input-create-new-ad',
      icon: 'location_on',
    },
    {
      Component: InputGroupNumber,
      id: 'nRooms',
      label: 'Habitaciones',
      hiddenLabel: true,
      name: 'nRooms',
      icon: 'bed',
      inputClassName: 'style-input-create-new-ad',
    },
    {
      Component: InputGroupNumber,
      id: 'price',
      name: 'price',
      label: 'Precio',
      hiddenLabel: true,
      required: 'merluza',
      icon: 'euro',
      inputClassName: 'style-input-create-new-ad',
    },
    {
      Component: InputGroupNumber,
      id: 'squareMeters',
      name: 'squareMeters',
      label: 'M\u00B2',
      hiddenLabel: true,
      required: true,
      icon: 'home',
      inputClassName: 'style-input-create-new-ad',
    },
    {
      Component: InputGroupNumber,
      id: 'nBathrooms',
      name: 'nBathrooms',
      label: 'Baños',
      hiddenLabel: true,
      icon: 'bathtub',
      inputClassName: 'style-input-create-new-ad',
    },
  ]

  const [openModal, setOpenModal] = useState(false)
  const [csvFile, setCsvFile] = useState(null)
  const [validCsv, setValidCsv] = useState(null)
  const [validCsvFile, setValidCsvFile] = useState(null)

  const updateCsvFiles = (e) => {
    setCsvFile(e)
  }

  const submitCsv = async () => {
    if (csvFile == null) {
      setValidCsvFile(false)
    } else {
      const f = new FormData()
      f.append('some_csv', csvFile)

      await axios
        .post(`${import.meta.env.VITE_API_URL}/ads/post-ads-csv`, f, {
          headers: {
            'Content-Type': 'multipart/form-data',
            authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJpdGFjYWRlbXkiLCJzdWIiOnsidXNlcl9pZCI6IjlSQUtkMk9iSk0ifSwiaWF0IjoxNjQ3NDIxMDE3LCJleHAiOjE2NDc0MjE5MTd9.bJvx65yQRxtHA3aaU42_juZ2I5Q04bok3zqwWR8bO_A',
          },
        })
        .then((response) => {
          //   console.log(response.data)
          setValidCsvFile(true)
        })
        .catch((error) => {
          //   console.log(error)
          setValidCsvFile(false)
        })
    }
    setValidCsv(null)
    setOpenModal(false)
  }

  const NOMINATIM_BASE_URL = 'https://nominatim.openstreetmap.org/search?'
  let params = {
    q: '',
    format: 'json',
    addressdetails: 'addressdetails',
  }

  const handleSearch = () => {
    params = {
      q: `${address}, ${city}, Barcelonés, Spain`,
      format: 'json',
      addressdetails: 1,
      polygon_geojson: 0,
    }
    /*     console.log(params) */
    const queryString = new URLSearchParams(params).toString()
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    }
    fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        // console.log('result', JSON.parse(result))
        setListPlace(JSON.parse(result))
      })
      .catch((err) => err)
    listPlace && setCoordinates(() => [Number(listPlace[0].lat), Number(listPlace[0].lon)])
    // console.log('1', coordinates)
  }

  // console.log('2 ', coordinates)

  return (
    <Body
      title="Publicar anuncio"
      justifyTitle="flex-start"
      paddingTitle="500px"
      paddingTitle2="15vw"
      isLoggedIn
    >
      <Container>
        <Wrapper>
          <Button
            buttonStyles={{
              width: '17.25rem',
              height: '2.125rem',
              marginBottom: '2rem',
            }}
            text="Cargar Archivo CSV"
            type="normal"
            className="green-gradient"
            onClick={() => setOpenModal(true)}
          />
          <Modal active={openModal} hideModal={() => setOpenModal(false)}>
            <Input type="file" accept=".csv" onChange={(e) => updateCsvFiles(e.target.files[0])} />

            {validCsv === null && null}
            {validCsv === false ? (
              <CsvNotificationError>
                <p>Archivo No Válido</p>
              </CsvNotificationError>
            ) : (
              <CsvNotificationSuccess>
                <p>Archivo Válido</p>
              </CsvNotificationSuccess>
            )}
            <Button
              buttonStyles={{
                width: '17rem',
                height: '2.125rem',
                marginBottom: '2rem',
              }}
              text="Subir Archivo"
              type="normal"
              className="green-gradient"
              onClick={() => {
                submitCsv()
                dispatch(
                  newNotification({
                    message:
                      validCsvFile === false
                        ? 'Tus anuncios no se han podido publicar.'
                        : 'Tus anuncios han sido publicados con éxito',
                    type:
                      validCsvFile === false ? NotificationTypes.error : NotificationTypes.succes,
                  })
                )
              }}
            />
          </Modal>

          {}

          <form onSubmit={handleSubmit(submitForm)} noValidate>
            {inputComponentData.map((el, i) => {
              const {
                Component,
                label,
                hiddenLabel,
                type,
                name,
                id,
                inputClassName,
                icon,
                inputContainerClassName,
              } = el
              return (
                <div key={label}>
                  <div className="form-label">
                    <Label label={label} htmlFor={id} />
                  </div>
                  <Component
                    id={id}
                    key={id}
                    label={label}
                    hiddenLabel={hiddenLabel}
                    name={name}
                    type={type}
                    className={inputClassName}
                    icon={icon}
                    inputContainerClassName={inputContainerClassName}
                    register={register(`${name}`)}
                    error={errors[name]?.message}
                  />
                </div>
              )
            })}
            <input
              value={address}
              placeholder="Direccion"
              onChange={(event) => {
                setAddress(event.target.value)
              }}
            />
            <input
              value={city}
              placeholder="Ciudad"
              onChange={(event) => {
                setCity(event.target.value)
              }}
            />
            <button type="button" onClick={handleSearch}>
              Buscar
            </button>
            <MapText>Índica la dirección de la propiedad pinchando sobre el mapa.</MapText>
            <MapBox>
              <CustomMap setCoordinates={setCoordinates} coordinates={coordinates} />
            </MapBox>
            <Button
              buttonStyles={{
                width: '7.25rem',
                height: '2.125rem',
                marginBottom: '2rem',
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
  )
}

export default CreateNewAd
