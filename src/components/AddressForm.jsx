import React, { useState } from "react";
import './addressForm.css'
import UploadLogo from "../pages/UploadLogo";

export default function AddressForm({checkoutFunc}) {
    const [username, setUsername] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const handleSubmit = (ev) => {
        ev.preventDefault()
        const deliveryInfo = {
            username,
            phone,
            email,
            address
        }
        localStorage.setItem("deliveryInfo", JSON.stringify(deliveryInfo));
        checkoutFunc()
    }

  return (
    <section class="min-vh-100 ">
  <div class="mask d-flex align-items-center h-100 gradient-custom-3 py-5">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card" style={{borderRadius: "15px;"}}>
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5">Delivery Information</h2>

              <form>

                <div data-mdb-input-init class="form-outline mb-4">
                  <input type="text" id="form3Example1cg" class="form-control form-control-lg" onChange={ev => setUsername(ev.target.value)} value={username}/>
                  <label class="form-label" for="form3Example1cg">Your Name</label>
                </div>

                <div data-mdb-input-init class="form-outline mb-4">
                  <input type="email" id="form3Example3cg" class="form-control form-control-lg" onChange={ev => setEmail(ev.target.value)} value={email}/>
                  <label class="form-label" for="form3Example3cg">Your Email</label>
                </div>

                <div data-mdb-input-init class="form-outline mb-4">
                  <UploadLogo />
                  <label class="form-label" for="form3Example3cg">Your Logo</label>
                </div>

                <div data-mdb-input-init class="form-outline mb-4">
                  <input type="text" id="form3Example4cg" class="form-control form-control-lg" onChange={ev => setPhone(ev.target.value)} value={phone}/>
                  <label class="form-label" for="form3Example4cg">Your Phone Number</label>
                </div>

                <div data-mdb-input-init class="form-outline mb-4">
                  <input type="text" id="form3Example4cdg" class="form-control form-control-lg" onChange={ev => setAddress(ev.target.value)} value={address}/>
                  <label class="form-label" for="form3Example4cdg">Your Delivery Address</label>
                </div>


                <div class="d-flex justify-content-center">
                  <button  type="button" data-mdb-button-init
                    data-mdb-ripple-init class="btn btn-lg gradient-custom-4 text-white" onClick={handleSubmit}>Proceed to Checkout</button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}
