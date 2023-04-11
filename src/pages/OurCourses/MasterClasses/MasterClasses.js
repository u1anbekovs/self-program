import React from 'react';
import "./MasterClasses.scss"
import courseBlock from "../../../assets/img/coursblock.png";
import {Link} from "react-router-dom";
const MasterClasses = () => {
    return (
        <section id="master">
            <div className="container">
                <div className="master">
                    <div className="master">
                        <h1>Мастер классы</h1>
                        <div className="master--block">
                            <div className="master--block__block-one">
                                <h1>Создание команды</h1>
                                <div className="master--block__block-one--btn">
                                    <p>Обучение</p>
                                    <button>Все</button>
                                    <button>Новое</button>
                                    <button>Новое</button>
                                </div>
                                <img src={courseBlock} alt="img" className="ml-[20px]"/>
                                <p className="mt-[15px] ml-[20px]">Подробнее...</p>
                            </div>
                            <div className="master--block__block-one">
                                <h1>Создание команды</h1>
                                <div className="master--block__block-one--btn">
                                    <p>Обучение</p>
                                    <button>Все</button>
                                    <button>Новое</button>
                                    <button>Новое</button>
                                </div>
                                <img src={courseBlock} alt="img" className="ml-[20px]"/>
                                <p className="mt-[15px] ml-[20px]">Подробнее...</p>
                            </div>
                            <div className="master--block__block-one">
                                <h1>Создание команды</h1>
                                <div className="master--block__block-one--btn">
                                    <p>Обучение</p>
                                    <button>Все</button>
                                    <button>Новое</button>
                                    <button>Новое</button>
                                </div>
                                <img src={courseBlock} alt="img" className="ml-[20px]"/>
                                <p className="mt-[15px] ml-[20px]">Подробнее...</p>
                            </div>
                            <div className="master--block__block-one">
                                <h1>Создание команды</h1>
                                <div className="master--block__block-one--btn">
                                    <p>Обучение</p>
                                    <button>Все</button>
                                    <button>Новое</button>
                                    <button>Новое</button>
                                </div>
                                <img src={courseBlock} alt="img" className="ml-[20px]"/>
                                <p className="mt-[15px] ml-[20px]">Подробнее...</p>
                            </div>
                            <div className="master--block__block-one">
                                <h1>Создание команды</h1>
                                <div className="master--block__block-one--btn">
                                    <p>Обучение</p>
                                    <button>Все</button>
                                    <button>Новое</button>
                                    <button>Новое</button>
                                </div>
                                <img src={courseBlock} alt="img" className="ml-[20px]"/>
                                <p className="mt-[15px] ml-[20px]">Подробнее...</p>
                            </div>
                            <div className="master--block__block-one">
                                <h1>Создание команды</h1>
                                <div className="master--block__block-one--btn">
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
                            <div className="master--block-btn">
                                <Link to={"/button"}><button>Смотреть все мастер классы</button></Link>
                            </div>
                        </center>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MasterClasses;