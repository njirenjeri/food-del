import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/sideBar/Sidebar'
import {Routes, Route} from 'react-router-dom'
import Add from '../src/pages/AddItem/Add'
import List from '../src/pages/List/List'
import Orders from '../src/pages/Orders/Orders'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr />
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path='/add' element={<Add/>} />
          <Route path='/list' element={<List/>} />
          <Route path='/orders' element={<Orders/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App