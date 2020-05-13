import React from 'react';
import style from "./Footer.module.css"
import styleContainer from "../common/styles/Container.module.css"

const Footer = () => {
    return <div className={style.footerBlock}>
        <div className={`${styleContainer.container} ${style.contactsContainer}`}>
            <h2 className={style.title}>Bohdan Korol</h2>
            <div className={style.socialMediaBlock}>
                <div className={style.icon}></div>
                <div className={style.icon}></div>
                <div className={style.icon}></div>
                <div className={style.icon}></div>
            </div>
            <p>©2020 All rights reserved</p>
        </div>
    </div>
}

export default Footer