import React, {useState} from "react";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import "./CourseProgramme.scss"
// import CourseBlock from "./CourseBlock/CourseBlock";
// import YouWillLearn from "./YouWillLearn/YouWillLearn";
// import CoursePhoto from "./CoursePhoro/CoursePhoto";

const CourseProgramme = () => {
    const [acc, setAcc] = useState(false);
    const [acc1, setAcc1] = useState(false);
    const [acc2, setAcc2] = useState(false);
    const [acc3, setAcc3] = useState(false);
    const [acc4, setAcc4] = useState(false);

    return (
        <div id="courseProgramme">
            <div className="container">
                <div className="courseProgramme">
                    <h1 className="courseProgramme--title">ПРОГРАММА КУРСА</h1>
                    <div className="courseProgramme--blocks">
                        <div
                            style={{
                                height: acc ? "308px" : "",
                                transition: ".4s"
                            }}
                            className="courseProgramme--blocks__acc"
                        >
                            <button className="courseProgramme--blocks__acc--firstBtn">Модуль 1</button>
                            <div className="courseProgramme--blocks__acc--text">
                                <h1>Введение</h1>
                                <span>Урок 1: Введение в курс </span>
                                <span>Урок 2: Бизнес онлайн и офлайн</span>
                                <span>Урок 3: Имидж компании</span>
                                <p>
                                    Результат модуля: вы узнаете, как будет проходить обучение,
                                    познакомитесь с трекером и другими участниками курса.
                                </p>
                            </div>
                            <button className="courseProgramme--blocks__acc--secondBtn">1 неделя</button>
                            <div className="courseProgramme--blocks__acc--icon">
                                <div>{!acc ? <span>More</span> : <span>Main</span>}</div>

                                {!acc ? (
                                    <IoIosArrowDown
                                        onClick={() => {
                                            setAcc(true);
                                            setAcc1(false);
                                            setAcc2(false);
                                            setAcc3(false);
                                            setAcc4(false);
                                        }}
                                        className="courseProgramme--blocks__acc--icon__giveMe"/>) : (
                                    <IoIosArrowUp
                                        onClick={() => setAcc(false)}
                                        className="courseProgramme--blocks__acc--icon__giveMe"
                                    />
                                )}
                            </div>
                        </div>
                        <div
                            style={{
                                height: acc1 ? "308px" : "",
                                transition: ".4s"
                            }}
                            className="courseProgramme--blocks__acc"
                        >
                            <button className="courseProgramme--blocks__acc--firstBtn">
                                Модуль 2
                            </button>
                            <div className="courseProgramme--blocks__acc--text">
                                <h1>Команда</h1>
                                <span>Урок 1: Введение в курс </span>
                                <span>Урок 2: Бизнес онлайн и офлайн</span>
                                <span>Урок 3: Имидж компании</span>
                                <p>
                                    Результат модуля: вы узнаете, как будет проходить обучение,
                                    познакомитесь с трекером и другими участниками курса.
                                </p>
                            </div>
                            <button className="courseProgramme--blocks__acc--secondBtn">
                                1 неделя
                            </button>
                            <div className="courseProgramme--blocks__acc--icon">
                                <div>{!acc1 ? <span>More</span> : <span>Main</span>}</div>
                                {!acc1 ? (
                                    <IoIosArrowDown
                                        onClick={() => {
                                            setAcc(false);
                                            setAcc1(true);
                                            setAcc2(false);
                                            setAcc3(false);
                                            setAcc4(false);
                                        }}
                                        className="courseProgramme--blocks__acc--icon__giveMe"
                                    />
                                ) : (
                                    <IoIosArrowUp
                                        onClick={() => setAcc1(false)}
                                        className="courseProgramme--blocks__acc--icon__giveMe"
                                    />
                                )}
                            </div>
                        </div>
                        <div
                            style={{
                                height: acc2 ? "308px" : "",
                                transition: ".4s"
                            }}
                            className="courseProgramme--blocks__acc"
                            id="1"
                        >
                            <button className="courseProgramme--blocks__acc--firstBtn">
                                Модуль 3
                            </button>
                            <div className="courseProgramme--blocks__acc--text">
                                <h1>Лидер</h1>
                                <span>Урок 1: Введение в курс </span>
                                <span>Урок 2: Бизнес онлайн и офлайн</span>
                                <span>Урок 3: Имидж компании</span>
                                <p>
                                    Результат модуля: вы узнаете, как будет проходить обучение,
                                    познакомитесь с трекером и другими участниками курса.
                                </p>
                            </div>
                            <button className="courseProgramme--blocks__acc--secondBtn">
                                1 неделя
                            </button>
                            <div className="courseProgramme--blocks__acc--icon">
                                <div>{!acc2 ? <span>More</span> : <span>Main</span>}</div>

                                {!acc2 ? (
                                    <IoIosArrowDown
                                        onClick={() => {
                                            setAcc(false);
                                            setAcc1(false);
                                            setAcc2(true);
                                            setAcc3(false);
                                            setAcc4(false);
                                        }}
                                        className="courseProgramme--blocks__acc--icon__giveMe"
                                    />
                                ) : (
                                    <IoIosArrowUp
                                        onClick={() => setAcc2(false)}
                                        className="courseProgramme--blocks__acc--icon__giveMe"
                                    />
                                )}
                            </div>
                        </div>
                        <div
                            style={{
                                height: acc3 ? "308px" : "",
                                transition: ".4s"
                            }}
                            className="courseProgramme--blocks__acc"
                        >
                            <button className="courseProgramme--blocks__acc--firstBtn">
                                Модуль 4
                            </button>
                            <div className="courseProgramme--blocks__acc--text">
                                <h1>Построение команды</h1>
                                <span>Урок 1: Введение в курс </span>
                                <span>Урок 2: Бизнес онлайн и офлайн</span>
                                <span>Урок 3: Имидж компании</span>
                                <p>
                                    Результат модуля: вы узнаете, как будет проходить обучение,
                                    познакомитесь с трекером и другими участниками курса.
                                </p>
                            </div>
                            <button className="courseProgramme--blocks__acc--secondBtn">
                                1 неделя
                            </button>
                            <div className="courseProgramme--blocks__acc--icon">
                                <div>{!acc3 ? <span>More</span> : <span>Main</span>}</div>
                                {!acc3 ? (
                                    <IoIosArrowDown
                                        onClick={() => {
                                            setAcc(false);
                                            setAcc1(false);
                                            setAcc2(false);
                                            setAcc3(true);
                                            setAcc4(false);
                                        }}
                                        className="courseProgramme--blocks__acc--icon__giveMe"
                                    />
                                ) : (
                                    <IoIosArrowUp
                                        onClick={() => setAcc3(false)}
                                        className="courseProgramme--blocks__acc--icon__giveMe"
                                    />
                                )}
                            </div>
                        </div>
                        <div
                            style={{
                                height: acc4 ? "308px" : "",
                                transition: ".4s"
                            }}
                            className="courseProgramme--blocks__acc"
                        >
                            <button className="courseProgramme--blocks__acc--firstBtn">
                                Модуль 5
                            </button>
                            <div className="courseProgramme--blocks__acc--text">
                                <h1>Динамика команды</h1>
                                <span>Урок 1: Введение в курс </span>
                                <span>Урок 2: Бизнес онлайн и офлайн</span>
                                <span>Урок 3: Имидж компании</span>
                                <p>
                                    Результат модуля: вы узнаете, как будет проходить обучение,
                                    познакомитесь с трекером и другими участниками курса.
                                </p>
                            </div>
                            <button className="courseProgramme--blocks__acc--secondBtn">
                                1 неделя
                            </button>
                            <div className="courseProgramme--blocks__acc--icon">
                                <div>{!acc4 ? <span>More</span> : <span>Main</span>}</div>

                                {!acc4 ? (
                                    <IoIosArrowDown
                                        onClick={() => {
                                            setAcc(false);
                                            setAcc1(false);
                                            setAcc2(false);
                                            setAcc3(false);
                                            setAcc4(true);
                                        }}
                                        className="courseProgramme--blocks__acc--icon__giveMe"
                                    />
                                ) : (
                                    <IoIosArrowUp
                                        onClick={() => setAcc4(false)}
                                        className="courseProgramme--blocks__acc--icon__giveMe"
                                    />
                                )}
                            </div>
                        </div>
                    </div>

                    {/*<CourseBlock/>*/}
                    {/*<YouWillLearn/>*/}
                    {/*<CoursePhoto/>*/}
                </div>
            </div>
        </div>
    );
};

export default CourseProgramme;