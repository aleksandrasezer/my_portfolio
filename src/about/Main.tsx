import React from "react";
import s from './Main.module.css'
import sCont from '../common/Container.module.css'
import avatar from '../images/my_photo.jpg'

export const Main = () => {
    return (
        <div className={s.mainBlock}>

            <div className={sCont.container}>
                <div className={s.greetingBlock}>
                    <span>Hi, there</span>
                    <h1>I am Aleksandra Sezer</h1>
                    <p>i am awesome</p>
                </div>

                <div className={s.photoBlock}>
                    <img src={avatar} alt={'my photo'} />
                </div>
            </div>
        </div>
    )
}