import React from "react";
import s from './Title.module.css'

type TitlePropsType = {
    titleName: string
}

export const Title = (props: TitlePropsType) => {
    return <div className={s.titleContainer}>
        <h2>{props.titleName}</h2>
    </div>
}