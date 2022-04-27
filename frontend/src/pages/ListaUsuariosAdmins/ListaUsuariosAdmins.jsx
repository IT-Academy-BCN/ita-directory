import React, { useState, useMemo, useCallback, useEffect } from 'react'
import {
  faUserClock,
  faUserCheck,
  faUserAltSlash,
  faTrash,
  faEye,
} from '@fortawesome/free-solid-svg-icons'
import Body from '../../components/layout/Body/Body'
import { Container } from '../../theme'
import { colors } from '../../theme'
import ReactTable from '../../components/organisms/Table/ReactTable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UserModal from '../../components/organisms/UserModal/UserModal.jsx'
import DeleteModal from '../../components/organisms/DeleteModal/DeleteModal.jsx'
import EditProfile from '../../components/organisms/EditProfileModal/EditProfile.jsx'
import patchUser from '../../api/utils/patchUser'

// Styles
import { StyledTableWrapper, StyledImage, StyledCell } from './ListaUsuariosAdmins.style'
// import {array} from "prop-types";

const ListaUsuariosAdmins = () => {
  //if active show Modal Status
  const [showModalStatus, setShowModalStatus] = useState(false)

  const [dataUsers, setDataUsers] = useState([])
  const data = useMemo(() => [...dataUsers], [dataUsers])

  //Delete user
  const [eliminar, setEliminar] = useState(false)
  const [currentColum, setCurrentColum] = useState('')

  // Current user
  const [currentName, setCurrentName] = useState('')
  const [editar, setEditar] = useState(false)
  const [currentUserStatus, setCurrentUserStatus] = useState('')

  //Edit Profile
  const [currentEmail, setCurrentEmail] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      await fetch('http://localhost:10910/users', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
        .then((response) => {
          return response.json()
        })
        .then((dataUsers) => {
          const newDataUsers = dataUsers.filter((user) => user.user_status_id !== 4)
          setDataUsers(newDataUsers)
        })
    }

    fetchData()
  }, [])

  const handleModalDelete = useCallback((userRow) => {
    setCurrentColum(userRow)
    setEliminar((prev) => !prev)
  }, [])

  const handleModalEdit = useCallback((name, email) => {
    setCurrentName(name)
    setCurrentEmail(email)
    setEditar((prev) => !prev)
  }, [])

  const updateDelete = useCallback(
    (userName) => {
      dataUsers.forEach((user) => {
        if (user.name === userName.name) {
          patchUser({
            ...user,
            user_status_id: 4,
          })
        }
      })

      const newUsers = dataUsers.filter((user) => {
        if (user.email.localeCompare(currentColum.email) !== 0) {
          return true
        } else {
          return false
        }
      })
      setDataUsers(newUsers)
    },
    [dataUsers, currentColum]
  )

  const updateUserData = useCallback(
    (newName, newEmail) => {
      setDataUsers(
        dataUsers.map((item) => {
          if (item.name === currentName || item.email === currentEmail) {
            setCurrentUserStatus(item.user_status_id)
            setCurrentName(item.name)
            patchUser({
              ...item,
              email: newEmail,
              name: newName,
            })
          }
          return item.name === currentName || item.email === currentEmail
            ? { ...item, name: newName, email: newEmail }
            : item
        })
      )
    },
    [dataUsers, currentName, currentEmail]
  )

  const updateUserStatus = useCallback(
    (name, userStatus) => {
      function evaluateStatus(status) {
        if (status === 'rejected') return 3
        if (status === 'pending') return 2
        if (status === 'aprobado') return 1
      }
      setDataUsers(
        dataUsers.map((user) => {
          if (user.name === name) {
            patchUser({ ...user, user_status_id: evaluateStatus(userStatus) })
            return { ...user, user_status_id: evaluateStatus(userStatus) }
          } else {
            return user
          }
        })
      )
    },
    [dataUsers]
  )

  const handleModalStatus = useCallback((name, userStatus) => {
    setShowModalStatus((prev) => !prev)
    setCurrentUserStatus(userStatus)
    setCurrentName(name)
  }, [])

  const customRowStyle = () => {
    return { borderTop: `0.9px solid ${colors.bahamaBlue}` }
  }

  const columns = useMemo(
    () => [
      {
        Header: (
          <StyledCell color={colors.bahamaBlue} paddingL="0px">
            Foto
          </StyledCell>
        ),
        accessor: 'media',
        Cell: ({ row }) => (
          <StyledCell>
            {
              <StyledImage
                src={
                  row.values.media[0] !== undefined
                    ? row.values.media[0].path
                    : `https://randomuser.me/api/portraits/women/${Math.floor(
                        Math.random() * 100
                      )}.jpg`
                }
                alt="foto"
                width="50px"
                height="50px"
              />
            }
          </StyledCell>
        ),
        minWidth: '32px',
      },
      {
        Header: (
          <StyledCell color={colors.bahamaBlue} padding="0">
            Nombre
          </StyledCell>
        ),
        accessor: 'name',
        Cell: ({ row }) => <StyledCell color={colors.bahamaBlue}>{row.values.name}</StyledCell>,
        minWidth: '50px',
      },
      {
        Header: <StyledCell color={colors.bahamaBlue}>Email</StyledCell>,
        accessor: 'email',
        Cell: ({ row }) => <StyledCell color={colors.prussianBlue}>{row.values.email}</StyledCell>,
        minWidth: '60px',
      },
      {
        Header: (
          <StyledCell color={colors.bahamaBlue} justify={'center'}>
            Acciones
          </StyledCell>
        ),
        accessor: 'user_status_id',
        minWidth: '60px',
        Cell: ({ row }) => (
          <div className="actions-column">
            <button onClick={() => handleModalStatus(row.values.name, row.values.user_status_id)}>
              <FontAwesomeIcon
                icon={
                  row.values.user_status_id === 3
                    ? faUserAltSlash
                    : row.values.user_status_id === 1
                    ? faUserCheck
                    : faUserClock
                }
                color={
                  row.values.user_status_id === 3
                    ? colors.redColor
                    : row.values.user_status_id === 1
                    ? colors.darkGreen
                    : colors.grey
                }
              />
            </button>
            <button
              onClick={() => handleModalEdit(row.values.name, row.values.email, row.values.id)}
            >
              <FontAwesomeIcon icon={faEye} color={colors.prussianBlue} />
            </button>
            <button onClick={() => handleModalDelete(row.values)}>
              <FontAwesomeIcon icon={faTrash} color={colors.redColor} />
            </button>
          </div>
        ),
      },
    ],
    [handleModalDelete, handleModalEdit, handleModalStatus]
  )

  return (
    <Body
      title="Usuarios registrados"
      logoColor={colors.bahamaBlue}
      headerColor={colors.bahamaBlue}
      fontColor={colors.white}
      justifyTitle="flex-start"
      paddingTitle="0px"
      paddingTitle2="73px"
      isLoggedIn="true"
    >
      <Container row>
        <StyledTableWrapper>
          <ReactTable columns={columns} data={data} customRowStyle={customRowStyle} />
        </StyledTableWrapper>
      </Container>
      <UserModal
        nombreUsuario={currentName}
        currentUserState={currentUserStatus}
        active={showModalStatus}
        hideModal={() => setShowModalStatus((prev) => !prev)}
        updateUserStatus={updateUserStatus}
      />
      <DeleteModal
        columnSelect={currentColum}
        currentUserName={currentName}
        active={eliminar}
        hideModal={() => setEliminar(false)}
        updateDelete={updateDelete}
      />
      <EditProfile
        currentNombre={currentName}
        currentEmail={currentEmail}
        active={editar}
        hideModal={() => setEditar(false)}
        updateUserData={updateUserData}
        setCurrentNombre={setCurrentName}
      />
    </Body>
  )
}
export default ListaUsuariosAdmins
