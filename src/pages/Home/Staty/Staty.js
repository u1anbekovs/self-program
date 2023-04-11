import React, { useState } from 'react';
import aboutBook from "./../../../assets/img/aboutBook.png"
import bookStuty from "./../../../assets/img/bookStuty.png"
import book from "./../../../assets/img/logo.svg"
import { NavLink } from 'react-router-dom';

const Staty = () => {

    const [books, setBooks] = useState([1, 2, 3])
    const [books1, setBooks1] = useState([1, 2])

    return (
        <div id="books">
            <div className="container">
                <div className="books">

                    <img src={book} className='books--img1' alt="" />
                    <img src={book} className='books--img2' alt="" />
                    <img src={book} className='books--img3' alt="" />
                    <img src={book} className='books--img4' alt="" />
                    <div className="books--tabs">
                        <div className="books--tabs__btn">Все разделы</div>
                        <div className="books--tabs__btn">Новое</div>
                        <div className="books--tabs__btn">Софт-скилс</div>
                        <div className="books--tabs__btn">Книги</div>
                        <div className="books--tabs__btn">Окружение</div>
                    </div>

                    <div className="books--block">
                        {
                            books.map(el => (
                                <div className='books--block__aboutBook'>
                                    <h2>С какой книги начать?</h2>
                                    <div className='books--block__aboutBook--start'>
                                        <h4>Полезные статьи</h4>
                                        <button>Все</button>
                                        <button className="ml-[5px]">Новое</button>
                                        <button className="">Книги</button>
                                    </div>
                                    <img src={aboutBook} alt="" />
                                    <div className="books--block__aboutBook--line" />
                                    <div className='books--block__aboutBook--end'>
                                        <h3>Автор: Muslim Bolot</h3>
                                        <h3>Дата: 22.08.22</h3>
                                    </div>
                                </div>

                            ))
                        }
                    </div>

                    <div className='books--startBlock'>
                        <div className="books--startBlock__firstBlock">
                            {
                                books1.map(el => (
                                    <div className='books--startBlock__firstBlock--aboutBook'>
                                        <h2>С какой книги начать?</h2>
                                        <div className='books--startBlock__firstBlock--aboutBook__start'>
                                            <h4>Полезные статьи</h4>
                                            <button>Все</button>
                                            <button>Новое</button>
                                            <button>Книги</button>
                                        </div>
                                        <img src={aboutBook} alt="" />
                                        <div className="books--startBlock__firstBlock--aboutBook__line" />
                                        <div className='books--startBlock__firstBlock--aboutBook__end'>
                                            <h3>Автор: Muslim Bolot</h3>
                                            <h3>Дата: 22.08.22</h3>
                                        </div>
                                    </div>

                                ))
                            }
                        </div>
                        <div className='books--startBlock__centerBooks'>
                            <div className='books--startBlock__centerBooks--aboutBook'>
                                <h2>С какой книги начать?</h2>
                                <div className='books--startBlock__centerBooks--aboutBook__start'>
                                    <h4>Полезные статьи</h4>
                                    <button>Все</button>
                                    <button>Новое</button>
                                    <button>Книги</button>
                                </div>
                                <img src={aboutBook} alt="" />
                                <img src={bookStuty} className='books--startBlock__centerBooks--aboutBook__img' alt="" />
                                <div className="books--startBlock__centerBooks--aboutBook__line" />
                                <div className='books--startBlock__centerBooks--aboutBook__end'>
                                    <h3>Автор: Muslim Bolot</h3>
                                    <h3>Дата: 22.08.22</h3>
                                </div>
                            </div>
                        </div>
                        <div className="books--startBlock__firstBlock">
                            {
                                books1.map(el => (
                                    <div className='books--startBlock__firstBlock--aboutBook'>
                                        <h2>С какой книги начать?</h2>
                                        <div className='books--startBlock__firstBlock--aboutBook__start'>
                                            <h4>Полезные статьи</h4>
                                            <button>Все</button>
                                            <button>Новое</button>
                                            <button>Книги</button>
                                        </div>
                                        <img src={aboutBook} alt="" />
                                        <div className="books--startBlock__firstBlock--aboutBook__line" />
                                        <div className='books--startBlock__firstBlock--aboutBook__end'>
                                            <h3>Автор: Muslim Bolot</h3>
                                            <h3>Дата: 22.08.22</h3>
                                        </div>
                                    </div>

                                ))
                            }
                        </div>
                    </div>


                    <NavLink to={"/books"}>
                        <button className='books--btn'>Показать болшье</button>
                    </NavLink>

                </div>
            </div>
        </div>
    );
}

export default Staty;