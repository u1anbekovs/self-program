import React from "react";
import "./LeaveReview.scss"
import Book from "./../../../assets/img/book1.png"
import Book2 from "./../../../assets/img/book3.svg"


const LeaveReview = () => {

    return (
        <div id="leaveReview">
            <div className="container">
                <div className="leaveReview">

                    <img className="leaveReview--img1" src={Book2} alt=""/>

                    <div className="leaveReview--title">
                        <h1>Оставить отзыв</h1>
                        <p>
                            Если вам понравилась наша платфрома, вы можете оставить отзыв, а
                            также увидеть остальные отзывы в нашем телеграм канале.
                        </p>
                    </div>
                    <div className="leaveReview--addWorlds">
                        <div className="leaveReview--addWorlds__name">
                            <label htmlFor="name">ФИО:</label>
                            <input type="text" placeholder="Muslim Bolot Joodarovich"/>
                        </div>
                        <div className="leaveReview--addWorlds__name">
                            <label htmlFor="work">Кем вы работаете? :</label>
                            <input type="text" placeholder="Частный предпрениматель"/>
                        </div>
                        <div className="leaveReview--addWorlds__name">
                            <label htmlFor="review">Отзыв:</label>
                            <textarea placeholder="Мне очень понравилась эта школа..."></textarea>
                        </div>
                        <button>Оставить отзыв</button>

                    </div>
                    <img className="leaveReview--img2" src={Book} alt=""/>

                </div>

            </div>
        </div>
    );
};

export default LeaveReview;