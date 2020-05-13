import React from 'react';
import style from "./Project.module.css"


const Project = () => {
    return <div className={style.project}>
        <div className={style.projectPhoto}>
            <a className={style.checkProject} href="">Check project</a>
        </div>
        <div className={style.projectDescription}>
            <span className={style.projectName}>Project Name</span>
            <p>Project description </p>
        </div>
    </div>


}

export default Project