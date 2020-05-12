import React from 'react';
import style from "./Contacts.module.css"
import styleContainer from "../common/styles/Container.module.css"


const Contacts = () => {
    return <div className={style.contactsBlock}>
        <div className={`${styleContainer.container} ${style.contactsContainer}`}>
            <h2 className={style.title}>Contacts</h2>
            <div className={style.inputBlock}>
                <form className={style.formBlock} action="">
                    <input className={style.formInput} type="text"/>
                    <input className={style.formInput} type="text"/>
                    <textarea className={style.formTextarea} name="" ></textarea>
                </form>
            </div>
            <button className={style.sendButton}>Send</button>

        </div>
    </div>


}

export default Contacts