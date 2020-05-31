import style from "./Link.module.css";
import React from "react";


export function CheckLink({text}:{text:string}) {
    return  <a className={style.link} href="">{text}</a>
}