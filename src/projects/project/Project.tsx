import React from 'react';
import style from "./Project.module.css"


const Project = () => {
    return <div className={style.project}>
        <div className={style.projectPhoto}>
            <a className={style.checkProject} href="">Check project</a>
        </div>
        <div className={style.projectDescription}>
            <span className={style.projectName}>Project Name</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolorem harum quod similique
                sint! Aut ducimus eaque eius eum expedita, explicabo iusto minus molestias possimus sequi sint
                sunt suscipit voluptatem.</p>
        </div>
    </div>


}

export default Project