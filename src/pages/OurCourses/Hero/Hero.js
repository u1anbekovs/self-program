import React from 'react';
import LeaveImg from "../../../assets/img/leave-img.png";
import Book from "../../../assets/img/book1.png";
import BookOne from "../../../assets/img/book3.svg"
import gray from "../../../assets/img/Accortitle.svg"
import {useNavigate} from "react-router-dom";
import './Hero.scss'

const Hero = () => {
    const navigate = useNavigate()
    return (
        <section id="leave">
            <div className="container">
                <div className="leave">
                    <img className="img3" src={gray} alt=""/>
                    <div className="leave--leave-block">
                        <div className="leave--leave-block__leave-text">
                            <h1>Наши курсы</h1>
                            <p>Получайте новые знания, навыки и<br/> возможности для эффективной жизни.</p>
                            <div className="leave--leave-block__leave-text--btn">
                                <div className="leave--leave-block__leave-text--btn__btn-one">
                                    <button onClick={() => navigate(`/learn-more`)}>Подобрать пакет</button>
                                </div>
                                <div className="leave--leave-block__leave-text--btn__btn-two">
                                    <button>Войти</button>
                                </div>
                            </div>
                        </div>
                        <img src={LeaveImg} alt="img"/>
                    </div>
                    <img className="img1" src={Book} alt="img"/>
                    <img className="img2" src={BookOne} alt="img"/>
                </div>
            </div>
        </section>
    );
};

export default Hero;