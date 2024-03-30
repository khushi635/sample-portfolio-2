import "./contact.css"
import location from "../images/location-icon.png"
import calling from "../images/calling-icon.png"
import email from "../images/email-icon.jpeg"

export default function Contact() {

    return(
        <section id="Nav-Contact">
             <span id="contact">CONTACT</span><br></br>
                <p>Feel free to contact me if any assistance is <br></br>needed in the future</p>
            <div className="contact-sec">
               
          
            <div className="about-contact">
                <div className="about-contact-sec">
                    <img src={location} alt="" width="50px"></img>

                </div>
                <div className="about-contact-sec2">
                    <span className="contact-name">Location</span><br></br>
                    <span className="contact-desc">Los Angeles , America</span>
                </div>
            </div>

            <div className="about-contact">
                <div className="about-contact-sec">
                    <img src={calling} alt="" width="50px"></img>

                </div>
                <div className="about-contact-sec2">
                    <span className="contact-name">Phone</span><br></br>
                    <span className="contact-desc">+91-9212321321</span>
                </div>
            </div>

            <div className="about-contact">
                <div className="about-contact-sec">
                    <img src={email} alt="" width="90px"></img>

                </div>
                <div className="about-contact-sec2">
                    <span className="contact-name">Mail</span><br></br>
                    <span className="contact-desc">portfolio3@gmail.com</span>
                </div>
            </div>
            </div>

            <form action="">
                <input type="text" name="name" placeholder="Name"></input><br></br><br></br>
                <input type="email" name="email" placeholder="Email"></input><br></br><br></br>
                <input type="number" name="phnNumber" placeholder="Phn Number"></input><br></br><br></br>
                <textarea cols="30" rows="10">Message</textarea><br></br><br></br>
                <button id="btn" type="submit">Send Message</button>
            </form>

        </section>
    )
}