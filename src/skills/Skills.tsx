import React from "react";
import s from './Skills.module.css'
import sCont from '../common/Container.module.css'
import {Skill} from "./skill/Skill";


export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sCont.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>

                <div className={s.skills}>
                    <Skill title='JS'
                           description='bla bla bla bla bla bla bla bla bla bla bla bla'/>

                    <Skill title='CSS'
                           description='bla bla bla bla bla bla bla bla bla'/>

                    <Skill title='React'
                           description='bla bla bla bla bla bla bla bla bla'/>
                </div>

            </div>
        </div>
    )
}