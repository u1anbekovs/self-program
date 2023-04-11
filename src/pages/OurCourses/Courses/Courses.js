import React from 'react';
import "./Courses.scss"
import courseBlock from "../../../assets/img/coursblock.png"
import book from "../../../assets/img/book1.png"
import {Link} from "react-router-dom";
const Courses = () => {
    return (
        <section id="course">
            <div className="container">
                <div className="course mt-[-300px]">
                    <h1>Курсы</h1>
                    <div className="course--block">
                        <div className="course--block__block-one">
                            <h1>Создание команды</h1>
                            <div className="course--block__block-one--btn">
                                <p>Обучение</p>
                                <button>Все</button>
                                <button>Новое</button>
                                <button>Новое</button>
                            </div>
                            <img src={courseBlock} alt="img" className="ml-[20px]"/>
                            <p className="mt-[15px] ml-[20px]">Подробнее...</p>
                        </div>
                        <div className="course--block__block-one">
                            <h1>Создание команды</h1>
                            <div className="course--block__block-one--btn">
                                <p>Обучение</p>
                                <button>Все</button>
                                <button>Новое</button>
                                <button>Новое</button>
                            </div>
                            <img src={courseBlock} alt="img" className="ml-[20px]"/>
                            <p className="mt-[15px] ml-[20px]">Подробнее...</p>
                        </div>
                        <div className="course--block__block-one">
                            <h1>Создание команды</h1>
                            <div className="course--block__block-one--btn">
                                <p>Обучение</p>
                                <button>Все</button>
                                <button>Новое</button>
                                <button>Новое</button>
                            </div>
                            <img src={courseBlock} alt="img" className="ml-[20px]"/>
                            <p className="mt-[15px] ml-[20px]">Подробнее...</p>
                        </div>
                    </div>
                    <center>
                    <div className="course--block-btn flex justify-center items-center ml-[-150px]">
                        <img src={book} alt="img" className="mt-[-50px]"/>
                        <Link to={"/button"}><button>Смотреть все курсы</button></Link>
                    </div>
                    </center>
                </div>
            </div>
        </section>
    );
};

export default Courses;