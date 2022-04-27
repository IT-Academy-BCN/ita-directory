import { useState, useEffect } from 'react'
import axios from 'axios'
import Body from '../../components/layout/Body/Body'
import InputNumber from '../../components/atoms/InputNumber/InputNumber'
import TextArea from '../../components/atoms/TextArea/TextArea'
import Button from '../../components/atoms/Button/Button'
import Input from '../../components/atoms/Input/Input'
import Modal from '../../components/organisms/Modal/Modal'
import {
  faMapMarkerAlt,
  faBed,
  faEuroSign,
  faHome,
  faBath,
} from '@fortawesome/free-solid-svg-icons'
import {
  Wrapper,
  MapText,
  MapBox,
  CsvNotificationError,
  CsvNotificationSuccess,
} from './CreateNewAd.styles'
import { Container } from '../../theme'
import CustomMap from '../../components/organisms/Map/CustomMap/CustomMap'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import newAdSchema from '../../validation/createNewAdSchema.js'
import { useDispatch } from 'react-redux'
import { newNotification, NotificationTypes } from '../../store/notificationSlice'

const CreateNewAd = () => {
  const emptyForm = {
    user_id: 1,
    title: '',
    description: '',
    city: '',
    n_rooms: '',
    price: '',
    square_meters: '',
    n_bathrooms: '',
    map_lat: 0,
    map_lon: 0,
  }
  const [form, setForm] = useState(emptyForm)
  const [submittedData, setSubmittedData] = useState('') //@todo -> remove -probably unecessary
  const [error, setError] = useState(true)
  const [successfulPost, setSuccessfulPost] = useState(false)
  const [coordinates, setCoordinates] = useState([])
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(newAdSchema),
  })
  const dispatch = useDispatch

  const postAd = async (formInfo) => {
    try {
      const res = await axios({
        method: 'post',
        url: 'http://localhost:5000/ads/v1/post-ad',
        data: formInfo,
      })
      await console.log(res)
      await setSuccessfulPost((prev) => true)
      await setTimeout(() => setSuccessfulPost((prev) => false), 3000)
      dispatch(
        newNotification({
          message: 'Tu anuncio ha sido publicado con exito.',
          type: NotificationTypes.succes,
        })
      )
    } catch (err) {
      console.log(err)
      setError((prev) => true)
      setTimeout(() => setError((prev) => false), 3000)
      dispatch(
        newNotification({
          message: 'Ha habido un error. Vuelve ha intentar ahora o mas tarde',
          type: NotificationTypes.error,
        })
      )
    }
  }

  useEffect(() => {
    setForm({
      ...form,
      map_lat: Number(coordinates[0]),
      map_lon: Number(coordinates[1]),
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coordinates])

  /* useEffect(() => {
		if (error) {
			setError(false);
			dispatch(
				newNotification({
					message: "Ha habido un error. Vuelve ha intentar ahora o mas tarde",
					type: NotificationTypes.error,
				})
			)
		}
		if (successfulPost) {
			setSuccessfulPost(false)
			dispatch(
				newNotification({
					message: "Tu anuncio ha sido publicado con exito.",
					type: NotificationTypes.succes,
				})
			)
		} 
	}, []); */

  const submitForm = (data) => {
    const formInfo = {
      ...form,
      ...data,
      map_lat: Number(coordinates[0]),
      map_lon: Number(coordinates[1]),
    }
    postAd(formInfo)
    setSubmittedData(JSON.stringify(formInfo, 0, 2))
    //variables reset
    setForm(emptyForm)
    setError((prev) => false)
    setSuccessfulPost((prev) => false)
    setTimeout(() => setSubmittedData(''), 5000)
  }

  const inputComponentData = [
    {
      Component: InputNumber,
      type: 'text',
      label: 'Título',
      name: 'title',
      required: true,
      inputContainerClassName: 'style-input-create-new-ad',
    },
    {
      Component: TextArea,
      type: 'text',
      label: 'Descripción',
      name: 'description',
      inputContainerClassName: 'style-input-create-new-ad', // textAreaCreateNewAd
    },
    {
      Component: InputNumber,
      type: 'text',
      label: 'Ciudad',
      name: 'city',
      required: true,
      inputContainerClassName: 'style-input-create-new-ad',
      icon: faMapMarkerAlt,
    },
    {
      Component: InputNumber,
      type: 'number',
      label: 'Habitaciones',
      name: 'n_rooms',
      icon: faBed,
      inputClassName: 'style-input-create-new-ad',
    },
    {
      Component: InputNumber,
      type: 'number',
      label: 'Precio',
      name: 'price',
      required: true,
      icon: faEuroSign,
      inputClassName: 'style-input-create-new-ad',
    },
    {
      Component: InputNumber,
      type: 'number',
      label: 'M\u00B2',
      name: 'square_meters',
      required: true,
      icon: faHome,
      inputClassName: 'style-input-create-new-ad',
    },
    {
      Component: InputNumber,
      type: 'number',
      label: 'Baños',
      name: 'n_bathrooms',
      icon: faBath,
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

      console.table(Object.fromEntries(f))

      await axios
        .post('http://localhost:10910/ads/v1/post-ads-csv', f, {
          headers: {
            'Content-Type': 'multipart/form-data',
            authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJpdGFjYWRlbXkiLCJzdWIiOnsidXNlcl9pZCI6IjlSQUtkMk9iSk0ifSwiaWF0IjoxNjQ3NDIxMDE3LCJleHAiOjE2NDc0MjE5MTd9.bJvx65yQRxtHA3aaU42_juZ2I5Q04bok3zqwWR8bO_A',
          },
        })
        .then((response) => {
          console.log(response.data)
          setValidCsvFile(true)
        })
        .catch((error) => {
          console.log(error)
          setValidCsvFile(false)
        })
    }
    setValidCsv(null)
    setOpenModal(false)
  }

  return (
    <>
      {/* <HeaderContent>
					<h2>Publicar Anuncio</h2>
				</HeaderContent> */}
      <Body
        title="Publicar anuncio"
        justifyTitle="flex-start"
        paddingTitle="500px"
        paddingTitle2="15vw"
        isLoggedIn="true"
        isTitleVisible="true"
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
              <Input
                type="file"
                accept=".csv"
                onChange={(e) => updateCsvFiles(e.target.files[0])}
              />

              {validCsv == null ? (
                <></>
              ) : validCsv === false ? (
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
                onClick={() => submitCsv()}
              />
            </Modal>

            {validCsvFile == null ? (
              <></>
            ) : validCsvFile === false ? (
              dispatch(
                newNotification({
                  message: 'Tus anuncios no se han podido publicar.',
                  type: NotificationTypes.error,
                })
              )
            ) : (
              dispatch(
                newNotification({
                  message: 'Tus anuncios han sido publicados con éxito',
                  type: NotificationTypes.succes,
                })
              )
            )}

            <form onSubmit={handleSubmit(submitForm)} noValidate>
              {inputComponentData.map((el, i) => {
                const {
                  Component,
                  label,
                  type,
                  name,
                  inputClassName,
                  icon,
                  inputContainerClassName,
                } = el
                return (
                  <div key={i}>
                    <div className="form-label">
                      <label>{label}</label>
                    </div>
                    <Component
                      key={i}
                      type={type}
                      name={name}
                      className={inputClassName}
                      icon={icon && icon}
                      inputContainerClassName={inputContainerClassName}
                      register={register(`${name}`)}
                      error={errors[name]?.message}
                    />
                  </div>
                )
              })}
              <MapText>Índica la dirección de la propiedad pinchando sobre el mapa.</MapText>
              <MapBox>
                <CustomMap setCoordinates={setCoordinates} />
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
    </>
  )
}

export default CreateNewAd
