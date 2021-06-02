import React from "react";
import s from './Work.module.css'
import sCont from '../common/container/Container.module.css'
import {Project} from "./project/Project";


export const Work = () => {
    return (
        <div className={s.workBlock}>
            <div className={`${sCont.container} ${s.workContainer}`}>

                <h2 className={s.title}>Work</h2>

                <div className={s.projects}>

                    <Project title='social network'
                             description='bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla'/>

                    <Project title='todo list'
                             description='bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla'/>

                    <Project title='counter' description='bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                    bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla'/>

                </div>

            </div>
        </div>
    )
}