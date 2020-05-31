import React from 'react';
import style from "./Footer.module.css"
import styleContainer from "../common/styles/Container.module.css"

const icons = {
    facebook: "https://www.freepngimg.com/thumb/facebook/62576-like-icons-button-computer-facebook-icon.png",
    instagram: "https://www.magnumandco.com.au/wp-content/uploads/2016/08/Instagram-logo-250x250.png",
    linkedin: "https://i.ya-webdesign.com/images/official-linkedin-icon-png-4.png",
    telegram: "https://pluspng.com/img-png/telegram-logo-png-png-file-svg-980.png"
}


const Footer = () => {
    return <div className={style.footerBlock}>
        <div className={`${styleContainer.container} ${style.footerContainer}`}>
            <h2 className={style.title}>Bohdan Korol</h2>
            <div className={style.socialMediaBlock}>
                <SocialIcon icon={icons.facebook}/>
                <SocialIcon icon={icons.instagram}/>
                <SocialIcon icon={icons.linkedin}/>
                <SocialIcon icon={icons.telegram}/>
            </div>
            <div><p>©2020 All rights reserved</p></div>
        </div>
    </div>
}

export default Footer


export function SocialIcon(props: { icon: string }) {
    return <div className={style.icon}>
        <img src={props.icon}/>
    </div>
}