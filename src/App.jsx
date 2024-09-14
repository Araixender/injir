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


// publishable keys : pk_test_51PyaLsIPpDX0XJCAWuOttfEvqxxEjLsHC5LYbSKcF5ZNQo2lKlBbQaCBjaNMdNYezVoNaVZCTT5TNESAddxmNDCn00tkyPDQi3

// secret key: 
// sk_test_51PyaLsIPpDX0XJCAdHljsGy3NGIU5B9jULqhPUSCUA6Vqx4IJB18sbjGPx2gaSS9mgM7a5Oa0clvnITHAoggDqmZ00NiUsmypL

// mail trap: 08cd952291cdda3eb64a47698f43baeb

export default App
