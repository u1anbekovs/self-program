import React from "react";
import "../../Books/Books.scss";
import {useNavigate} from "react-router-dom";
import {OurBackand} from "../../../backand/statyBackand";
import styImg from "../../../assets/img/book1.png"
import ress from "../../../assets/img/ress.svg"

const Staty = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div id="book">
                <div className="container">
                    <div className="book">

                        <div className='book--tabs1'>
                            <button>Все разделы</button>
                            <button>Новое</button>
                            <button>Софт-скилс</button>
                            <button>Книги</button>
                            <button>Окружение</button>
                        </div>
                        <img className="book--styImg" src={styImg} alt=""/>
                        <img className="book--styImg1" src={ress} alt=""/>

                        <div className="book--cards">
                            {OurBackand.slice(0, 8).map((el) => (
                                <div className="book--cards__car">
                                    <div className="book--cards__car--logos">
                                        <h3>{el.title}</h3>
                                    </div>
                                    <div className="book--cards__car--info">
                                        <h4>{el.learn}</h4>
                                        <div className="book--cards__car--info__btn">
                                            {el.buttons.map((btn) => (
                                                <button>{btn.title}</button>
                                            ))}
                                        </div>
                                    </div>

                                    <img src={el.image} alt=""/>
                                    <div className="book--cards__car--item">
                                        <a href="">{el.btnFinish}</a>
                                        <a href="">{el.dataFinish}</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <center>
                            <button className="book--button" onClick={() => navigate(`/books`)}>Смотреть все курсы
                            </button>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Staty;