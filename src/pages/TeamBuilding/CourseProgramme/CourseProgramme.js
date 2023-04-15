import React, {useState} from 'react';
import {MdArrowBackIosNew} from "react-icons/md";
import "./CourseProgramme.scss"
import book from "../../../assets/img/Kaif10.png"


const CourseProgramme = () => {
    const [selected, setSelected] = useState(false)
    const [selected2, setSelected2] = useState(false)
    const [selected3, setSelected3] = useState(false)
    const [selected4, setSelected4] = useState(false)
    const [selected5, setSelected5] = useState(false)
    return (
        <>
            <div className="pt-[200px]">
                <div className="container">
                    <div className="aboutAcc">
                        <div className="aboutAcc__line"></div>
                        <h1 className="aboutAcc--h1">ПРОГРАММА КУРСА</h1>
                    </div>
                    <div className="accordion">
                        <div onClick={() => {
                            setSelected(!selected)
                            setSelected2(false)
                            setSelected3(false)
                            setSelected4(false)
                            setSelected5(false)

                        }} style={{
                            height: selected ? "270px" : "",
                            transition: ".5s"
                        }}
                             className="accordion--btn mt-30px">
                            <div className="accordion--btn__items">
                                <div className="flex items-center justify-between">
                                    <div
                                        className="accordion--btn__items--btn-one flex items-center gap-[55px] mt-[15px] ml-[30px]">
                                        <button>Модуль 1</button>
                                        <h1>Введение</h1>

                                    </div>
                                    <div
                                        className="accordion--btn__items--btn-two flex items-center gap-[55px] mt-[15px] ">
                                        <button>1 неделя</button>
                                        <div className="accordion--btn__items--btn-two__text">
                                            <h1 onClick={() => {

                                            }}
                                                style={{display: selected ? "none" : " block"}}
                                            >More</h1>
                                            <h1 className="accordion--btn__items--btn-two__text"
                                                onClick={() => {

                                                }}
                                                style={{display: selected ? "block" : " none"}}
                                            >Main</h1>
                                            <MdArrowBackIosNew style={{
                                                transform: selected ? "rotate(90deg)" : ""
                                            }} className="item--icon mr-[10px]"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-[240px] mt-[20px]" onClick={() => {
                                    setSelected(!selected)

                                }} style={{
                                         display: selected ? "block" : "none",
                                         transition: ".5s"
                                     }}>

                                    <h1 className="text-white ">Урок 1: Введение в курс </h1>
                                    <h1 className="text-white mt-[3px]">Урок 2: Бизнес онлайн и офлайн</h1>
                                    <h1 className="text-white mt-[3px]">Урок 3: Имидж компании</h1>
                                    <p className="text-white mt-[3px]">Результат модуля: вы узнаете, как будет
                                        проходить <br/>обучение, познакомитесь с
                                        трекером и другими<br/> участниками курса.</p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute">
                            <img src={book} alt="img"/>
                        </div>
                        <div onClick={() => {
                            setSelected2(!selected2)
                            setSelected(false)
                            setSelected3(false)
                            setSelected4(false)
                            setSelected5(false)
                        }} style={{
                            height: selected2 ? "270px" : "",
                            transition: ".5s"
                        }}
                             className="accordion--btn mt-30px">

                            <div className="accordion--btn__items">
                                <div className="flex items-center justify-between">
                                    <div
                                        className="accordion--btn__items--btn-one flex items-center gap-[55px] mt-[15px] ml-[30px]">
                                        <button>Модуль 2</button>
                                        <h1>Команда</h1>

                                    </div>
                                    <div
                                        className="accordion--btn__items--btn-two flex items-center gap-[55px] mt-[15px] ">
                                        <button>1 неделя</button>
                                        <div className="accordion--btn__items--btn-two__text">
                                            <h1 onClick={() => {

                                            }}
                                                style={{display: selected2 ? "none" : " block"}}
                                            >More</h1>
                                            <h1 className="accordion--btn__items--btn-two__text"
                                                onClick={() => {

                                                }}
                                                style={{display: selected2 ? "block" : " none"}}
                                            >Main</h1>
                                            <MdArrowBackIosNew style={{
                                                transform: selected2 ? "rotate(90deg)" : ""
                                            }} className="item--icon mr-[10px]"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-[240px]  mt-[20px]" onClick={() => {
                                    setSelected2(!selected2)

                                }}
                                     style={{
                                         display: selected2 ? "block" : "none"
                                     }}>
                                    <h1 className="text-white ">Урок 1: Введение в курс </h1>
                                    <h1 className="text-white mt-[3px]">Урок 2: Бизнес онлайн и офлайн</h1>
                                    <h1 className="text-white mt-[3px]">Урок 3: Имидж компании</h1>
                                    <p className="text-white mt-[3px]">Результат модуля: вы узнаете, как будет
                                        проходить <br/>обучение, познакомитесь с
                                        трекером и другими<br/> участниками курса.</p>
                                </div>
                            </div>
                        </div>

                        <div onClick={() => {
                            setSelected3(!selected3)
                            setSelected(false)
                            setSelected2(false)
                            setSelected4(false)
                            setSelected5(false)
                        }} style={{
                            height: selected3 ? "270px" : "",
                            transition: ".5s"
                        }}
                             className="accordion--btn mt-30px">

                            <div className="accordion--btn__items">
                                <div className="flex items-center justify-between">
                                    <div
                                        className="accordion--btn__items--btn-one flex items-center gap-[55px] mt-[15px] ml-[30px]">
                                        <button>Модуль 3</button>
                                        <h1>Лидер</h1>
                                    </div>
                                    <div
                                        className="accordion--btn__items--btn-two flex items-center gap-[55px] mt-[15px] ">
                                        <button>1 неделя</button>
                                        <div className="accordion--btn__items--btn-two__text">
                                            <h1 className="accordion--btn__items--btn-two__text" onClick={() => {

                                            }}
                                                style={{display: selected3 ? "none" : " block"}}
                                            >More</h1>
                                            <h1
                                                onClick={() => {

                                                }}
                                                style={{display: selected3 ? "block" : " none"}}
                                            >Main</h1>
                                            <MdArrowBackIosNew style={{
                                                transform: selected3 ? "rotate(90deg)" : ""
                                            }} className="item--icon mr-[10px]"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-[240px]  mt-[20px]" onClick={() => {
                                    setSelected3(!selected3)
                                }}
                                     style={{
                                         display: selected3 ? "block" : "none"
                                     }}>

                                    <h1 className="text-white ">Урок 1: Введение в курс </h1>
                                    <h1 className="text-white mt-[3px]">Урок 2: Бизнес онлайн и офлайн</h1>
                                    <h1 className="text-white mt-[3px]">Урок 3: Имидж компании</h1>
                                    <p className="text-white mt-[3px]">Результат модуля: вы узнаете, как будет
                                        проходить <br/>обучение, познакомитесь с
                                        трекером и другими<br/> участниками курса.</p>
                                </div>
                            </div>
                        </div>
                        <div onClick={() => {
                            setSelected4(!selected4)
                            setSelected(false)
                            setSelected2(false)
                            setSelected3(false)
                            setSelected5(false)
                        }} style={{
                            height: selected4 ? "270px" : "",
                            transition: ".5s"
                        }}
                             className="accordion--btn mt-30px">

                            <div className="accordion--btn__items">
                                <div className="flex items-center justify-between">
                                    <div
                                        className="accordion--btn__items--btn-one flex items-center gap-[55px] mt-[15px] ml-[30px]">
                                        <button>Модуль 4</button>
                                        <h1>Построение команды</h1>

                                    </div>
                                    <div
                                        className="accordion--btn__items--btn-two flex items-center gap-[55px] mt-[15px] ">
                                        <button>1 неделя</button>
                                        <div className="accordion--btn__items--btn-two__text">
                                            <h1 onClick={() => {
                                            }}
                                                style={{display: selected4 ? "none" : " block"}}
                                            >More</h1>
                                            <h1 onClick={() => {
                                            }}
                                                style={{display: selected4 ? "block" : " none"}}>Main</h1>
                                            <MdArrowBackIosNew style={{
                                                transform: selected4 ? "rotate(90deg)" : "",
                                            }} className="item--icon mr-[10px]"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="ml-[240px]  mt-[20px]" onClick={() => {
                                    setSelected4(!selected4)
                                }}
                                     style={{
                                         display: selected4 ? "block" : "none"
                                     }}>

                                    <h1 className="text-white ">Урок 1: Введение в курс </h1>
                                    <h1 className="text-white mt-[3px]">Урок 2: Бизнес онлайн и офлайн</h1>
                                    <h1 className="text-white mt-[3px]">Урок 3: Имидж компании</h1>
                                    <p className="text-white mt-[3px]">Результат модуля: вы узнаете, как будет
                                        проходить <br/>обучение, познакомитесь с
                                        трекером и другими<br/> участниками курса.</p>
                                </div>
                            </div>
                        </div>
                        <div onClick={() => {
                            setSelected5(!selected5)
                            setSelected(false)
                            setSelected2(false)
                            setSelected3(false)
                            setSelected4(false)

                        }} style={{
                            height: selected5 ? "270px" : "",
                            transition: ".5s"
                        }}
                             className="accordion--btn mt-30px">
                            <div className="accordion--btn__items">
                                <div className="flex items-center justify-between">

                                    <div
                                        className="accordion--btn__items--btn-one flex items-center gap-[55px] mt-[15px] ml-[30px]">
                                        <button>Модуль 5</button>
                                        <h1>Динамика команды</h1>
                                    </div>

                                    <div
                                        className="accordion--btn__items--btn-two flex items-center gap-[55px] mt-[15px] ">
                                        <button>1 неделя</button>
                                        <div className="accordion--btn__items--btn-two__text">
                                            <h1 onClick={() => {

                                            }}
                                                style={{display: selected5 ? "none" : " block"}}
                                            >More</h1>
                                            <h1 className="accordion--btn__items--btn-two__text"
                                                onClick={() => {

                                                }}
                                                style={{display: selected5 ? "block" : " none"}}
                                            >Main</h1>
                                            <MdArrowBackIosNew style={{
                                                transform: selected5 ? "rotate(90deg)" : ""
                                            }} className="item--icon mr-[10px]"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="ml-[240px] mt-[20px]" onClick={() => {
                                    setSelected5(!selected5)
                                }}
                                     style={{
                                         display: selected5 ? "block" : "none",
                                         transition: ".5s all"
                                     }}>

                                    <h1 className="text-white ">Урок 1: Введение в курс </h1>
                                    <h1 className="text-white mt-[3px]">Урок 2: Бизнес онлайн и офлайн</h1>
                                    <h1 className="text-white mt-[3px]">Урок 3: Имидж компании</h1>
                                    <p className="text-white mt-[3px]">Результат модуля: вы узнаете, как будет
                                        проходить <br/>обучение, познакомитесь с
                                        трекером и другими<br/> участниками курса.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default CourseProgramme;