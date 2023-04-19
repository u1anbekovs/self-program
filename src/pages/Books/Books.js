import React from "react";
import "./Books.scss";
import {OurBackand} from "../../backand/statyBackand";

const Books = () => {
    return (
        <div>
            <div id="book">
                <div className="container">
                    <div className="book">
                        <a href="">Наши курсы</a>
                        <h1>Статьи</h1>
                        <div className='book--tabs'>
                            <button>Все разделы</button>
                            <button>Новое</button>
                            <button>Софт-скилс</button>
                            <button>Книги</button>
                            <button>Окружение</button>
                        </div>


                        <div className="book--cards">

                            {OurBackand.slice(0, 12).map((el) => (
                                <div className="book--cards__car">
                                    <div className="book--cards__car--logos">
                                        <h3>{el.title}</h3>
                                        <button>{el.button}</button>
                                    </div>
                                    <div className="book--cards__car--info">
                                        <h4>{el.learn}</h4>
                                        <div className="book--cards__car--info__btn">
                                            {el.buttons.map((btn) => (
                                                <button>{btn.title}</button>
                                            ))}
                                        </div>
                                    </div>

                                    <img
                                        src={el.image}
                                        alt=""
                                        className="book--card__imgCourse"/>
                                    <div className="book--cards__car--item">
                                        <a href="">{el.btnFinish}</a>
                                        <a href="">{el.dataFinish}</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Books;