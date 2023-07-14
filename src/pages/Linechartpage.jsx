import React from 'react'
import LineChartUi from '../Components/LineChart/LineChartUi';
import Header from '../Components/Header/Header';

export default function Linechartpage() {
  return (
    <>
    <Header title={'Line Chart'} subtitle={'Simple Line Chart'}/>
      <LineChartUi/>
    
    </>
  )
}
