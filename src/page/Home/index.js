import React from 'react'
import Footer from '../../components/Footer'
import JoinThePublic from '../../components/HomeComponents/JoinThePublic'
import MainSlider from '../../components/HomeComponents/MainSlider'
import RecentStories from '../../components/HomeComponents/RecentStories'
import RogInAction from '../../components/HomeComponents/RogInAction'
import SlickSlider from '../../components/HomeComponents/SlickSlider'
import Navbar from '../../components/Navbar'

function Home() {
  return (
    <>
    <Navbar/>
    <MainSlider/>
    <SlickSlider/>
    <RecentStories/>
    <RogInAction/>
    <JoinThePublic/>
    <Footer/>
    </>
  )
}

export default Home