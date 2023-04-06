import React, { useState } from 'react';
import bookImg from "./../../assets/img/aboutBook.png"

const Books = () => {
    const [book, setBook] = useState([1, 2, 3, 4])
    const [book2, setBook2] = useState([1, 2, 3, 4, 5, 6, 7, 8])

    return (
        <div id="allBooks">
            <div className="container">
                <div className="allBooks">
                    <span className='allBooks--span'>Наши курсы</span>
                    <h1 className="allBooks--title">Статьи</h1>
                    <div className='allBooks--tabs'>
                        <button>Все разделы</button>
                        <button>Новое</button>
                        <button>Софт-скилс</button>
                        <button>Книги</button>
                        <button>Окружение</button>
                    </div>
                    <div className="allBooks--block">
                        <div className="allBooks--block__first">
                            {
                                book.map(el => (
                                    <div className="allBooks--block__first--aboutBooks">
                                        <div className="allBooks--block__first--aboutBooks__title">
                                            <h1>С какой книги начать?</h1>
                                            <button>Новое</button>
                                        </div>
                                        <div className="allBooks--block__first--aboutBooks__tabs">
                                            <h3>Полезные статьи</h3>
                                            <button>Все</button>
                                            <button>Новое</button>
                                            <button>Книги</button>
                                        </div>
                                        <img src={bookImg} alt="" />
                                        <div className='allBooks--block__first--aboutBooks__line' />
                                        <div className="allBooks--block__first--aboutBooks__date">
                                            <h3>Автор: Muslim Bolot</h3>
                                            <h3>Дата: 22.08.22</h3>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='allBooks--block__two'>
                            {
                                book2.map(el => (
                                    <div className="allBooks--block__two--aboutBooks">
                                        <h1 className="allBooks--block__two--aboutBooks__title">С какой книги начать?</h1>
                                        <div className="allBooks--block__two--aboutBooks__tabs">
                                            <h3>Полезные статьи</h3>
                                            <button>Все</button>
                                            <button>Новое</button>
                                            <button>Книги</button>
                                        </div>
                                        <img src={bookImg} alt="" />
                                        <div className='allBooks--block__two--aboutBooks__line' />
                                        <div className="allBooks--block__two--aboutBooks__date">
                                            <h3>Автор: Muslim Bolot</h3>
                                            <h3>Дата: 22.08.22</h3>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Books;