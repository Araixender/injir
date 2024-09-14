import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function IndexPage() {
  useEffect(() => {
    console.log(import.meta.env.VITE_API_URL);
  })
  return (
    <div>
        <div className="">I am a index page how are you!</div>
        <div className=''><Link to="/create-qrcode">make a qr</Link></div>
        <Link to="/success?auth=ldkjfjsld">Success</Link>
        <Link to="/cancel">Cancel</Link>
    </div>
  )
}
