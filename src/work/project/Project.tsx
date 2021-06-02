import React from "react";
import s from './Project.module.css'

type ProjectPropsType = {
    title: string
    description: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={s.projectBlock}>
            <div className={s.projectThumb}>

            </div>

            <div className={s.description}>
                <h3>{props.title}</h3>
                <span>{props.description}</span>
            </div>
        </div>
    )
}