import React, { useState } from 'react'
import { saveAs } from 'file-saver';
import { Navigate, useNavigate } from 'react-router-dom';


export default function () {
    const navigate = useNavigate()
    const [fname, setFname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [office, setOffice] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [qrImage, setQrImage] = useState(null)
    
    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const res = await fetch('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' +"Name: "+ fname + "%20%0A" + "Phone: " + phone + "%20%0A" + "Email: " + email + "%20%0A" + "Office: "+ office + "%20%0A" + "Postal Code: " + postalCode, {
                method: "GET"
            })
            setQrImage(res.url)
            
        } catch (error) {
            console.log(error)
        }        
    }

    const buyNow = (e) => {
        e.preventDefault()
        const info = {
            "name": fname,
            "phone": phone,
            "email": email,
            "office": office,
            "postal code": postalCode,
        }
        localStorage.setItem('info', JSON.stringify(info))
        return navigate('/upload-logo', {replace: true})
    }

    const downloadUrl = () => {
        saveAs(qrImage, "image.jpg");
    }
  return (
    <div>
        <form action="" className="" style={{display: "flex", flexDirection: "column", maxWidth: "160px"}} onSubmit={handleSubmit}>
            <input required type="text" name="name" id="" placeholder='name' value={fname} onChange={(ev) => setFname(ev.target.value)}/>
            <input required type="text" name="phone" id="" placeholder='phone' value={phone} onChange={(ev) => setPhone(ev.target.value)}/>
            <input required type="text" name="" id="" placeholder='email'value={email} onChange={(ev) => setEmail(ev.target.value)}/>
            <input required type="text" name="" id="" placeholder='office' value={office} onChange={(ev) => setOffice(ev.target.value)}/>
            <input required type="text" name="" id="" placeholder='postal code' value={postalCode} onChange={(ev) => setPostalCode(ev.target.value)}/>
            <input required type="submit" value="Get qr code" />
            <button type="" onClick={buyNow}>Buy Now</button>
        </form>
        {qrImage && <div className=''>
            <img src={qrImage}/>
            <button onClick={downloadUrl}>Download</button>
        </div>}
    </div>
  )
}
