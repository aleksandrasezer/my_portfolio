import React from "react";
import s from './Footer.module.css'
import sCont from '../common/container/Container.module.css'


export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${sCont.container} ${s.footerContainer}`}>

                <h2 className={s.title}>Aleksandra Sezer</h2>

                <div className={s.contacts}>

                    <div>telegram</div>
                    <div>linkedin</div>
                    <div>whatsapp</div>
                    <div>email</div>
                    <div>instagram</div>

                </div>

                <span className={s.copyright}>
                     2021 All rights reserved
                </span>

            </div>
        </div>
    )
}