import React from 'react'

// Styles
import { Logo, Credits, Anchor, Rights, Information, Legal, StyledFooter } from './Footer.styles'
import { Container } from '../../../theme'
import logo from '../../../assets/logos/logo.png'

function Footer() {
  return (
    <Container column>
      <StyledFooter className="footer">
        <Logo>
          <div className="footer__logo">
            <img className="footer__logo-image" src={logo} alt="corporate logo" />
            <p className="footer__logo-text">_directory</p>
          </div>
          <Credits>
            <p>
              Diseñado por{' '}
              <span>
                <a href="https://www.linkedin.com/in/kevinmamaqi/">Kevin Mamaqi Kapllani</a>
              </span>
            </p>
            <p>
              para{' '}
              <span>
                <a href="https://www.barcelonactiva.cat/es/itacademy">
                  ITAcademy de Barcelona Activa
                </a>
              </span>
            </p>
          </Credits>
        </Logo>

        <Information>
          <Rights>Todos los derechos reservados.</Rights>
          <Legal>
            <Anchor href="#">Aviso Legal</Anchor>
            {' - '}
            <Anchor href="#">Privacidad</Anchor>
            {' - '}
            <Anchor href="#">Cookies</Anchor>
          </Legal>
        </Information>
      </StyledFooter>
    </Container>
  )
}

export default Footer
