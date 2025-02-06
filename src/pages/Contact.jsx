import React from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar active="contact" />
      <div className="contact-container">
        <h1 className="glitch">Transport and Accomodation</h1>
        <div className="transport-accomodation">
          <p>
            Limited accomodation will be provided at a rate of{" "}
            <strong>200 INR per head per day</strong> on a first come first
            serve basis on the three days of the fest.
          </p>{" "}
          <br />
          <p>
            One bus will be running from <strong>Kolkata to the campus</strong>{" "}
            on all three days in the morning. The return journey will be
            provided only on{" "}
            <strong>the last day of the fest, 9th February</strong> before the
            pronites. Regular bus services to and from{" "}
            <strong>Kalyani Railway Station</strong> will also be provided on
            all three days. The detailed transport schedule is given below.
          </p>
          <h2>Bus Trips Schedule</h2>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>Bus No.</th>
                  <th>Start Point</th>
                  <th>PickUp Point</th>
                  <th>Drop Point</th>
                  <th>Date</th>
                  <th>Start Time</th>
                  <th>Estimated PickUp Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Kalyani</td>
                  <td>8B Bus Stop Jadavpur</td>
                  <td>IISER Kolkata Campus</td>
                  <td>07/02/2025</td>
                  <td>5:30 AM</td>                  
                  <td>7:30 AM</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Kalyani</td>
                  <td>Esplanade</td>
                  <td>IISER Kolkata Campus</td>
                  <td>07/02/2025</td>
                  <td>5:30 AM</td>                  
                  <td>7:30 AM</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Kalyani</td>
                  <td>8B Bus Stop Jadavpur</td>
                  <td>IISER Kolkata Campus</td>
                  <td>08/02/2025</td>
                  <td>5:30 AM</td>                  
                  <td>7:30 AM</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Kalyani</td>
                  <td>Esplanade</td>
                  <td>IISER Kolkata Campus</td>
                  <td>08/02/2025</td>
                  <td>5:30 AM</td>                  
                  <td>7:30 AM</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Kalyani</td>
                  <td>8B Bus Stop Jadavpur</td>
                  <td>IISER Kolkata Campus</td>
                  <td>09/02/2025</td>
                  <td>5:30 AM</td>                  
                  <td>7:30 AM</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Kalyani</td>
                  <td>Esplanade</td>
                  <td>IISER Kolkata Campus</td>
                  <td>09/02/2025</td>
                  <td>5:30 AM</td>                  
                  <td>7:30 AM</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>IISER Kolkata Campus</td>
                  <td>IISER Kolkata Campus</td>
                  <td>Esplanade</td>
                  <td>09/02/2025</td>
                  <td>8:30 PM</td>
                  <td>8:30 PM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h1 className="glitch">Contact Info</h1>
        <div class="contact-links">
          <a
            href="mailto:inquivesta@iiserkol.ac.in"
            target="_blank"
            class="contact-link"
          >
            <i class="fa-solid fa-envelope"></i>{" "}
            <p>inquivesta@iiserkol.ac.in</p>
          </a>
          <a
            href="https://www.instagram.com/inquivesta_iiserk/"
            target="_blank"
            class="contact-link"
          >
            <i class="fa-brands fa-instagram"></i> <p>@inquivesta_iiserk</p>
          </a>
          <a class="contact-link" href="tel:+91 81786 88948">
            <i class="fa-solid fa-phone"></i>{" "}
            <p className="hoverable">+91 81786 88948</p>
          </a>
        </div>
        <div className="map">
          <h1 className="glitch">How to reach us? </h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4185.450937204947!2d88.5219273757348!3d22.963846818516434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8bf0ebd68bc8b%3A0x92d423474389ff5c!2sIndian%20Institute%20of%20Science%20Education%20and%20Research%20Kolkata%20(IISER%20Kolkata)!5e1!3m2!1sen!2sin!4v1735133525785!5m2!1sen!2sin"
            width="400"
            height="400"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
