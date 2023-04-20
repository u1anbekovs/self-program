import React from "react";
import "./Reviews.scss";
import Slider from "react-slick";
import SliderIcon1 from "./../../../assets/img/Component 32.svg";
import SliderIcon2 from "./../../../assets/img/Component 31.svg";


const Reviews = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        nextArrow: <img src={SliderIcon2} alt="arrow"/>,
        prevArrow: <img src={SliderIcon1} alt="arrow"/>,
    };

    return (
        <div className="review">
            <div className="container">
                <h2 className="review--title">Отзывы</h2>
                <Slider {...settings}>
                    <div className="review--cards">
                        <div className="review--cards__card1">
                            <p>
                                Твой опыт бесценен!Ты бьешь в самое сердце и в этом твой успех,
                                любого <br/> бизнесмена!У меня есть шанс научиться на твоих
                                ошибках.Этот опыт <br/> бесценен!
                                <a href=""> Смотреть полностью</a>
                            </p>
                            <div className="review--cards__card1--info">
                                <h2>Muslim Bolot</h2>
                                <div className="review--cards__card1--info__line"></div>
                                <h2>Предпрениматель</h2>
                            </div>
                        </div>
                    </div>
                    <div className="review--cards">
                        <div className="review--cards__card1">
                            <p>
                                Твой опыт бесценен!Ты бьешь в самое сердце и в этом твой успех,
                                любого <br/> бизнесмена!У меня есть шанс научиться на твоих
                                ошибках.Этот опыт <br/> бесценен!
                                <a href=""> Смотреть полностью</a>
                            </p>
                            <div className="review--cards__card1--info">
                                <h2>Muslim Bolot</h2>
                                <div className="review--cards__card1--info__line"></div>
                                <h2>Предпрениматель</h2>
                            </div>
                        </div>
                    </div>
                    <div className="review--cards">
                        <div className="review--cards__card1">
                            <p>
                                Твой опыт бесценен!Ты бьешь в самое сердце и в этом твой успех,
                                любого <br/> бизнесмена!У меня есть шанс научиться на твоих
                                ошибках.Этот опыт <br/> бесценен!
                                <a href=""> Смотреть полностью</a>
                            </p>
                            <div className="review--cards__card1--info">
                                <h2>Muslim Bolot</h2>
                                <div className="review--cards__card1--info__line"></div>
                                <h2>Предпрениматель</h2>
                            </div>
                        </div>
                    </div>
                    <div className="review--cards">
                        <div className="review--cards__card1">
                            <p>
                                Твой опыт бесценен!Ты бьешь в самое сердце и в этом твой успех,
                                любого <br/> бизнесмена!У меня есть шанс научиться на твоих
                                ошибках.Этот опыт <br/> бесценен!
                                <a href=""> Смотреть полностью</a>
                            </p>
                            <div className="review--cards__card1--info">
                                <h2>Muslim Bolot</h2>
                                <div className="review--cards__card1--info__line"></div>
                                <h2>Предпрениматель</h2>
                            </div>
                        </div>
                    </div>
                    <div className="review--cards">
                        <div className="review--cards__card1">
                            <p>
                                Твой опыт бесценен!Ты бьешь в самое сердце и в этом твой успех,
                                любого <br/> бизнесмена!У меня есть шанс научиться на твоих
                                ошибках.Этот опыт <br/> бесценен!
                                <a href=""> Смотреть полностью</a>
                            </p>
                            <div className="review--cards__card1--info">
                                <h2>Muslim Bolot</h2>
                                <div className="review--cards__card1--info__line"></div>
                                <h2>Предпрениматель</h2>
                            </div>
                        </div>
                    </div>
                    <div className="review--cards">
                        <div className="review--cards__card1">
                            <p>
                                Твой опыт бесценен!Ты бьешь в самое сердце и в этом твой успех,
                                любого <br/> бизнесмена!У меня есть шанс научиться на твоих
                                ошибках.Этот опыт <br/> бесценен!
                                <a href=""> Смотреть полностью</a>
                            </p>
                            <div className="review--cards__card1--info">
                                <h2>Muslim Bolot</h2>
                                <div className="review--cards__card1--info__line"></div>
                                <h2>Предпрениматель</h2>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Reviews;
