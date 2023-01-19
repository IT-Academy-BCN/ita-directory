import React, { useState, useCallback } from 'react'
import ModalGraphic from '../../ModalGraphic/ModalGraphic'
import LineGraphic from './LineGraphic'

type TPropsLineChart = {
  data: Array<TPropertyDate>
  year: string
  month: string
  size: number[]
}

type TPropertyDate = {
  day: Date
  pisos: number
  garajes: number
  locales: number
  chalets: number
  total?: number
}
function LineChart({ data, size, month, year }: TPropsLineChart) {
  const [active, setActive] = useState(false)
  const hideModal = useCallback(() => {
    setActive(!active)
  }, [active])

  return (
    <div>
      <LineGraphic
        data={data}
        active={active}
        hideModal={hideModal}
        size={size}
        month={month}
        year={year}
      />
      <ModalGraphic active={active} hideModal={hideModal}>
        <LineGraphic
          data={data}
          active={active}
          size={size}
          hideModal={hideModal}
          year={year}
          month={month}
        />
      </ModalGraphic>
    </div>
  )
}

export default LineChart
