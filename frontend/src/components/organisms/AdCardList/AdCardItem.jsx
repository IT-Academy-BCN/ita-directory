import React from 'react'
import PropTypes from 'prop-types'
import { colors } from '../../../theme'
import { Button, Text, Card } from '../../atoms'
import { FlexBox } from '../../../theme/wrappers'

function AdCardItem({ ad, openSelectedAdPopup }) {
  return (
    <Card>
      <Text text={ad.description} />
      <FlexBox justifyContent="space-between" alignItems="center" padding>
        <Text as="span" text={`${ad.price}€`} fontSize="18px" />{' '}
        <Button
          buttonStyles={{ backgroundColor: colors.violet }}
          type="button"
          text="Localizar"
          onClick={openSelectedAdPopup}
        />
      </FlexBox>
    </Card>
  )
}

AdCardItem.propTypes = {
  ad: PropTypes.object,
  openSelectedAdPopup: PropTypes.string,
}

export default AdCardItem
