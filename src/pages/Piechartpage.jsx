import React from 'react'
import PieChartUi from '../Components/Pie/PieChartUi'
import Header from '../Components/Header/Header'

export default function Piechartpage() {
  return (
    <>
    <Header title={'Pie'} subtitle={'Simple Pie Chart'}/>
    <PieChartUi/>
    </>
  )
}
