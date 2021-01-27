import React, { useState } from 'react'
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
    </Body>
  )
}

export default Registration
