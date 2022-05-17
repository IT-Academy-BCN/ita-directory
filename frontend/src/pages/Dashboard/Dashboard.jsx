import React, { useState, useEffect } from 'react'
import { generateData, generateDataLine, daysBetween } from '../../utils/generateData'
import GlobalFilters from '../../components/organisms/GlobalFilters/GlobalFilters'
import { BarChart, LineChart, PieChart } from '../../components/organisms'

// STYLES
import { StyledDashboard, DashboardContainer } from './Dashboard.style'
import Body from '../../components/layout/Body/Body'

const initialDate = '2012-01-01'
const days = daysBetween(initialDate, '2016-12-31')
const data = generateData(new Date(initialDate), days, [30, 80])
const dataline = generateDataLine(new Date(initialDate), days, [30, 80])

function Dashboard() {
  const [active, setActive] = useState(false)
  const hideModal = () => setActive(!active)
  const [graphSize, setGraphSize] = useState([])
  const [globalYear, setGlobalYear] = useState('2016')
  const [globalMonth, setGlobalMonth] = useState('all')

  useEffect(() => {
    const windowH = window.innerHeight
    const windowW = window.innerWidth
    const graphW = windowW - windowW * 0.1
    let graphH
    active ? (graphH = windowH - windowH * 0.6) : (graphH = windowH - windowH * 0.6)
    setGraphSize([graphW, graphH]) // eslint-disable-next-line
  }, [active])

  return (
    <Body
      title="Control de ventas"
      justifyTitle="flex-start"
      paddingTitle="0px"
      paddingTitle2="15vw"
      isLoggedIn="true"
    >
      <DashboardContainer>
        <StyledDashboard>
          <div className="marginBottom">
            <GlobalFilters
              onYearChange={(year) => setGlobalYear(year)}
              onMonthChange={(month) => setGlobalMonth(month)}
            />
          </div>

          <div className="marginTop">
            <BarChart
              data={data}
              active={active}
              hideModal={hideModal}
              size={graphSize}
              month={globalMonth}
              year={globalYear}
            />
          </div>

          <div className="row">
            <div className="marginTop">
              <LineChart
                data={dataline}
                active={active}
                hideModal={hideModal}
                size={graphSize}
                month={globalMonth}
                year={globalYear}
              />
            </div>

            <div className="marginBottom marginLeft">
              <PieChart
                data={data}
                active={active}
                hideModal={hideModal}
                size={graphSize}
                month={globalMonth}
                year={globalYear}
              />
            </div>
          </div>
        </StyledDashboard>
      </DashboardContainer>
    </Body>
  )
}

export default Dashboard
