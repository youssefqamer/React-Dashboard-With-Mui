import React from 'react'
import GeographyUi from '../Components/Geography/GeographyUi';
import Header from '../Components/Header/Header';

export default function Geographypage() {
  return (
    <>
    <Header title={'Geography'} subtitle={'Simple Geography Chart'}/>
      <GeographyUi/>
    </>
  )
}
