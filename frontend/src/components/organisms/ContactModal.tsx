// @ts-nocheck
import React, { useState } from 'react'
import styled from 'styled-components'
import { FieldValues, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Label } from '../atoms'
import Modal from './Modal/Modal'
// import Input from '../atoms/Forms/Input'
import { InputGroup, TextArea } from '../molecules'
import { colors, font } from '../../theme'

import contactSchema from '../../validation/contactModalSchema'

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${colors.lightGray};
`

const TextAreaStyled = styled(TextArea)`
  width: 100%;
  padding: 0.5em 1rem;
  margin: 5px 0px;
  border-radius: 0.5rem;
  border: 1px solid #b0b0b0;
  font-size: 16px;
`

type TContactModal = {
  active: boolean
  hideModal: Function
}

type TData = {
  name: string
  email: string
  message: string
}

type TContact = {
  name: string
  email: string
  message: string
}

function ContactModal({ active, hideModal }: TContactModal) {
  const [animatedState, setAnimatedState] = useState(false)
  const [disabled, setIsDisabled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  })

  const submitForm = (data: FieldValues) => {
    const { name, email, message } = data as TData
    sendContact({ name, email, message }, (err: any) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log(err)
      }
    })
  }

  const sendContact = (contact: TContact, callback: (err: Error | null) => void) => {
    const { name, email, message } = contact

    setAnimatedState(true)
    setIsDisabled(true)
    setIsLoading(true)
    setTimeout(() => {
      setAnimatedState(false)
      setIsDisabled(false)
      setIsLoading(false)
      // eslint-disable-next-line no-console
      console.log(`send contact => ${name}, ${email}, ${message}`)
      callback(new Error('The message could not be sent'))
    }, 2000)
  }

  return (
    <Modal
      active={active}
      hideModal={() => hideModal()}
      title="Contactar"
      color={colors.darkRed}
      fontSize={font.sm}
    >
      <form onSubmit={handleSubmit(submitForm)}>
        <Label text="Nombre" htmlFor="name" />
        <InputGroup
          type="text"
          name="name"
          // placeholder="Nombre"
          label="Nombre"
          register={register('name')}
          error={errors.email?.message}
          className="contact-modal__textarea"
        />
        <InputGroup
          type="text"
          name="email"
          // placeholder="Email"
          label="Email"
          register={register('email')}
          error={errors.email?.message}
          className="contact-modal__textarea"
        />

        <TextAreaStyled
          name="message"
          label="Mensaje"
          id="message"
          // placeholder="Escribe aquí tu mensaje"
          className="contact-modal__textarea"
          register={register('message')}
          error={errors.message?.message}
        />
      </form>

      <ButtonWrapper>
        <Button
          text="Cancelar"
          iconPosition="left"
          type="submit"
          onClick={() => hideModal()}
          icon="cancel"
          buttonStyles={{
            color: colors.darkBlue,
            cursor: 'pointer',
            // background: 'transparent',
            boxShadow: 'none',
            fontSize: '0.95rem',
            fontFamily: 'Arial',
            width: 'auto',
            paddingLeft: 0,
          }}
          iconStyles={{
            paddingRight: '5px',
            paddingLeft: '0px',
            width: '1rem',
            height: '1rem',
          }}
        />
        <Button
          text="Enviar"
          loadingText="Enviando"
          iconPosition="left"
          type="submit"
          className="darkBlue"
          isLoading={isLoading}
          animated={animatedState}
          disabled={disabled}
          buttonStyles={{
            // position: 'absolute',
            position: 'absolute',
            bottom: '0',
            right: '0',
            width: 'auto',
            minWidth: '110px',
            marginRight: 0,
            paddingRight: '15px',
            paddingLeft: '15px',
            backgroundColor: colors.extraDarkBlue,
          }}
          iconStyles={{
            width: '1.5rem',
            height: '1.5rem',
          }}
        />
      </ButtonWrapper>
    </Modal>
  )
}

export default ContactModal
