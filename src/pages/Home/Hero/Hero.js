import React from 'react';
import Book from '../../../assets/img/bookBig.png'
import Book1 from '../../../assets/img/book1.svg'
import Book2 from '../../../assets/img/book2.svg'
import Book3 from '../../../assets/img/book3.svg'
import Book4 from '../../../assets/img/book4.svg'



const Hero = () => {
    return (
        <div id="hero">
            <img className="book1" src={Book1} alt="img"/>
            <img className="book2" src={Book2} alt="img"/>
            <div className="container">
                <div className="hero">
                    <div className="hero--title">
                        <h1>Само развитие лучше чем школьное обучение</h1>
                        <p>Здесь вы найдете все для само-обучения.</p>
                        <button>Подобрать пакет</button>
                    </div>
                    <div className="hero--img">
                        <img  src={Book} alt="img"/>
                    </div>
                </div>
            </div>
            <img className="book3" src={Book3} alt="img"/>
            <img className="book4" src={Book4} alt="img"/>
        </div>
    );
};

export default Hero;
