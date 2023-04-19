import React from 'react';
import "./YourLearn.scss"
import Book from "../../../assets/img/aboutCourse.svg";

const YouWillLearn = () => {
    return (
        <div className="container">
            <div className='youWillLearn'>
                <h1>НА КУРСЕ ВЫ НАУЧИТЕСЬ:</h1>
                <img src={Book} alt="" className="youWillLearn--book"/>

                <td>
                    <li>Анализировать и устранять типичные ошибки руководителей в управлении командой</li>
                    <li>Внедрять специальные приемы работы с людьми и командой</li>
                    <li>Создавать команду и эффективно ею управлять в любом проекте</li>
                    <li>Правильно прогнозировать и масштабировать результат работы команды</li>
                    <li>Правильно подходить к вопросам увольнения и продвижения по карьерной лестнице</li>
                </td>
            </div>
        </div>
    );
};

export default YouWillLearn;