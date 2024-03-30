import "./about.css"
import wholeData from '../GetData.js'
export default function About() {


    return(
        <section id="about-sec">
            <span className="about-head">What I Do</span><br></br>
            <span className="about-para">{wholeData.about.subTitle}</span>
            
            <div className="about-desc">
                <div className="about-work">
                    <span className="work-name">{wholeData.services[0].name}</span><br></br>
                    <span className="work-desc">{wholeData.services[0].desc}</span>
                </div>
                <div className="price">
                    <span className="starts">Starts from</span>
                    <span className="charge">{wholeData.services[0].charge}</span>

                </div>
                <div className="img-icon">
                    <img src={wholeData.services[0].imgIcon} alt="" width="140px"></img>
                </div>

            </div>

            <div className="about-desc">
                <div className="about-work">
                    <span className="work-name">{wholeData.services[1].name}</span><br></br>
                    <span className="work-desc">{wholeData.services[1].desc}</span>
                </div>
                <div className="price">
                    <span className="starts">Starts from</span>
                    <span className="charge">{wholeData.services[1].charge}</span>

                </div>
                <div className="img-icon">
                    <img src={wholeData.services[1].imgIcon} alt="" width="140px"></img>
                </div>

            </div>

           

            <div className="about-desc">
                <div className="about-work">
                    <span className="work-name">{wholeData.services[2].name}</span><br></br>
                    <span className="work-desc">{wholeData.services[2].desc}</span>
                </div>
                <div className="price">
                    <span className="starts">Starts from</span>
                    <span className="charge">{wholeData.services[2].charge}</span>

                </div>
                <div className="img-icon">
                    <img src={wholeData.services[2].imgIcon} alt="" width="140px"></img>
                </div>

            </div>

            <div className="about-desc">
                <div className="about-work">
                    <span className="work-name">{wholeData.services[3].name}</span><br></br>
                    <span className="work-desc">{wholeData.services[3].desc}</span>
                </div>
                <div className="price">
                    <span className="starts">Starts from</span>
                    <span className="charge">{wholeData.services[3].charge}</span>

                </div>
                <div className="img-icon">
                    <img src={wholeData.services[3].imgIcon} alt="" width="140px"></img>
                </div>

            </div>

            <div className="about-desc">
                <div className="about-work">
                    <span className="work-name">{wholeData.services[4].name}</span><br></br>
                    <span className="work-desc">{wholeData.services[4].desc}</span>
                </div>
                <div className="price">
                    <span className="starts">Starts from</span>
                    <span className="charge">{wholeData.services[4].charge}</span>

                </div>
                <div className="img-icon">
                    <img src={wholeData.services[4].imgIcon} alt="" width="140px"></img>
                </div>

            </div> 

            
        </section>
    )
}