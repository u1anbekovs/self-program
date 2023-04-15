import React from 'react';
import Book from "../../../../../assets/img/logo.svg";

const TwoLogin = () => {
    return (
        <div id='twoLogin'>
            <div className="container">
                <div className="twoLogin">
                    <div className="twoLogin--text">
                        <img src={Book} alt="" />
                        <h2>SELF DEVELOPING SCHOOL</h2>
                        <div className="twoLogin--text__block">
                            <h3>Востановить пароль</h3>
                            <input type="password" placeholder={'Новый пароль'}/>
                            <input type="password" placeholder={'Повторите'}/>
                            <button>Востановить пароль</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TwoLogin;