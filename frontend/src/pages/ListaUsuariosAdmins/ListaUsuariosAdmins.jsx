import React, { useState, useMemo, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import Body from '../../components/layout/Body/Body'
import { Container, colors } from '../../theme'
import ReactTable from '../../components/organisms/Table/ReactTable'
import { UserStatus } from '../../components/organisms'
import DeleteModal from '../../components/organisms/DeleteModal/DeleteModal'
import EditProfile from '../../components/organisms/EditProfileModal/EditProfile'
import { StyledTableWrapper, StyledImage, StyledCell } from './ListaUsuariosAdmins.style'
import { Icon } from '../../components/atoms'
import axiosInstance from '../../utils/axiosInstance'
import urls from '../../utils/urls'
import { ReqStatus, Role } from '../../utils/constant'

function MediaCell({ path }) {
  return (
    <StyledCell>
      {path ? (
        <StyledImage src={path} alt="user" width="50px" height="50px" />
      ) : (
        <Icon name="account_circle" size={50} />
      )}
    </StyledCell>
  )
}

MediaCell.propTypes = {
  path: PropTypes.string,
}

const getStatusIcon = (userStatusId) => {
  switch (userStatusId) {
    case 3:
      return 'person_off'
    case 1:
      return 'how_to_reg'
    default:
      return 'browse_gallery'
  }
}

const getStatusColor = (userStatusId) => {
  switch (userStatusId) {
    case 3:
      return colors.redColor
    case 1:
      return colors.darkGreen
    default:
      return colors.grey
  }
}

function ActionsColumn({ row, handleModalStatus, handleModalEdit, handleModalDelete }) {
  const { values } = row
  const { id, name, email, userStatusId, media } = values

  return (
    <div className="actions-column">
      <button type="button" onClick={() => handleModalStatus(name, userStatusId)}>
        <Icon name={getStatusIcon(userStatusId)} color={getStatusColor(userStatusId)} />
      </button>
      <button type="button" onClick={() => handleModalEdit(name, email, id, media)}>
        <Icon name="visibility" color={colors.prussianBlue} />
      </button>
      <button type="button" onClick={() => handleModalDelete(row)}>
        <Icon name="delete" color={colors.redColor} />
      </button>
    </div>
  )
}

ActionsColumn.propTypes = {
  row: PropTypes.shape({
    values: PropTypes.shape({
      email: PropTypes.string,
      id: PropTypes.string,
      media: PropTypes.string,
      name: PropTypes.string,
      userStatusId: PropTypes.number,
    }),
  }),
  handleModalStatus: PropTypes.func,
  handleModalEdit: PropTypes.func,
  handleModalDelete: PropTypes.func,
}

function ListaUsuariosAdmins() {
  const [showModalStatus, setShowModalStatus] = useState(false)
  const [dataUsers, setDataUsers] = useState([])
  const [eliminar, setEliminar] = useState(false)
  const [currentColum, setCurrentColum] = useState('')
  const [currentName, setCurrentName] = useState('')
  const [editar, setEditar] = useState(false)
  const [currentUserStatus, setCurrentUserStatus] = useState('')
  const [currentEmail, setCurrentEmail] = useState('')
  const [reqStatus, setReqStatus] = useState(ReqStatus.INITIAL)

  useEffect(() => {
    const fetchData = async () => {
      setReqStatus(ReqStatus.PENDING)
      try {
        const res = await axiosInstance.get(urls.users)
        setReqStatus(ReqStatus.SUCCESS)

        setDataUsers(res.data)
      } catch (e) {
        setReqStatus(ReqStatus.FAILURE)
      }
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
            userStatusId: 4,
          })
        }
      })

      const newUsers = dataUsers.filter((user) => {
        if (user.email.localeCompare(currentColum.email) !== 0) {
          return true
        }
        return false
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
            setCurrentUserStatus(item.userStatusId)
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

  const updateUserStatus = async (userStatusId) => {
    try {
      axiosInstance.patch(urls.users, { userStatusId: parseInt(userStatusId, 10) })
    } catch (e) {
      throw new Error(e)
    }
  }

  const handleModalStatus = useCallback((name, userStatus) => {
    setCurrentName(name)
    setCurrentUserStatus(userStatus)
    setShowModalStatus((prev) => !prev)
  }, [])

  const customRowStyle = () => {
    return { borderTop: `0.9px solid ${colors.bahamaBlue}` }
  }

  const columns = useMemo(
    () => [
      { accessor: 'id', show: false },
      {
        Header: (
          <StyledCell color={colors.bahamaBlue} paddingL="0px">
            Foto
          </StyledCell>
        ),
        accessor: 'media',
        // eslint-disable-next-line react/prop-types
        Cell: ({ value }) => <MediaCell path={value} />,
        minWidth: '32px',
      },
      {
        Header: (
          <StyledCell color={colors.bahamaBlue} padding="0">
            Nombre
          </StyledCell>
        ),
        accessor: 'name',
        // eslint-disable-next-line react/prop-types
        Cell: ({ value }) => <StyledCell color={colors.bahamaBlue}>{value}</StyledCell>,
        minWidth: '50px',
      },
      {
        Header: <StyledCell color={colors.bahamaBlue}>Email</StyledCell>,
        accessor: 'email',
        // eslint-disable-next-line react/prop-types
        Cell: ({ value }) => <StyledCell color={colors.prussianBlue}>{value}</StyledCell>,
        minWidth: '60px',
      },
      {
        Header: (
          <StyledCell color={colors.bahamaBlue} justify="center">
            Acciones
          </StyledCell>
        ),
        accessor: 'userStatusId',
        minWidth: '60px',
        // eslint-disable-next-line react/prop-types
        Cell: ({ row }) => (
          <ActionsColumn
            row={row}
            handleModalDelete={handleModalDelete}
            handleModalEdit={handleModalEdit}
            handleModalStatus={handleModalStatus}
          />
        ),
      },
    ],
    [handleModalDelete, handleModalEdit, handleModalStatus]
  )

  const data = useMemo(
    () =>
      dataUsers &&
      dataUsers.map((du) => ({
        id: du.id,
        media: du.avatar?.path,
        name: du.name,
        email: du.email,
        userStatusId: du.userStatusId,
      })),
    [dataUsers]
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
      isLoggedIn
      userRole={Role.Admin}
    >
      <Container row>
        {(reqStatus === ReqStatus.INITIAL || reqStatus === ReqStatus.PENDING) && 'Loading...'}
        {reqStatus === ReqStatus.FAILURE && 'There was an error...'}
        {reqStatus === ReqStatus.SUCCESS && (
          <StyledTableWrapper>
            <ReactTable columns={columns} data={data} customRowStyle={customRowStyle} />
          </StyledTableWrapper>
        )}
      </Container>
      <UserStatus
        name={currentName}
        userStatusId={currentUserStatus}
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
