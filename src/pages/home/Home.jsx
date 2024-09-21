import React from 'react'
import ImageSlider from './ImageSlider'
import InfoSection from './InforSection'
import ServicesHeader from './ServicesHeader'
import ServicesLayout from './serviceLayout'
import CustomSection from './CustomSection'
import FounderSection from './FounderSection'
import FooterSection from '../../components/FooterSection'

const Home = () => {
  return (<>
  <div className='overflow-hidden'>
    <ImageSlider/>
    <InfoSection/>
    <ServicesHeader/>
    <ServicesLayout/>
    <CustomSection/>
    <FounderSection/>
    <FooterSection/>
    </div>
    </>
  )
}

export default Home

