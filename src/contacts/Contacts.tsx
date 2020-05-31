import React from 'react';
import style from "./Contacts.module.css"
import styleContainer from "../common/styles/Container.module.css"


const Contacts = () => {
    return <div className={style.contactsBlock}>
        <div className={`${styleContainer.container} ${style.contactsContainer}`}>
            <h2 className={style.title}>Contacts</h2>
            <div className={style.line}></div>
            <div className={style.inputBlock}>
                <form className={style.formBlock}>
                    <input placeholder={"Name"} className={style.formInput} type="text"/>
                    <input placeholder={"Email"} className={style.formInput} type="text"/>
                    <textarea placeholder={"Enter your massage..."} className={style.formMessage}></textarea>
                </form>
            </div>
            <button className={style.sendButton}>Send</button>

        </div>
    </div>


}

export default Contacts