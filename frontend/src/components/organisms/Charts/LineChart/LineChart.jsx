import React, { useState } from 'react'
import PropType from 'prop-types'
import ModalGraphic from '../../ModalGraphic/ModalGraphic'
import LineGraphic from './LineGraphic'

function LineChart({ data, size, month, year }) {
  const [active, setActive] = useState(false)
  const hideModal = () => setActive(!active)
  return (
    <div>
      <LineGraphic
        data={data}
        active={active}
        hideModal={() => hideModal()}
        size={size}
        month={month}
        year={year}
      />
      <ModalGraphic active={active} hideModal={hideModal}>
        <LineGraphic
          data={data}
          active={active}
          size={size}
          hideModal={() => hideModal()}
          year={year}
          month={month}
        />
      </ModalGraphic>
    </div>
  )
}

LineChart.propTypes = {
  data: PropType.object,
  size: PropType.number,
  year: PropType.number,
  month: PropType.number,
}

export default LineChart
