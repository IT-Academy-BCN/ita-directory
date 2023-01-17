import React, { useState, useCallback } from 'react'
import PieGraphicWithD3 from './PieGraphicWithD3'
import ModalGraphic from '../../ModalGraphic/ModalGraphic'

type TPropsPieChart = {
  data: Array<TPropertyDate>
  year: string
  month: string
}

type TPropertyDate = {
  day: Date
  pisos: number
  garajes: number
  locales: number
  chalets: number
}

function PieChart({ data, year, month }: TPropsPieChart) {
  const [active, setActive] = useState(false)
  const hideModal = useCallback(() => {
    setActive(!active)
  }, [active])

  return (
    <div>
      <PieGraphicWithD3
        data={data}
        active={active}
        hideModal={hideModal}
        year={year}
        month={month}
      />
      <ModalGraphic active={active} hideModal={hideModal}>
        <PieGraphicWithD3
          data={data}
          active={active}
          hideModal={hideModal}
          year={year}
          month={month}
        />
      </ModalGraphic>
    </div>
  )
}

export default PieChart
