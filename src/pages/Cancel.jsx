import React from 'react'
import { Link } from 'react-router-dom'


export default function Cancel() {
  return (
    <div className='d-flex justify-content-center align-items-center min-vh-100 flex-column gap-2'>
    <div><h1 className="display-5 fw-bold text-body-emphasis">Payment Cancel</h1></div>
    <Link to={"/"} className='btn btn-lg btn-light'>Back to Home</Link>
    </div>
  )
}
