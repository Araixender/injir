import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import CreatePage from './pages/CreatePage'
import IndexPage from './pages/IndexPage'
import UploadLogo from './pages/UploadLogo'
import Checkout from './pages/Checkout'
import Success from './pages/Success'
import Cancel from './pages/Cancel'

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<IndexPage />}/>
            <Route path='/get-qrcode' element={<CreatePage />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/success' element={<Success />} />
            <Route path='/cancel' element={<Cancel />} />
        </Route>
      </Routes>
    </div>
  )
}
export default App

// Primary color: #e8e8e8
// btn color: #0069d9
// secondary color: #666666
