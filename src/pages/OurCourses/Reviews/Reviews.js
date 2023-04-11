import React from 'react';

import "./Reviews.scss"
import Slider from "react-slick";


const Reviews = () => {
    const settings = {
        slidesToShow: 1.8,
        cssEase: "linear"
    };

    return (
        <section id="reviews">
            <div className="reviews">
                <Slider {...settings}>
                    <div className="reviews--block">
                        <p>Твой опыт бесценен!Ты бьешь в самое сердце и в этом твой успех, любого <br/> бизнесмена!У меня
                            есть шанс научиться на твоих ошибках.Этот опыт <br/> бесценен!</p>
                        <div className="reviews--block__hr">
                            <h2>Muslim Bolot</h2>
                            <hr/>
                            <h2>Предпрениматель</h2>
                        </div>
                    </div>
                    <div className="reviews--block">
                        <p>Твой опыт бесценен!Ты бьешь в самое сердце и в этом твой успех, любого <br/> бизнесмена!У меня
                            есть шанс научиться на твоих ошибках.Этот опыт <br/> бесценен!</p>
                        <div className="reviews--block__hr">
                            <h2>Muslim Bolot</h2>
                            <hr/>
                            <h2>Предпрениматель</h2>
                        </div>
                    </div>
                </Slider>


            </div>
        </section>
    );
};

export default Reviews;