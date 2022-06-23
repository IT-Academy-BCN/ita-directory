/* eslint-disable no-unused-vars */
import React from 'react'
import Body from '../../components/layout/Body/Body'

function SalesByType(hideFooter, dashboard) {
  return (
    <Body hideFooter={hideFooter} dashboard={dashboard} title="Ventas por categoría" isLoggedIn>
      {/* <CardWrapper /> */}
    </Body>
  )
}

export default SalesByType
