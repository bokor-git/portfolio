import React from 'react';
import style from "./Main.module.css"


const Main = () => {
    return <div className={style.main}>
        <div className={style.container}>
            <div className={style.text}>
                <span>Hi There!</span>
                <h1>I am<br/> Bohdan Korol.</h1>
                <p>Front-End Developer</p>
            </div>
            <div className={style.photo}></div>
        </div>
    </div>
}

export default Main