import React, { useEffect, useState } from "react";
import { saveAs } from "file-saver";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();
  const location = useLocation();
  const information = location.state.info;
  console.log(information);
  const [qrImage, setQrImage] = useState(null);

  const handleSubmit = async () => {
    try {
      const res = await fetch(
        "https://api.qrserver.com/v1/create-qr-code/?size=350x350&data=" +
          "First Name: " +
          information.firstName +
          "%20%0A" +
          "Last Name: " +
          information.lastName +
          "%20%0A" +
          "Gender: " +
          information.gender +
          "%20%0A" +
          "Profession: " +
          information.profession +
          "%20%0A" +
          "Department: " +
          information.department +
          "%20%0A" +
          "Position: " +
          information.position +
          "%20%0A" +
          "Organization: " +
          information.organization +
          "%20%0A" +
          "Work Url: " +
          information.workUrl +
          "%20%0A" +
          "Birthday: " +
          information.birthday +
          "%20%0A" +
          "Work Email: " +
          information.workEmail +
          "%20%0A" +
          "Home Email: " +
          information.homeEmail +
          "%20%0A" +
          "Phone: " +
          information.phone +
          "%20%0A" +
          "Cell Phone: " +
          information.cellPhone +
          "%20%0A" +
          "Street: " +
          information.street +
          "%20%0A" +
          "City: " +
          information.city +
          "%20%0A" +
          "Postal Code: " +
          information.postalCode +
          "%20%0A" +
          "State: " +
          information.state +
          "%20%0A" +
          "Country: " +
          information.country,
        {
          method: "GET",
        }
      );
      setQrImage(res.url);
    } catch (error) {
      console.log(error);
    }
  };

  const buyNow = (e) => {
    e.preventDefault();
    localStorage.setItem("info", JSON.stringify(information));
    return navigate("/checkout", { replace: true });
  };

  const downloadUrl = () => {
    saveAs(qrImage, "image.jpg");
  };

  useEffect(() => {
    if (information) {
      handleSubmit();
    }
  }, []);
  return (
    <div>
      {qrImage ? (
        <div className="container">
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ minHeight: "68vh" }}
          >
            <h2 className="display-6 fw-bold text-body-emphasis">Scan & Download QR Code</h2>
            <div className="d-flex flex-column w-25 gap-2">
            <img src={qrImage} />
              <button
                onClick={downloadUrl}
                className="btn btn-secondary"
              >
                Download
              </button>
            </div>
          </div>
          <div class="alert text-white" role="alert" style={{background: "#0069d9"}}>
            <h4 class="alert-heading">Buy Physical Card</h4>
            <p>
            Make a lasting impression with a personalized physical card. Perfect for business meetings, conferences, or sharing your contact info on the go. It's easy to order - just provide information and we'll handle the rest!
            </p>
            <button type="" onClick={buyNow} className="btn btn-light">
            Buy Now
            </button>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}
