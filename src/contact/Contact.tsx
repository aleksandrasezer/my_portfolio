import React from "react";
import s from './Contact.module.css'
import sCont from '../common/container/Container.module.css'

export const Contact = () => {
    return (
        <div className={s.contactBlock}>
            <div className={`${sCont.container} ${s.contactContainer}`}>

                <h3 className={s.title}>Contact me</h3>

                <form className={s.contactForm}>

                    <label>Your Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name.." />

                    <label>Company Name</label>
                    <input type="text" id="companyName" name="companyName" placeholder="Your company name..." />

                    <label>Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.." />

                    <input type="submit" value="Send message" />

                </form>


            </div>

        </div>
)
}