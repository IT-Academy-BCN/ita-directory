import { useState } from 'react'
import PropType from 'prop-types'
import BarGraphic from './BarGraphic'
import ModalGraphic from '../../ModalGraphic/ModalGraphic'

function BarChart({ data, size, year, month }) {
  const [active, setActive] = useState(false)
  const hideModal = () => setActive(!active)

  return (
    <div>
      <BarGraphic
        data={data}
        active={active}
        size={size}
        hideModal={() => hideModal()}
        year={year}
        month={month}
      />
      <ModalGraphic active={active} hideModal={hideModal}>
        <BarGraphic
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

BarChart.propTypes = {
  data: PropType.object,
  size: PropType.number,
  year: PropType.number,
  month: PropType.number,
}

export default BarChart
