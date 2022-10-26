import ListaUsuariosAdmins from './ListaUsuariosAdmins'
import useUser from '../../hooks/useUser'
import { Text } from '../../components/atoms'

function CheckUserRole() {
  const user = useUser()

  return (
    <div>
      {user !== null && user.userRoleId === 1 ? (
        <ListaUsuariosAdmins />
      ) : (
        <Text text="You don't have persmissions to see this content." />
      )}
    </div>
  )
}

export default CheckUserRole
