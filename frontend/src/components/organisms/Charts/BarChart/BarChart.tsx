import React, { useState } from 'react'
import BarGraphic from './BarGraphic'
import ModalGraphic from '../../ModalGraphic/ModalGraphic'

type TPropsBarChart = {
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

type THideModal = () => void | boolean
function BarChart({ data, year, month }: TPropsBarChart) {
  const [active, setActive] = useState<boolean>(false)
  const hideModal: THideModal = () => setActive(!active)

  return (
    <div>
      <BarGraphic
        data={data}
        active={active}
        hideModal={() => hideModal()}
        year={year}
        month={month}
      />
      <ModalGraphic active={active} hideModal={hideModal}>
        <BarGraphic
          data={data}
          active={active}
          hideModal={() => hideModal()}
          year={year}
          month={month}
        />
      </ModalGraphic>
    </div>
  )
}

export default BarChart
