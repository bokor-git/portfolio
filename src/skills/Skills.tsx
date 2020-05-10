import React from 'react';
import style from "./Skills.module.css"
import styleContainer from "../common/styles/Container.module.css"
import Skill from "./Skill/Skill";

const description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit," +
    " sed do eiusmod tempor "


const Skills = () => {
    return <div className={style.skillsBlock}>
        <div className={`${styleContainer.container} ${style.skillsContainer}`}>
            <h2 className={style.title}>My skills</h2>
            <div className={style.skills}>
                <Skill title="JS" description={description}/>
                <Skill title="ReactJS" description={description}/>
                <Skill title="CSS" description={description}/>

            </div>
        </div>
    </div>
}

export default Skills