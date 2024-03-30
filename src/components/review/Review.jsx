import "./review.css";
import wholeData from '../GetData.js'

export default function Review() {


    return (
        <section id="testimonials">
            <p id="testi-head">Testimonials</p>
            <div className="testimonial">
            <div className="review-img ">
            <img src={wholeData.testimonials[0].img} width="200px"></img>
            </div>
            <div className="review">
                <span className="star">&#9733;&#9733;&#9733;&#9733;&#9733;</span><br></br>
           
               <p className="review-para"> {wholeData.testimonials[0].review}<br></br>
               <span className="name">{wholeData.testimonials[0].name}</span><br></br>
               <span className="position">{wholeData.testimonials[0].position}</span>
               </p>
               
          
            

            </div>
            </div>

            <div className="testimonial">
            <div className="review-img ">
            <img src={wholeData.testimonials[1].img} width="200px"></img>
            </div>
            <div className="review">
                <span className="star">&#9733;&#9733;&#9733;&#9733;&#9733;</span><br></br>
           
               <p className="review-para"> {wholeData.testimonials[1].review}<br></br>
               <span className="name">{wholeData.testimonials[1].name}</span><br></br>
               <span className="position">{wholeData.testimonials[1].position}</span>
               </p>
               
          
            

            </div>
            </div>

            <div className="testimonial">
            <div className="review-img ">
            <img src={wholeData.testimonials[0].img} width="200px"></img>
            </div>
            <div className="review">
                <span className="star">&#9733;&#9733;&#9733;&#9733;&#9733;</span><br></br>
           
               <p className="review-para"> {wholeData.testimonials[2].review}<br></br>
               <span className="name">{wholeData.testimonials[2].name}</span><br></br>
               <span className="position">{wholeData.testimonials[2].position}</span>
               </p>
               
          
            

            </div>
            </div>

            <div className="testimonial">
            <div className="review-img ">
            <img src={wholeData.testimonials[0].img} width="200px"></img>
            </div>
            <div className="review">
                <span className="star">&#9733;&#9733;&#9733;&#9733;&#9733;</span><br></br>
           
               <p className="review-para"> {wholeData.testimonials[3].review}<br></br>
               <span className="name">{wholeData.testimonials[3].name}</span><br></br>
               <span className="position">{wholeData.testimonials[3].position}</span>
               </p>
               
          
            

            </div>
            </div>

            <div className="testimonial">
            <div className="review-img ">
            <img src={wholeData.testimonials[0].img} width="200px"></img>
            </div>
            <div className="review">
                <span className="star">&#9733;&#9733;&#9733;&#9733;&#9733;</span><br></br>
           
               <p className="review-para"> {wholeData.testimonials[4].review}<br></br>
               <span className="name">{wholeData.testimonials[4].name}</span><br></br>
               <span className="position">{wholeData.testimonials[4].position}</span>
               </p>
               
          
            

            </div>
            </div>

        </section>
    )
}