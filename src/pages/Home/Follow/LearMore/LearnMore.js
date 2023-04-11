import React, {useState} from 'react';
import "./LearnMore.scss"
import {AiOutlineCheck, AiOutlineClose} from "react-icons/ai";
import {useNavigate} from "react-router-dom";
import Accardeon from "../../Accardeon/Accardeon";


const ToLearn = () => {
    const navigate = useNavigate();
    const [learn, setLearn] = useState(false)

    return (
        <section id="learn">
            <div className="container">
                <div className="learn">
                    <div className="learn--text">
                        <p>Пакеты / Подробнее о пакетах</p>
                        <h1>ВЫБЕРИТЕ СВОЙ ПАКЕТ УЧАСТИЯ</h1>
                        <h2>Присоединяйтесь к нам и начните свой путь к успеху.</h2>
                    </div>
                    <div className="learn--block">

                        {
                            learn ?
                                <div style={{
                                    opacity: '0.5',
                                    border: "1px solid #DFAC4D",
                                    cursor: 'pointer'
                                }} onClick={() => setLearn(!learn)} className="learn--block__colon">
                                    <h3>Обычный</h3>
                                    <label htmlFor="visa2"><input type="radio" id="visa2"
                                                                  name="tabs"/>Ежемесячно</label>
                                    <label htmlFor="visa3"><input type="radio" id="visa3" name="tabs"/>Ежегодно</label>
                                    <p><AiOutlineCheck className="learn--block__colon--icons"/>Все новые статьи</p>
                                    <p><AiOutlineCheck className="learn--block__colon--icons"/>Все мастер классы по
                                        саморозвитию</p>
                                    <h1 className="learn--block__colon--h2">Цена: <b>225$</b></h1>
                                    <button disabled={true} onClick={() => navigate(`/buy`)}>Подписаться</button>
                                </div>
                                :
                                <div style={{
                                    transform: 'scale(1.2)',
                                }} aria-disabled={true} onClick={() => setLearn(!learn)}
                                     className="learn--block__colon">
                                    <h3>Обычный</h3>
                                    <label htmlFor="visa2"><input type="radio" id="visa2"
                                                                  name="tabs"/>Ежемесячно</label>
                                    <label htmlFor="visa3"><input type="radio" id="visa3" name="tabs"/>Ежегодно</label>
                                    <p><AiOutlineCheck className="learn--block__colon--icons"/>Все новые статьи</p>
                                    <p><AiOutlineCheck className="learn--block__colon--icons"/>Все мастер классы по
                                        саморозвитию</p>
                                    <h1 className="learn--block__colon--h2">Цена: <b>225$</b></h1>
                                    <button onClick={() => navigate(`/buy`)}>Подписаться</button>
                                </div>
                        }


                        {
                            learn ?
                                <div style={{
                                    transform: "scale(1.2)"
                                }} onClick={() => setLearn(!learn)} className='learn--block__colon'>
                                    <h3>Интенсив</h3>
                                    <label htmlFor="visa4"><input type="radio" id="visa4"
                                                                  name="tabs"/>Ежемесячно</label>
                                    <label htmlFor="visa5"><input type="radio" id="visa5" name="tabs"/>Ежегодно</label>

                                    <p><AiOutlineCheck className="learn--block__colon--icons"/>Все новые статьи</p>
                                    <p><AiOutlineCheck className="learn--block__colon--icons"/>Все мастер классы по
                                        саморозвитию</p>
                                    <p><AiOutlineCheck className="learn--block__colon--icons"/>Курс по чтению
                                        языка <br/> тела</p>
                                    <p><AiOutlineCheck className="learn--block__colon--icons"/>Курс по накоплению <br/>средств
                                        с выполотой <br/>долгов</p>
                                    <p><AiOutlineCheck className="learn--block__colon--icons"/>Курс по быстрому <br/>карьерному
                                        росту</p>
                                    <p><AiOutlineCheck className="learn--block__colon--icons"/>Курс по одолеванию <br/>страха
                                        потери</p>
                                    <h1 className="learn--block__colon--h1">Цена: <b>750$</b></h1>
                                    <button onClick={() => navigate(`/buy`)}>Подписаться</button>
                                </div>
                                :
                                <div style={{
                                    border: "1px solid #DFAC4D",
                                    opacity: '0.5',
                                    cursor: 'pointer'
                                }} onClick={() => setLearn(!learn)} className='learn--block__colon'>
                                    <h3>Интенсив</h3>
                                    <label htmlFor="visa4"><input type="radio" id="visa4"
                                                                  name="tabs"/>Ежемесячно</label>
                                    <label htmlFor="visa5"><input type="radio" id="visa5" name="tabs"/>Ежегодно</label>

                                    <p><AiOutlineCheck className="learn--block__colon--icons"/>Все новые статьи</p>
                                    <p><AiOutlineCheck className="learn--block__colon--icons"/>Все мастер классы по
                                        саморозвитию</p>
                                    <p><AiOutlineCheck className="learn--block__colon--icons"/>Курс по чтению
                                        языка <br/> тела</p>
                                    <p><AiOutlineCheck className="learn--block__colon--icons"/>Курс по накоплению <br/>средств
                                        с выполотой <br/>долгов</p>
                                    <p><AiOutlineCheck className="learn--block__colon--icons"/>Курс по быстрому <br/>карьерному
                                        росту</p>
                                    <p><AiOutlineCheck className="learn--block__colon--icons"/>Курс по одолеванию <br/>страха
                                        потери</p>
                                    <h1 className="learn--block__colon--h1">Цена: <b>750$</b></h1>
                                    <button disabled={true} onClick={() => navigate(`/buy`)}>Подписаться</button>
                                </div>
                        }
                    </div>

                    <div className="learn--var">
                        <h2>В “Обычный” пакет участия для само-развития включает в себя: </h2>
                        <p><AiOutlineCheck className="learn--var__icons"/>Все новые статьи</p>
                        <p><AiOutlineCheck className="learn--var__icons"/>Все мастер классы по саморозвитию</p>
                        <p><AiOutlineClose className="learn--var__icons"/>Курс по чтению языка тела</p>
                        <p><AiOutlineClose className="learn--var__icons"/>Курс по накоплению средств с выполотой долгов
                        </p>
                        <p><AiOutlineClose className="learn--var__icons"/>Курс по быстрому карьерному росту</p>
                        <p><AiOutlineClose className="learn--var__icons"/>Курс по одолеванию страха потери</p>
                    </div>
                    <div className="learn--var1">
                        <h1>Плюсы пакета</h1>
                        <p>Выбрав этот пакет вы получаете возможность получать неогранниченное количество
                            самых <br/> эксклюзивных
                            мастер классов, а также очень много наиполезнейших статей от самых разных <br/> успешных
                            людей чтобы
                            получать ежедневные уроки чтобы улучшить жизнь и не только</p>
                    </div>
                </div>
            </div>
            <Accardeon/>
        </section>
    );
};


export default ToLearn;





export default ToLearn;

