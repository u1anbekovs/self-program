import React, {useEffect, useState} from 'react';
import "./Buy.scss"
import {AiOutlineCheck} from "react-icons/ai"
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

const Subscription = () => {
   const dispatch = useDispatch()
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
    // const navBtn = () => {
    //     navigate('/self')
    //     setTimeout(() => {
    //         navigate('/control')
    //         setTimeout(() => {
    //             navigate('/')
    //         }, 2000)
    //     }, 3000)
    // }

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
        </section>
    );
};

export default Subscription;









// import React, {useState} from 'react';
// import right from "../../../../../src/assets/img/right.svg"
// import book from "../../../../../src/assets/img/book.png"
// import book2 from "../../../../../src/assets/img/book2.png"
// import book3 from "../../../../../src/assets/img/book3.png"
// import book5 from "../../../../../src/assets/img/book5.png"
// import book6 from "../../../../../src/assets/img/book6.png"
//
// const Buy = () => {
//
//     const [check, setCheck] = useState(true)
//     const [check2, setCheck2] = useState(false)
//     const [check3, setCheck3] = useState(false)
//     const [line, setLine] = useState(true)
//     const [line3, setLine3] = useState(true)
//     return (
//         <div id="buy">
//             <div className="container">
//                 <div className="buy">
//
//                     <div className="buy--card">
//                         <h1>Оформление подписки</h1>
//                         <div className="buy--card__input">
//                             <div className="buy--card__input--in">
//                                 <p>ФИО</p>
//                                 <input type="text" placeholder="Muslim Bolot Joodarovich"/>
//                             </div>
//                             <div className="buy--card__input--in">
//                                 <p>Електронная почта</p>
//                                 <input type="email" placeholder="Example@gmail.com"/>
//                             </div>
//                             <div className="buy--card__input--in">
//                                 <p>Номер телефона</p>
//                                 <input type="number" placeholder="+996 770 55 55 55 "/>
//                             </div>
//                             <div className="buy--card__input--in">
//                                 <p>Промокод</p>
//                                 <input type="password" placeholder="If you do have"/>
//                             </div>
//
//                             <div className="buy--card__input--check">
//                                 <p>Оплата</p>
//                                 <div className="buy--card__input--check__check2">
//                                     <div className="buy--card__input--check__check2--visa">
//                                         <div style={{
//                                             background: check3 !== true ? "none" : "white"
//                                         }} onClick={() => {
//                                             setCheck3(!check3)
//                                         }} className="buy--card__input--check__check2--visa__radio">
//                                         </div>
//                                         <p>Visa</p>
//
//                                     </div>
//                                     <div className="buy--card__input--check__check2--visa2">
//                                         <div style={{
//                                             background: check3 !== true ? "white" : "none"
//                                         }} onClick={() => {
//                                             setCheck3(!check3)
//                                         }} className="buy--card__input--check__check2--visa__radio"></div>
//                                         <p>CVV</p>
//
//                                     </div>
//
//
//                                 </div>
//                                 <p>Номер карты</p>
//                                 <div className="buy--card__input--check__radio">
//
//                                     <input type="password" placeholder="1234 4567 7788 9210"/>
//
//                                     <div className="buy--card__input--check__radio--cvv">
//                                         <div className="buy--card__input--check__radio--cvv__srok">
//                                             <p>Срок</p>
//                                             <input type="number" placeholder="12/25"/>
//                                         </div>
//                                         <div className="buy--card__input--check__radio--cvv__srok">
//
//                                             <p>CVV</p>
//
//                                             <input type="number" placeholder="398"/>
//                                         </div>
//
//                                     </div>
//
//                                 </div>
//
//
//                             </div>
//
//                             <div className="buy--card__input--paketa">
//                                 <p>Уровень пакета</p>
//
//                             </div>
//                             <div className="buy--card__input--viv">
//                                 <div style={{border: line3 !== false ? "1px solid #FFFFFF" : "2px solid red"}}
//                                      className="buy--card__input--simple">
//                                     <div className="buy--card__input--simple__allvays">
//                                         <h2>Обычный</h2>
//                                         <div className="buy--card__input--simple__allvays--as">
//                                             <div style={{
//                                                 background: check !== true ? "white" : "none"
//                                             }} onClick={() => {
//                                                 setCheck(!check)
//                                             }} className="buy--card__input--simple__allvays--as__kick"></div>
//                                             <p>Ежемесячно</p>
//
//                                         </div>
//
//                                         <div className="buy--card__input--simple__allvays--as">
//                                             <div style={{
//                                                 background: check !== true ? "none" : "white"
//                                             }} onClick={() => {
//                                                 setCheck(!check)
//                                                 // setCheck(true)
//                                             }} className="buy--card__input--simple__allvays--as__kick"></div>
//                                             <p>Ежегодно</p>
//
//                                         </div>
//                                         <div className="buy--card__input--simple__allvays--right">
//                                             <img src={right} alt="img"/>
//                                             <p>Все новые статьи</p>
//
//                                         </div>
//                                         <div className="buy--card__input--simple__allvays--right2">
//                                             <img src={right} alt="img"/>
//                                             <p>Все мастер классы по саморозвитию</p>
//
//                                         </div>
//                                     </div>
//                                     <div className="buy--card__input--simple__cost">
//                                         <div className="buy--card__input--simple__cost--som3">
//                                             <h1><span>Цена</span>: 225$</h1>
//                                         </div>
//                                         <button onClick={() => {
//                                             setLine3(!line3)
//                                             setLine(!line)
//                                         }} style={{
//                                             background: line !== true ? "white" : "none",
//                                         }}><h6 style={{
//                                             display: line !== true ? "none" : "block"
//                                         }}>Выбрать </h6>
//                                             <span style={{
//                                                 display: line !== true ? "block" : "none"
//                                             }}>Выбрно</span>
//
//                                         </button>
//                                     </div>
//                                 </div>
//                                 <div style={{
//                                     border: line !== false ? "1px solid #FFFFFF" : "2px solid red"
//                                 }} className="buy--card__input--simple2">
//                                     <div className="buy--card__input--simple__allvays">
//                                         <h2>Интенсив</h2>
//                                         <div className="buy--card__input--simple__allvays--as">
//                                             <div style={{
//                                                 background: check2 !== true ? "white" : "none"
//                                             }} onClick={() => {setCheck(!check2)}} className="buy--card__input--simple__allvays--as__kick"></div>
//                                             <p>Ежемесячно</p>
//
//                                         </div>
//
//                                         <div className="buy--card__input--simple__allvays--as">
//                                             <div style={{
//                                                 background: check2 !== true ? "none" : "white"
//                                             }} onClick={() => {
//                                                 setCheck2(!check2)
//                                                 // setCheck(true)
//                                             }} className="buy--card__input--simple__allvays--as__kick"></div>
//                                             <p>Ежегодно</p>
//
//                                         </div>
//                                         <div className="buy--card__input--simple__allvays--right">
//                                             <img src={right} alt=""/>
//                                             <p>Все новые статьи</p>
//
//                                         </div>
//                                         <div className="buy--card__input--simple__allvays--right2">
//                                             <img src={right} alt="img"/>
//                                             <p>Все мастер классы по саморозвитию</p>
//
//                                         </div>
//                                         <div className="buy--card__input--simple__allvays--right2">
//                                             <img src={right} alt="img"/>
//                                             <p>Курс по чтению языка тела</p>
//
//                                         </div>
//                                         <div className="buy--card__input--simple__allvays--right2">
//                                             <img src={right} alt="img"/>
//                                             <p>Курс по накоплению средств с выполотой долгов</p>
//
//                                         </div>
//                                         <div className="buy--card__input--simple__allvays--right2">
//                                             <img src={right} alt="img"/>
//                                             <p>Курс по накоплению средств с выполотой долгов</p>
//
//                                         </div>
//                                     </div>
//                                     <div className="buy--card__input--simple__cost">
//                                         <div className="buy--card__input--simple__cost--som">
//                                             <h1><span>Цена</span>: 500$ <span style={{
//                                                 fontSize: "15px",
//                                                 textDecorationLine: "line-through"
//                                             }}>750$</span></h1>
//                                         </div>
//                                         <button onClick={() => {
//                                             setLine(!line)
//                                             setLine3(!line3)
//
//                                         }} style={{
//                                             color:line3 !== true ? "none": "black",
//                                             background:line !== true ? "none": "white"
//
//                                         }}> <h6 style={{
//                                             display:line3 !== true ? "block": "none"
//                                         }}>Выбрать</h6><span style={{
//                                             display:line3 !== true ? "none": "block"
//
//
//                                         }}>Выбрано</span></button>
//                                     </div>
//                                 </div>
//                             </div>
//
//                             <div className="buy--card__input--choose">
//
//                                 <button style={{
//                                     background: line !== true ? "white" : "none"
//                                 }}><h5 style={{
//                                     display: line !== true ? "block" : "none"
//                                 }}>Оплатить 250$</h5> <span></span> <span style={{display: line !== true ? "none" : "block"}}>Оплатить  500$</span> </button>
//                                 <div className="buy--card__input--choose__agree">
//                                     <input type="checkbox"/>
//                                     <p>Я ознакомился и согласен с Условиями оказания услуг</p>
//                                 </div>
//                             </div>
//
//                         </div>
//                     </div>
//                     <div className="buy--book">
//                         <img src={book} className="buy--book__books" alt="img"/>
//                         <img src={book2} className="buy--book__books2" alt="img"/>
//                         <img src={book3} className="buy--book__books3" alt="img"/>
//                         <img src={book5} className="buy--book__books5" alt="img"/>
//                         <img src={book6} className="buy--book__books6" alt="img"/>
//                         <img src={book6} className="buy--book__books7" alt="img"/>
//                         <img src={book6} className="buy--book__books8" alt="img"/>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default Buy;