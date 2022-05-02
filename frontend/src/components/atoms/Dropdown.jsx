// create dropdown component with props using useClickOutside hook
import React, { useState, useRef, useEffect } from 'react'
import PropType from 'prop-types'
import { Link } from 'react-router-dom'

function Dropdown({ isLoggedIn, profilePicture }) {
  const ref = useRef(null)

  const [dropdownVisible, setDropdownVisible] = useState(false)

  const handleClick = () => {
    setDropdownVisible(!dropdownVisible)
  }

  useOnClickOutside(ref, () => setDropdownVisible(false))

  return (
    <div className="header__profile-dropdown">
      {isLoggedIn ? (
        <div ref={ref} className="header__profile">
          <button type="button" className="header__profile-button" onClick={handleClick}>
            <img className="header__profile-image" src={profilePicture} alt="Profile" />
            <span className="header__profile-title">Mi perfil</span>
          </button>
          {dropdownVisible ? (
            <div className="header__profile-dropdown">
              <ul>
                <li>
                  <Link to="/profile">Editar perfil</Link>
                </li>
                <li>
                  <Link to="/my-bills">Mis facturas</Link>
                </li>
                <li>
                  <Link to="/user-ads">Mis Anuncios</Link>
                </li>
                <li>
                  <Link to="/new-ad">Publicar Anuncio</Link>
                </li>
                <li>
                  <Link to="/ads">Anuncios</Link>
                </li>
                <li>
                  <Link to="/">Cerrar sesión</Link>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}

Dropdown.propTypes = {
  isLoggedIn: PropType.bool.isRequired,
  profilePicture: PropType.string.isRequired,
}

export default Dropdown

// useOnClickOutside Hook for dropdown
function useOnClickOutside(ref, handler) {
  useEffect(() => {
    function listener(e) {
      if (!ref.current || ref.current.contains(e.target)) {
        return
      }
      handler(e)
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}
