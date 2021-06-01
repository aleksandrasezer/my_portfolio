import React from "react";
import s from './Work.module.css'
import sCont from '../common/Container.module.css'
import {Project} from "./project/Project";


export const Work = () => {
    return (
        <div className={s.workBlock}>
            <div className={sCont.container}>
                <h2 className={s.title}>Work</h2>

                <div className={s.skills}>
                    <Project/>

                    <Project/>

                    <Project/>
                </div>

            </div>
        </div>
    )
}