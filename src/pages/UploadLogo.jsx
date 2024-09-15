import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function UploadLogo() {
    const [file, setFile] = useState("")
    const navigate = useNavigate()

    const myWidget = cloudinary.createUploadWidget({
        cloudName: `${import.meta.env.VITE_CLOUD_ID}`,
        uploadPreset: `${import.meta.env.VITE_PRESET_ID}`
    }, (error, result) => {
        if (!error && result && result.event === "success") {
            localStorage.setItem('img-url', result.info.secure_url)
            console.log('Done! Here is the image info: ', result.info);
            setFile(result.info.secure_url)
            alert("Logo has been uploaded")
        }
    }
    )
    const widget = (ev) => {
        ev.preventDefault()
        myWidget.open()
    }
    return (<>
        <button id="upload_widget" className="form-control form-control-lg text-light" style={{background: "#666666"}} onClick={widget}>Upload Logo</button>
        {/* <img src={file} alt="" /> */}
    </>);
}
