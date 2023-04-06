
import React, {useState} from 'react';
import "./LearnMore.scss"
import {AiOutlineCheck, AiOutlineClose} from "react-icons/ai";
import {useNavigate} from "react-router-dom";


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
                                }} aria-disabled={true} onClick={() => setLearn(!learn)} className="learn--block__colon">
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
        </section>
    );
};

export default ToLearn;









// import React, { useEffect, useState } from 'react';
// import { BsCheckLg } from "react-icons/bs"
// import "./LearnMore.scss"
// import { BsCheck2 } from "react-icons/bs"
// import { MdClose } from "react-icons/md"
// import BookBg from "./../../../../assets/img/logo.svg"
//
// const LearnMore = () => {
//     const [active1, setActive1] = useState(false)
//     const [active2, setActive2] = useState(true)
//
//     const getActive1 = () => {
//         setActive1(!active1)
//         setActive2(true)
//     }
//     const getActive2 = () => {
//         setActive2(!active2)
//         setActive1(false)
//     }
//
//
//     return (
//         <div id="learnMore">
//             <div className="container">
//                 <div className="learnMore">
//                     <p className="learnMore--p">Пакеты / Подробнее о пакетах</p>
//                     <h1 className="learnMore--titleh1">ВЫБЕРИТЕ СВОЙ ПАКЕТ УЧАСТИЯ</h1>
//                     <p className="learnMore--titleP">Присоединяйтесь к нам и начните свой путь к успеху.</p>
//                     <div className="learnMore--cards">
//                         <div className="learnMore--cards__card1"
//                             style={{
//                                 transition: ".4s",
//                                 transform: active1 ? "scale(1.1)" : "",
//                             }} onClick={getActive1}>
//                             <h1>Обычный</h1>
//                             <div className="learnMore--cards__card1--inputMonth">
//                                 <input type="radio" id="radioMonth" name='qestion' />
//                                 <label htmlFor="radioMonth">Ежемесячно</label>
//                             </div>
//                             <div className="learnMore--cards__card1--inputYear">
//                                 <input type="radio" id="radioYear" name='qestion' />
//                                 <label htmlFor="radioYear">Ежегодно</label>
//                             </div>
//                             <div className="learnMore--cards__card1--icons">
//                                 <h2><BsCheckLg /></h2>
//                                 <p>Все новые статьи</p>
//                             </div>
//                             <div className="learnMore--cards__card1--icons">
//                                 <h2><BsCheckLg /></h2>
//                                 <p>Все мастер классы по саморозвитию</p>
//                             </div>
//                             <h2 className="learnMore--cards__card1--prace">Цена: <b>225$</b></h2>
//                             <button className="learnMore--cards__card1--btnFollow">Подписаться</button>
//                         </div>
//
//                         <div style={{
//                             transition: ".4s",
//                             transform: active2 ? "" : "scale(1.1)"
//                         }}
//                             className="learnMore--cards__card1"
//                             onClick={getActive2}>
//                             <h1>Интенсив</h1>
//                             <div className="learnMore--cards__card1--inputMonth">
//                                 <input type="radio" id="radioMonth" name='qestion2' />
//                                 <label htmlFor="radioMonth">Ежемесячно</label>
//                             </div>
//                             <div className="learnMore--cards__card1--inputYear">
//                                 <input type="radio" id="radioYear" name='qestion2' />
//                                 <label htmlFor="radioYear">Ежегодно</label>
//                             </div>
//                             <div className="learnMore--cards__card1--icons">
//                                 <h2><BsCheckLg /></h2>
//                                 <p>Все новые статьи</p>
//                             </div>
//                             <div className="learnMore--cards__card1--icons">
//                                 <h2><BsCheckLg /></h2>
//                                 <p>Все мастер классы по саморозвитию</p>
//                             </div>
//                             <div className="learnMore--cards__card1--icons">
//                                 <h2><BsCheckLg /></h2>
//                                 <p>Курс по чтению языка тела</p>
//                             </div>
//                             <div className="learnMore--cards__card1--icons">
//                                 <h2><BsCheckLg /></h2>
//                                 <p>Курс по накоплению средств с выполотой долгов</p>
//                             </div>
//                             <div className="learnMore--cards__card1--icons">
//                                 <h2><BsCheckLg /></h2>
//                                 <p>Курс по быстрому карьерному росту</p>
//                             </div>
//                             <div className="learnMore--cards__card1--icons">
//                                 <h2><BsCheckLg /></h2>
//                                 <p>Курс по одолеванию страха потери</p>
//                             </div>
//                             <h2 className="learnMore--cards__card1--prace2">Цена: <b>750$</b></h2>
//                             <button className="learnMore--cards__card1--btnFollow">Подписаться</button>
//                         </div>
//
//                     </div>
//                 </div>
//                 <div className="learnMore--info">
//                     <p>В <b>“Обычный”</b> пакет участия для само-развития включает в себя: </p>
//                     <div className="learnMore--info__fraces">
//                         <div className="learnMore--info__fraces--icon">
//                             <h2><BsCheck2 /></h2>
//                             <p>Все новые статьи</p>
//                         </div>
//                         <div className="learnMore--info__fraces--icon">
//                             <h2><BsCheck2 /></h2>
//                             <p>Все мастер классы по саморозвитию</p>
//                         </div>
//                         <div className="learnMore--info__fraces--icon">
//                             <h2>{active2 ? <MdClose /> : <BsCheck2 />}</h2>
//                             <p>Курс по чтению языка тела</p>
//                         </div>
//                         <div className="learnMore--info__fraces--icon">
//                             <h2>{active2 ? <MdClose /> : <BsCheck2 />}</h2>
//                             <p>Курс по накоплению средств с выполотой долгов</p>
//                         </div>
//                         <div className="learnMore--info__fraces--icon">
//                             <h2>{active2 ? <MdClose /> : <BsCheck2 />}</h2>
//                             <p>Курс по быстрому карьерному росту</p>
//                         </div>
//                         <div className="learnMore--info__fraces--icon">
//                             <h2>{active2 ? <MdClose /> : <BsCheck2 />}</h2>
//                             <p>Курс по одолеванию страха потери</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="learnMore--plusPackag">
//                     <h3>Плюсы пакета</h3>
//                     <p>Выбрав этот пакет вы получаете возможность получать неогранниченное количество самых
//                         эксклюзивных мастер классов, а также очень много наиполезнейших статей от самых
//                         разных успешных людей чтобы получать ежедневные уроки чтобы улучшить жизнь и не
//                         только</p>
//                 </div>
//
//             </div>
//
//
//         </div>);
// };
//
// export default LearnMore;