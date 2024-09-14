import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { Link, useSearchParams } from 'react-router-dom';


export default function Success() {
    const [authParams, setAuthParams] = useSearchParams()
    const [message, setMessage] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const form = useRef()
    const messageRef = useRef()
    const emailRef = useRef()
    const nameRef = useRef()
    const sendEmail = () => {
        emailjs.sendForm('service_czbrfpi', 'template_e7731ca', form.current, {
            publicKey: 'bsCe_od_wQFhQK4sG',
        }).then(() => { 
            console.log('SUCCESS!');
            localStorage.clear()
         },
                (error) => {
                    console.log('FAILED...', error);
                },
            );
    };
    useEffect(() => {
        const authParam = authParams.get("auth")
        const authStorage = localStorage.getItem('auth')
        if (authParam == authStorage){
            console.log(true)
            const infoString = localStorage.getItem("info")
            const img = localStorage.getItem('img-url')
            const info = JSON.parse(infoString)
            messageRef.current.value = `name: ${info.name}\nemail: ${info.email}\noffice: ${info.office}\npostal code: ${info['postal code']}\nlogo: ${img}`
            setMessage(`name: ${info.name}\nemail: ${info.email}\noffice: ${info.office}\npostal code: ${info['postal code']}\nlogo: ${img}`)
            setName(info.name)
            setEmail(info.email)
            if (infoString) {
                sendEmail()
            }
        }
    }, [])
    return (
        <div>
            <form action="" method="get" ref={form} hidden>
                <input type="email" name="user_email" id="" ref={emailRef} value={email}/>
                <input type="text" name="" id="" ref={nameRef} value={name}/>
                <textarea name="message" id="" value={message} ref={messageRef}></textarea>
            </form>
            <div>Payment Success</div>
            <Link to={"/"}>Back to Home</Link>
        </div>
    )
}
