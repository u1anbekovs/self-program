import React, {useState} from 'react';
import Book from "../../../../../assets/img/logo.svg";
import password from "../password";
import {useNavigate} from "react-router-dom";

const TwoLogin = () => {
    const [forget, setForget] = useState("")
    const [forgetOne, setForgetOne] = useState("")
    const [forgotError , setForgotError] = useState(false)
    const[error, setError] = useState('Пароли не совпадают!')
    const navigate = useNavigate()

function handleConfirmPassword() {
    if (forget === forgetOne) {
        // alert('Succes')
        navigate('/')
    } else {
        setForgotError(true)
    }
}

    return (
        <div id='twoLogin'>
            <div className="container">
                <div className="twoLogin">
                    <div className="twoLogin--text">
                        <img src={Book} alt=""/>
                        <h2>SELF DEVELOPING SCHOOL</h2>
                        <div className="twoLogin--text__block">
                            <h3>Востановить пароль</h3>
                            {forgotError ? <p style={{
                                color:"red",
                                marginLeft:"-150px"
                            }}>{error}</p> : null}

                            <input type="password" placeholder={'Новый пароль'}
                                   onChange={(e) => setForget(e.target.value)}
                            />
                            <input type="password" placeholder={'Повторите'}
                                   onChange={(e) => setForgetOne(e.target.value)}/>
                            <button onClick={handleConfirmPassword}>Востановить пароль</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TwoLogin;