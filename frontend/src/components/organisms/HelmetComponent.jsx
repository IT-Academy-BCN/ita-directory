import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function HelmetComponent({ text }) {
  return (
    <Helmet>
      <title>{text}</title>
    </Helmet>
  )
}
