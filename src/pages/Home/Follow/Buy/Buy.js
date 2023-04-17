import React, {useEffect, useState} from 'react';
import "./Buy.scss"
import {AiOutlineCheck} from "react-icons/ai"
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import Book from "../../../../assets/img/book1.png";
import BookOne from "../../../../assets/img/book3.svg";
import Book2 from "../../../../assets/img/book2.svg";
import Book1 from "../../../../assets/img/book1.svg";






const Subscription = () => {
    const dispatch = useDispatch()
    const {payment} = useSelector(state => state)

    const navigate = useNavigate();
    const [click, setClick] = useState(false)
    const [name, setName] = useState("")

    const [emailDirty, setEmailDirty] = useState(false)
    const [emailError, setEmailError] = useState("Это поле не может быть пустым")

    const [sat] = useState(true)
    const [valid, setValid] = useState(false)
    const [val, setVal] = useState(false)


    useEffect(() => {
        if (emailError) {
            setValid(false)
        } else {
            setValid(true)
        }
    }, [emailError])

    useEffect(() => {
        if (sat) {
            setVal(false)
        } else {
            setVal(true)
        }
    }, [sat])


    const emailHandler = (e) => {
        setName(e.target.value)
        const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!re.test(String(e.target.value))) {
            setEmailError("Email не корректен")
        } else {
            setEmailError("")
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case "email" :
                setEmailDirty(true)
                break
        }
    }

    const navBtn = () => {
        dispatch({type: "PAYMENT", payload: true})
        navigate('/self')

        setTimeout(() => {
            navigate('/control')
            setTimeout(() => {
                navigate('/')
                dispatch({type: "PAYMENT", payload: false})


            }, 3000)


            }, 2000)
    }
    return (
        <section id="subscription">
            <img className="buyImg3" src={Book2} alt="img"/>
            <img className="buyImg4" src={Book1} alt="img"/>
            <img className="buyImage" src={BookOne} alt="img"/>
            <img className="buyImg2" src={Book} alt="img"/>


            <div className="container">

                <div className="subscription">

                    <h1 className="subscription__h1">Оформление подписки</h1>

                    <div className='subscription--contact'>
                        <h2>ФИО</h2>
                        <input type="text" placeholder="Muslim Bolot Joodarovich" name="name" required/>
                    </div>

                    <div className='subscription--contact'>
                        <h2>Електронная почта</h2>
                        {(emailDirty && emailError) && <div style={{color: "red"}}>{emailError}</div>}
                        <input onChange={e => emailHandler(e)} value={name} onBlur={e => blurHandler(e)} type="text"
                               placeholder='Example@gmail.com' name="email"/>
                    </div>

                    <div className='subscription--contact'>
                        <h2>Номер телефона</h2>
                        <input type="number" placeholder="+996 770 55 55 55" name="name" required/>
                    </div>

                    <div className='subscription--contact'>
                        <h2>Промокод</h2>
                        <input type="password" placeholder="If you do have" name="name" required/>
                    </div>

                    <h2 className="subscription__h11">Оплата</h2>

                    <div className='subscription--card'>

                        <div className="subscription--card__visa">
                            <input type="radio" name="tabs" id="visa"/>
                            <label htmlFor="visa">Visa</label>
                        </div>

                        <div className="subscription--card__visa">
                            <input type="radio" name="tabs" id="visa1"/>
                            <label htmlFor="visa1">Master Card</label>
                        </div>

                    </div>


                    <div className="subscription--card1">

                        <div className='subscription--card1__input'>
                            <h2>Номер карты</h2>
                            <input className="subscription--card1__input--type1" type="number"
                                   placeholder="1234 4567 7788 9210" name="name" required/>
                        </div>

                        <div className='subscription--card1__input'>
                            <h2>Срок</h2>
                            <input className="subscription--card1__input--type" type="number" placeholder="12/25"
                                   name="name" required/>
                        </div>

                        <div className='subscription--card1__input'>
                            <h2>CVV</h2>
                            <input className="subscription--card1__input--type" type="number" placeholder="398"
                                   name="name" required/>
                        </div>

                    </div>


                    <h2 className="subscription__h12">Уровень пакета</h2>


                    <div className="subscription--block">

                        <div style={{
                            border: click ? "1px solid #DFAC4D" : "1px solid white"
                        }} className="subscription--block__colon">
                            <h3>Обычный</h3>

                            <label htmlFor="visa2"><input type="radio" id="visa2" name="tabs"/>Ежемесячно</label>
                            <label htmlFor="visa3"><input type="radio" id="visa3" name="tabs"/>Ежегодно</label>

                            <p><AiOutlineCheck className="subscription--block__colon--icons"/>Все новые статьи</p>
                            <p><AiOutlineCheck className="subscription--block__colon--icons"/>Все мастер классы по
                                саморозвитию</p>
                            <h1 className="subscription--block__colon--h2">Цена: <b>225$</b></h1>
                            {
                                click ?
                                    <button className="subscription--block__colon--btn"
                                            onClick={() => setClick(!click)}>Выбрать</button>
                                    :
                                    <button className="subscription--block__colon--but" disabled={true}
                                            onClick={() => setClick(!click)}>Выбрано</button>

                            }
                        </div>


                        <div style={{
                            border: click ? "1px solid white" : "1px solid #DFAC4D"
                        }} className='subscription--block__colon'>

                            <h3>Интенсив</h3>
                            <label htmlFor="visa4"><input type="radio" id="visa4" name="tabs"/>Ежемесячно</label>
                            <label htmlFor="visa5"><input type="radio" id="visa5" name="tabs"/>Ежегодно</label>

                            <p><AiOutlineCheck className="subscription--block__colon--icons"/>Все новые статьи</p>
                            <p><AiOutlineCheck className="subscription--block__colon--icons"/>Все мастер классы по
                                саморозвитию</p>
                            <p><AiOutlineCheck className="subscription--block__colon--icons"/>Курс по чтению
                                языка <br/> тела</p>
                            <p><AiOutlineCheck className="subscription--block__colon--icons"/>Курс по накоплению <br/>средств
                                с выполотой <br/>долгов</p>
                            <p><AiOutlineCheck className="subscription--block__colon--icons"/>Курс по быстрому <br/>карьерному
                                росту</p>
                            <p><AiOutlineCheck className="subscription--block__colon--icons"/>Курс по одолеванию <br/>страха
                                потери</p>
                            <h1 className="subscription--block__colon--h1">Цена: <b>500$</b><s>750$</s></h1>
                            {
                                click ?
                                    <button className="subscription--block__colon--but" disabled={true}
                                            onClick={() => setClick(!click)}>Выбрано</button>
                                    :
                                    <button className="subscription--block__colon--btn"
                                            onClick={() => setClick(!click)}>Выбрать</button>

                            }
                        </div>
                    </div>


                    {
                        val ?
                            <div>
                                {
                                    click ?
                                        <button disabled={!valid} onClick={() => navBtn()}
                                                className="subscription--btn">Оплатить
                                            500$
                                        </button>
                                        :
                                        <button disabled={!valid} onClick={() => navBtn()}
                                                className="subscription--btn">Оплатить
                                            225$
                                        </button>
                                }

                            </div>
                            :
                            <button disabled={true}
                                    className="subscription--btn1">Оплатить
                                225$
                            </button>
                    }


                    <div className='subscription--label'>
                        <input id="label" disabled={!valid} onClick={() => setVal(!val)} type="checkbox"/>
                        <label htmlFor="label">Я ознакомился и согласен с Условиями оказания услуг</label>
                    </div>

                </div>
            </div>
            <img className="buyImg" src={Book} alt="img"/>

        </section>
    );
};

export default Subscription;