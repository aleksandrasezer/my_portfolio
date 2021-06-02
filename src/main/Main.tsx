import React from "react";
import s from './Main.module.css'
import sCont from '../common/container/Container.module.css'
import avatar from '../images/my_photo.jpg'
import rainbow from '../images/rainbow.png'

export const Main = () => {
    return (
        <div className={s.mainBlock}>

            <div className={sCont.container}>
                <div className={s.greetingBlock}>
                    <span>Hi, there</span>
                    <h1>I am Aleksandra Sezer</h1>
                    <p>Front-end developer</p>
                </div>

                <div className={s.photoBlock}>
                    <span className={s.rainbow}><img src={rainbow} alt='rainbow' /></span>
                    <span className={s.myPhoto}><img src={avatar} alt='my photo' /></span>
                </div>
            </div>
        </div>
    )
}