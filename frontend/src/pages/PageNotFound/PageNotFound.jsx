import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Body from '../../components/layout/Body/Body'
import Button from '../../components/atoms/Button'

const LinkStyled = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
`

function PageNotFound() {
  return (
    <Body title="404">
      <div>
        <p>Ops, parece que la página que estás buscando no existe.</p>
        <p>Vuelve a la página de inicio. Si se trata de un error, ponte en contacto.</p>
        <LinkStyled to="/">
          <Button text="Volver a inicio" />
        </LinkStyled>
      </div>
    </Body>
  )
}

export default PageNotFound
