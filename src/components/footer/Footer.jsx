import "./footer.css"
import wholeData from '../GetData.js'
export default function Footer() {

    return (
        <footer className="footer" >   
        <p>Copyright © 2021. All rights are reserved</p>
        <div className="social-links">
           <img src={wholeData.socialHandles[0].imgIcon} width="50px"></img>
           <img src={wholeData.socialHandles[1].imgIcon} width="50px"></img>
           <img src={wholeData.socialHandles[2].imgIcon} width="50px"></img>
           <img src={wholeData.socialHandles[3].imgIcon} width="50px"></img>
            </div>     
        </footer>
    )
}