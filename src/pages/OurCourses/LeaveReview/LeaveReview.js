import React from 'react';


import "./LeaveReview.scss"
import img from "../../../assets/img/book.png"
import img2 from "../../../assets/img/review-img.svg"
import img3 from "../../../assets/img/rview-img2.png"


const LeaveReview = () => {

    return (

   <div id="review">
       <div className="container">
           <div className="review">
               <div>
                   <h1 className="review--title">Оставить отзыв</h1>
                   <p className="review--description">Если вам понравилась наша <br/>
                       платфрома, вы можете <br/>
                       оставить отзыв, а также <br/>
                       увидеть остальные отзывы в <br/>
                       нашем телеграм канале.</p>
               </div>

               <div className="review--block">
                   <h2 className="review--title2">ФИО:</h2>
                   <input className="review--input1" type="text" placeholder="Muslim Bolot Joodarovich"/>
                   <h2 className="review--title2">Кем вы работаете? :</h2>
                   <input className="review--input1" type="text" placeholder="Частный предпрениматель"/>
                   <h2 className="review--title2">Отзыв:</h2>
                   <input className="review--input2" type="text" placeholder="Мне очень понравилась эта школа..."/>
                   <button className="review--btn">Оставить отзыв</button>
               </div>

           </div>
           <img className="review--image1" src={img} alt=""/>
           <img className="review--image2" src={img2} alt=""/>
           <img className="review--image3" src={img3} alt=""/>
       </div>

   </div>

    );
};

export default LeaveReview;