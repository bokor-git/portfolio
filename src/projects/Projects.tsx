import React from 'react';
import style from "./Projects.module.css"
import styleContainer from "../common/styles/Container.module.css"
import Project from "./project/Project";


const socialNetwork = {
    name: "iRunner",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aliquam aspernatur atque cum fugit molestiae nihil repudiandae sed totam ullam! Debitis earum re"
}

const todoList = {
    name: "Todolist",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aliquam aspernatur atque cum fugit molestiae nihil repudiandae sed totam ullam! Debitis earum re"
}

const Projects = () => {
    return <div className={style.projectsBlock}>
        <div className={`${styleContainer.container} ${style.projectContainer}`}>
            <h2 className={style.title}>Projects</h2>
            <div className={style.projectBlock}>
                <Project name={socialNetwork.name} description={socialNetwork.description}/>
                <Project name={todoList.name} description={todoList.description}/>
            </div>

        </div>
    </div>


}

export default Projects