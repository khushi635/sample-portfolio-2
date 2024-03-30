import "./hero.css"
// import profile from "../images/profile-img.jpeg"
import wholeData from '../GetData.js'
export default function Hero() {

    return (
        <section id="hero-sec">
            <div className="hero-main">
               
                <div className="hero-intro">
                    <span id="dev">Software<br></br> Developer<br></br>& Designer</span><br></br>
                   
                    {/* <p>As a React developer with 5 years of experience, I have honed my skills in <br></br>JavaScript and am currently learning TypeScript to expand my expertise. I<br></br> pride myself on being a quick learner and attentive listener, <br></br>which allows me to collaborate effectively with clients to<br></br> create efficient and scalable solutions. My focus is on developing<br></br> user-friendly applications that solve real-world problems.</p> */}
                    <p>{wholeData.about.subTitle}</p>
                </div >
                <img id="profile-img" src={wholeData.about.profileImg} alt="" height="500px"></img>
            </div>
            <div className="container">
                <p>High Knowledge on Softwares</p><br></br>
                <div className="img-icons">
                    <img  className="skill-img" src={wholeData.skills[0].skillIcon} alt="" width="70px"></img>
                    <img  className="skill-img" src={wholeData.skills[1].skillIcon} alt="" width="70px"></img>
                    <img  className="skill-img" src={wholeData.skills[3].skillIcon} alt="" width="70px"></img>
                    <img  className="skill-img" src={wholeData.skills[4].skillIcon} alt="" width="70px"></img>
                    <img  className="skill-img" src={wholeData.skills[5].skillIcon} alt="" width="70px"></img>
                    <img  className="skill-img" src={wholeData.skills[6].skillIcon} alt="" width="70px"></img>
                    
                    <img  className="skill-img" src={wholeData.skills[7].skillIcon} alt="" width="70px"></img>
                    <img  className="skill-img" src={wholeData.skills[8].skillIcon} alt="" width="70px"></img>
                    <img  className="skill-img" src={wholeData.skills[9].skillIcon} alt="" width="70px"></img>
                    <img  className="skill-img" src={wholeData.skills[10].skillIcon} alt="" width="70px"></img>
                    <img  className="skill-img" src={wholeData.skills[11].skillIcon} alt="" width="70px"></img>
                    <img  className="skill-img" src={wholeData.skills[12].skillIcon} alt="" width="70px"></img>
                    <img  className="skill-img" src={wholeData.skills[13].skillIcon} alt="" width="70px"></img>
                    <img  className="skill-img" src={wholeData.skills[14].skillIcon} alt="" width="70px"></img>
                    <img  className="skill-img" src={wholeData.skills[15].skillIcon} alt="" width="70px"></img>
                    <img  className="skill-img" src={wholeData.skills[16].skillIcon} alt="" width="70px"></img>
                    <img  className="skill-img" src={wholeData.skills[17].skillIcon} alt="" width="70px"></img>
                    <img  className="skill-img" src={wholeData.skills[18].skillIcon} alt="" width="70px"></img>
                    <img  className="skill-img" src={wholeData.skills[19].skillIcon} alt="" width="70px"></img>
                  
                </div>
            </div>
        </section>
    )
}