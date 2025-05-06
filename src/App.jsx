import './App.css'
import Header from './components/header/Header'
import SideBar from './components/sideBar/Sidebar'
import Feeds from './components/feeds/Feeds'
import RightSideBar from './components/rightSideBar/rightSideBar'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  return (
    <>
      <div className="app-head">
        <Header />
      </div>

      <div className="app-body">
        <SideBar />
        <Feeds />
        <RightSideBar />
      </div> 
    </>
  )
}

export default App