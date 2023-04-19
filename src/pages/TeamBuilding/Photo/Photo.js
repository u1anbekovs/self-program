import React from 'react';
import "./Photo.scss"
import imgAbout6 from "../../../assets/img/book3.png";

const CoursePhoto = () => {
    return (
        <div className="container">
            <div className='coursePhoto'>
                <div className="coursePhoto--title">
                    <span>Спикер</span>
                    <h1>Muslim Bolot</h1>

                    <h4>Милиардер, Филиантроп, Гений, Бизнес мен</h4>
                    <p>Был обычным школьником, но изменился.</p>
                    <p>Молодой гений не признанный обществом.</p>
                    <p>Страрательный парень</p>
                    <img className="coursePhoto--title__Photo" src={imgAbout6} alt=""/>

                </div>
                <div className="coursePhoto--img">
                    <span>Photo</span>
                </div>
            </div>
        </div>
    );
};

export default CoursePhoto;