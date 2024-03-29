import React, { useState, useEffect, useCallback } from 'react'
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

type TGraphSize = number[]
type TActive = boolean

function Dashboard() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [active] = useState<TActive>(false)
  const [graphSize, setGraphSize] = useState<TGraphSize>([])
  const [globalYear, setGlobalYear] = useState('2016')
  const [globalMonth, setGlobalMonth] = useState('all')

  useEffect(() => {
    const windowH = window.innerHeight
    const windowW = window.innerWidth
    const graphW = windowW - windowW * 0.1
    const graphH = windowH - windowH * 0.6

    setGraphSize([graphW, graphH]) // eslint-disable-next-line
  }, [active])

  const onYearChange = useCallback((year) => {
    setGlobalYear(year)
  }, [])
  const onMonthChange = useCallback((month) => {
    setGlobalMonth(month)
  }, [])

  return (
    <Body title="Control de ventas" justifyTitle="flex-start" isLoggedIn>
      <DashboardContainer>
        <StyledDashboard>
          <div className="marginBottom">
            <GlobalFilters onYearChange={onYearChange} onMonthChange={onMonthChange} />
          </div>

          <div className="marginTop">
            <BarChart data={data} month={globalMonth} year={globalYear} />
          </div>
          <div className="row">
            <div className="marginTop">
              <LineChart data={dataline} size={graphSize} month={globalMonth} year={globalYear} />
            </div>

            <div className="marginBottom marginLeft">
              <PieChart data={data} month={globalMonth} year={globalYear} />
            </div>
          </div>
        </StyledDashboard>
      </DashboardContainer>
    </Body>
  )
}

export default Dashboard
