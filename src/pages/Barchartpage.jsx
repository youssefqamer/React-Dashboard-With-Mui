import React from 'react'
import BarChartUi from '../Components/BarChart/BarChartUi'
import Header from '../Components/Header/Header'
export default function Barchartpage() {
  return (
    <>
   
   <Header title={'Bar Chart'} subtitle={'The minimum wage in Germany, France and Spain (EUR/Month)'}/>
    <BarChartUi/>
    
    </>
  )
}
