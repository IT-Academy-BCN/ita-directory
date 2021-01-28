import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Body from 'components/layout/Body/Body'

const Registration = (props) => {
  const [userName, setUsername] = useState('')
  const [email, setEmail] = useState()

  const changeName = () => {
    setUsername('Kevin')
  }
  return (
    <Body>
      <div>Aquí va la info de registrada de:{userName}</div>
      <Link to='/login'>tienes una cuenta? Inicia sesion</Link>
    </Body>
  )
}

export default Registration
