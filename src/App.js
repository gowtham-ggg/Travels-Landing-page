import React from 'react'
import "./index.css"
import NavBar from './components/navbar/NavBar'
import Home from './components/home/Home'
import Services from './components/services/Services'
import Vehicles from './components/vehicles/vehicles'
import Testimonials from './components/Testimonials/Testimonials'
import Reservation from './components/Reservation/Reservation'
import Contact from './components/Contact/Contact'

import { ToastContainer} from 'react-toastify'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <NavBar/>
      <Home/>
      <Services/>
      <Vehicles/>
      <Testimonials/>
      <Reservation/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
