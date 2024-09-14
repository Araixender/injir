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
            <Route path='/create-qrcode' element={<CreatePage />} />
            <Route path='/upload-logo' element={<UploadLogo />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/success' element={<Success />} />
            <Route path='/cancel' element={<Cancel />} />
        </Route>
      </Routes>
    </div>
  )
}
export default App
