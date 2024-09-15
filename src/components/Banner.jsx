import React from 'react'
import { Link } from 'react-router-dom'

export default function Banner() {
  return (
    <div class="px-4 py-5 my-5 container bg-white">
        {/* <img class="d-block mx-auto mb-4" src="https://docsallover.com/static/images/logo-landscape.60ec22f9daf0.png" alt=""  /> */}
        <div class="col-lg-6 mx-auto">
        <h1 class="display-5 fw-bold text-body-emphasis">QrSwift</h1>
          <p class="lead mb-2">Create, Download, and Share Your Personalized QR Code in Seconds!</p>
          <ul class="lead mb-4">
            <li>Generate QR Codes with your details in seconds</li>
            <li>Download your QR Code as an image for easy sharing</li>
            <li>Get a custom physical card with your QR Code delivered to your doorstep</li>
          </ul>
          <div class="d-grid gap-2 d-sm-flex justify-content-start">
            <a type="button" class="btn btn-secondary btn-lg px-4 gap-3" href="#qrform">Get Started</a>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">Generate QR Code</button>
          </div>
        </div>
      </div>
    
  )
}
