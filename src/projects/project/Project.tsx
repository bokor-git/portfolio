import React from 'react';
import style from "./Project.module.css"


type ProjectPropsType = {
    name:string
    description:string
}

const Project = (props:ProjectPropsType) => {
    return <div className={style.project}>
        <div className={style.projectPhoto}>
            <a className={style.checkProject} href="">Check project</a>
        </div>
        <div className={style.projectDescription}>
            <h4>{props.name}</h4>
            <p>{props.description}</p>
        </div>
    </div>


}

export default Project