import "./projects.css"
import wholeData from '../GetData.js'
export default function Projects() {

    return(
        
       
       <section id="projects-main">
        <p>PORTFOLIO</p>
        <h2> 
            Each project is a unique piece of<br></br> development
            </h2>

            <div className="projects">
            <div className="project-sec">
                
                    <img src={wholeData.projects.project0.img} alt="" width="400px"></img>
                 
                    <img src={wholeData.projects.project1.img} alt="" width="400px"></img>
                    
                    <img src={wholeData.projects.project2.img} alt="" width="400px"></img>
                   
                </div>
         
             

                <div className="project-sec">
                    <img src={wholeData.projects.project3.img} alt="" width="400px"></img>
                   
                   
                    <img src={wholeData.projects.project4.img} alt="" width="400px"></img>
                   
                   
                    <img src={wholeData.projects.project5.img} alt="" width="400px"></img>
                 
           
                </div>
              

                <div className="project-sec">
                    <img src={wholeData.projects.project6.img} alt="" width="400px"></img>
                    <img src={wholeData.projects.project7.img} alt="" width="400px"></img>
                    <img src={wholeData.projects.project8.img} alt="" width="400px"></img>
                </div>

                <div className="project-sec">
                    <img src={wholeData.projects.project9.img} alt="" width="400px"></img>
                    <img src={wholeData.projects.project10.img} alt="" width="400px"></img>
                    <img src={wholeData.projects.project11.img} alt="" width="400px"></img>
                </div>

                <div className="project-sec">
                    <img src={wholeData.projects.project12.img} alt="" width="400px"></img>
                    <img src={wholeData.projects.project13.img} alt="" width="400px"></img>
                    <img src={wholeData.projects.project14.img} alt="" width="400px"></img>
                </div>
            </div>
       </section>
    )
}