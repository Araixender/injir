import React, { useState } from "react";
import './form.css'
import { useNavigate } from "react-router-dom";
export default function Form() {
  const navigate = useNavigate()

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [gender, setGender] = useState("")
  const [profession, setProfession] = useState("")
  const [department, setDepartment] = useState("")
  const [position, setPosition] = useState("")
  const [organization, setOrganization] = useState("")
  const [workUrl, setWorkUrl] = useState("")
  const [birthday, setBirthday] = useState("")
  
  const [workEmail, setWorkEmail] = useState("")
  const [homeEmail, setHomeEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [cellPhone, setCellPhone] = useState("")
  const [street, setStreet] = useState("")
  const [city, setCity] = useState("")
  const [postalCode, setPostalCode] = useState("")
  const [state, setState] = useState("")
  const [country, setCountry] = useState("")
  
  const handleSubmit = (e) => {
      e.preventDefault()
      const info = {
        firstName,
        lastName,
        gender,
        profession,
        position,
        department,
        organization,
        workUrl,
        birthday,
        workEmail,
        homeEmail,
        phone,
        cellPhone,
        street,
        city,
        postalCode,
        state,
        country
      }
      console.log(info)
      navigate("/get-qrcode", {state: {info}})
  }

  const handleGender = (e) =>{
    setGender(e.currentTarget.value)
  }
  return (
    <section className="min-h-100 min-h-custom gradient-custom-2" id="qrform">
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12">
          <div className="card card-registration card-registration-2" style={{borderRadius: "15px"}}>
            <div className="card-body p-0">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="p-5">
                    <h3 className="fw-normal mb-5" style={{"color": "#666666"}}>General Infomation</h3>
  
                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
  
                        <div data-mdb-input-init className="form-outline">
                          <input type="text" id="form3Examplev2" className="form-control form-control-lg" value={firstName} onChange={ev => setFirstName(ev.target.value)}/>
                          <label className="form-label" htmlfor="form3Examplev2">First name</label>
                        </div>
  
                      </div>
                      <div className="col-md-6 mb-4 pb-2">
  
                        <div data-mdb-input-init className="form-outline">
                          <input type="text" id="form3Examplev3" className="form-control form-control-lg" value={lastName} onChange={ev => setLastName(ev.target.value)}/>
                          <label className="form-label" htmlfor="form3Examplev3">Last name</label>
                        </div>
  
                      </div>
                    </div>
  
                    <div className="mb-4 pb-2">
                      <select data-mdb-select-init className="form-control form-control-lg" onChange={handleGender}>
                        <option value="-">Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="not specified">Not specified</option>
                      </select>
                    </div>
  
                    <div className="mb-4 pb-2">
                      <div data-mdb-input-init className="form-outline">
                        <input type="text" id="form3Examplev4" className="form-control form-control-lg" value={profession} onChange={ev => setProfession(ev.target.value)}/>
                        <label className="form-label" htmlfor="form3Examplev4">Profession</label>
                      </div>
                    </div>
                    
                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
  
                        <div data-mdb-input-init className="form-outline">
                          <input type="text" id="form3Examplev2" className="form-control form-control-lg" value={department} onChange={ev => setDepartment(ev.target.value)}/>
                          <label className="form-label" htmlfor="form3Examplev2">Department</label>
                        </div>
  
                      </div>
                      <div className="col-md-6 mb-4 pb-2">
  
                        <div data-mdb-input-init className="form-outline">
                          <input type="text" id="form3Examplev3" className="form-control form-control-lg" value={position} onChange={ev => setPosition(ev.target.value)}/>
                          <label className="form-label" htmlfor="form3Examplev3">Position</label>
                        </div>
  
                      </div>
                    </div>
  

                    <div className="mb-4 pb-2">
                      <div data-mdb-input-init className="form-outline">
                        <input type="text" id="form3Examplev4" className="form-control form-control-lg" value={organization} onChange={ev => setOrganization(ev.target.value)}/>
                        <label className="form-label" htmlfor="form3Examplev4">Organization</label>
                      </div>
                    </div>

                    <div className="mb-4 pb-2">
                      <div data-mdb-input-init className="form-outline">
                        <input type="text" id="form3Examplev4" className="form-control form-control-lg" value={workUrl} onChange={ev => setWorkUrl(ev.target.value)}/>
                        <label className="form-label" htmlfor="form3Examplev4">Work Url</label>
                      </div>
                    </div>

                    <div className="mb-4 pb-2">
                      <div data-mdb-input-init className="form-outline">
                        <input type="date" id="form3Examplev4" className="form-control form-control-lg" value={birthday} onChange={ev => setBirthday(ev.target.value)}/>
                        <label className="form-label" htmlfor="form3Examplev4">Birthday</label>
                      </div>
                    </div>
  

  
                  </div>
                </div>
                <div className="col-lg-6 bg-indigo text-white">
                  <div className="p-5">
                    <h3 className="fw-normal mb-5">Contact Details</h3>
  
                    <div className="mb-4 pb-2">
                      <div data-mdb-input-init className="form-outline form-white">
                        <input type="text" id="form3Examplea2" className="form-control form-control-lg" value={workEmail} onChange={ev => setWorkEmail(ev.target.value)}/>
                        <label className="form-label" htmlfor="form3Examplea2">Work Email</label>
                      </div>
                    </div>
  
                    <div className="mb-4 pb-2">
                      <div data-mdb-input-init className="form-outline form-white">
                        <input type="email" id="form3Examplea3" className="form-control form-control-lg" value={homeEmail} onChange={ev => setHomeEmail(ev.target.value)}/>
                        <label className="form-label" htmlfor="form3Examplea3">Home Email</label>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
  
                        <div data-mdb-input-init className="form-outline">
                          <input type="text" id="form3Examplev2" className="form-control form-control-lg" value={phone} onChange={ev => setPhone(ev.target.value)}/>
                          <label className="form-label" htmlfor="form3Examplev2">Phone</label>
                        </div>
  
                      </div>
                      <div className="col-md-6 mb-4 pb-2">
  
                        <div data-mdb-input-init className="form-outline">
                          <input type="text" id="form3Examplev3" className="form-control form-control-lg" value={cellPhone} onChange={ev => setCellPhone(ev.target.value)}/>
                          <label className="form-label" htmlfor="form3Examplev3">Cell Phone</label>
                        </div>
  
                      </div>
                    </div>
  
                    <div className="mb-4 pb-2">
                      <div data-mdb-input-init className="form-outline form-white">
                        <input type="text" id="form3Examplea6" className="form-control form-control-lg" value={street} onChange={ev => setStreet(ev.target.value)}/>
                        <label className="form-label" htmlfor="form3Examplea6">Street</label>
                      </div>
                    </div>

                    <div className="mb-4 pb-2">
                      <div data-mdb-input-init className="form-outline form-white">
                        <input type="text" id="form3Examplea6" className="form-control form-control-lg" value={city} onChange={ev => setCity(ev.target.value)}/>
                        <label className="form-label" htmlfor="form3Examplea6">City</label>
                      </div>
                    </div>
  
                    <div className="row">
                      <div className="col-md-5 mb-4 pb-2">
  
                        <div data-mdb-input-init className="form-outline form-white">
                          <input type="text" id="form3Examplea7" className="form-control form-control-lg" value={postalCode} onChange={ev => setPostalCode(ev.target.value)}/>
                          <label className="form-label" htmlfor="form3Examplea7">Postal Code</label>
                        </div>
  
                      </div>
                      <div className="col-md-7 mb-4 pb-2">
  
                        <div data-mdb-input-init className="form-outline form-white">
                          <input type="text" id="form3Examplea8" className="form-control form-control-lg" value={state} onChange={ev => setState(ev.target.value)}/>
                          <label className="form-label" htmlfor="form3Examplea8">State</label>
                        </div>
  
                      </div>
                    </div>
  
                    <div className="mb-4">
                      <div data-mdb-input-init className="form-outline form-white">
                        <input type="text" id="form3Examplea9" className="form-control form-control-lg" value={country} onChange={ev => setCountry(ev.target.value)}/>
                        <label className="form-label" htmlfor="form3Examplea9">Country</label>
                      </div>
                    </div>

                    <button  type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-light btn-lg"
                      data-mdb-ripple-color="dark" onClick={handleSubmit}>Get QR Code</button>
  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
