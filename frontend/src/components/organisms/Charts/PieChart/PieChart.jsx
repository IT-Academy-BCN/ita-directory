import { useState } from 'react'
import PropType from 'prop-types'
import PieGraphicWithD3 from './PieGraphicWithD3'
import ModalGraphic from '../../ModalGraphic/ModalGraphic'

function PieChart({ data, size, year, month }) {
  const [active, setActive] = useState(false)
  const hideModal = () => setActive(!active)

  return (
    <div>
      <PieGraphicWithD3
        data={data}
        size={size}
        active={active}
        hideModal={() => hideModal()}
        year={year}
        month={month}
      />
      <ModalGraphic active={active} hideModal={hideModal}>
        <PieGraphicWithD3
          data={data}
          size={size}
          active={active}
          hideModal={() => hideModal()}
          year={year}
          month={month}
        />
      </ModalGraphic>
    </div>
  )
}

PieChart.propTypes = {
  data: PropType.object,
  size: PropType.number,
  year: PropType.number,
  month: PropType.number,
}

export default PieChart
