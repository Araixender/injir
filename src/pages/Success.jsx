import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { Link, useSearchParams } from 'react-router-dom';


export default function Success() {
    const [authParams, setAuthParams] = useSearchParams()
    const [payment, setPayment] = useState(false)
    const [message, setMessage] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const form = useRef()
    const messageRef = useRef();
    const emailRef = useRef();
    const nameRef = useRef()
    const sendEmail = () => {
        emailjs.sendForm(`${import.meta.env.VITE_SERVICE_ID}`, `${import.meta.env.VITE_TEMPLATE_ID}`, form.current, {
            publicKey: `${import.meta.env.VITE_EMAIL_ID}`,
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
            setPayment(true)
            const infoString = localStorage.getItem("info")
            const img = localStorage.getItem('img-url')
            const information = JSON.parse(infoString)
            const deliveryString = localStorage.getItem("deliveryInfo")
            const deliveryInfo = JSON.parse(deliveryString)
            messageRef.current.value = `
            Card Information
            ${"First Name: " +
          information.firstName +
          "\n" +
          "Last Name: " +
          information.lastName +
          "\n" +
          "Gender: " +
          information.gender +
          "\n" +
          "Profession: " +
          information.profession +
          "\n" +
          "Department: " +
          information.department +
          "\n" +
          "Position: " +
          information.position +
          "\n" +
          "Organization: " +
          information.organization +
          "\n" +
          "Work Url: " +
          information.workUrl +
          "\n" +
          "Birthday: " +
          information.birthday +
          "\n" +
          "Work Email: " +
          information.workEmail +
          "\n" +
          "Home Email: " +
          information.homeEmail +
          "\n" +
          "Phone: " +
          information.phone +
          "\n" +
          "Cell Phone: " +
          information.cellPhone +
          "\n" +
          "Street: " +
          information.street +
          "\n" +
          "City: " +
          information.city +
          "\n" +
          "Postal Code: " +
          information.postalCode +
          "\n" +
          "State: " +
          information.state +
          "\n" +
          "Country: " +
          information.country}
            logo: ${img}
            
          Delivery Information \n
          Username: ${deliveryInfo.username} \n
          Phone: ${deliveryInfo.phone} \n
          Email: ${deliveryInfo.email} \n
          Address: ${deliveryInfo.address} \n
          Logo: ${img}
            `

            setMessage(`
            Card Information
            ${"First Name: " +
          information.firstName +
          "\n" +
          "Last Name: " +
          information.lastName +
          "\n" +
          "Gender: " +
          information.gender +
          "\n" +
          "Profession: " +
          information.profession +
          "\n" +
          "Department: " +
          information.department +
          "\n" +
          "Position: " +
          information.position +
          "\n" +
          "Organization: " +
          information.organization +
          "\n" +
          "Work Url: " +
          information.workUrl +
          "\n" +
          "Birthday: " +
          information.birthday +
          "\n" +
          "Work Email: " +
          information.workEmail +
          "\n" +
          "Home Email: " +
          information.homeEmail +
          "\n" +
          "Phone: " +
          information.phone +
          "\n" +
          "Cell Phone: " +
          information.cellPhone +
          "\n" +
          "Street: " +
          information.street +
          "\n" +
          "City: " +
          information.city +
          "\n" +
          "Postal Code: " +
          information.postalCode +
          "\n" +
          "State: " +
          information.state +
          "\n" +
          "Country: " +
          information.country}
            logo: ${img}
            
          Delivery Information \n
          Username: ${deliveryInfo.username} \n
          Phone: ${deliveryInfo.phone} \n
          Email: ${deliveryInfo.email} \n
          Address: ${deliveryInfo.address} \n
          Logo: ${img}
            `)
            setName(information.name)
            setEmail(information.email)
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
            <div className="d-flex justify-content-center align-items-center min-vh-100 flex-column gap-2">
            {payment ? 
            <>
            <div><h1 className="display-5 fw-bold text-body-emphasis">Payment Success</h1></div>
            </>: <div className=''><h1 className="display-5 fw-bold text-body-emphasis">There is some issue</h1></div>}
            <Link to={"/"} className='btn btn-lg btn-light'>Back to Home</Link>
            </div>
        </div>
    )
}
