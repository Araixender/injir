import React, { useEffect, useState } from 'react'
import Form from '../components/Form';
import Banner from '../components/Banner';

export default function IndexPage() {
  return (
    <div style={{backgroundColor: "#e8e8e8"}}>
      <Banner />
      <Form />
    </div>
  )
}