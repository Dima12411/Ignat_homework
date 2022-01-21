import React from 'react'
import {findAllByDisplayValue} from "@testing-library/react";
import s from './Affairs.module.css'
import {AffairType, FilterType} from "./HW2";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div>
            {
                <div className={s.task}>
                    <span className={s.name}>
                        {props.affair.name}:</span>
                    <span
                        className={props.affair.priority === 'low' ? s.priority_green : props.affair.priority === 'middle' ? s.priority_yellow : s.priority_red}>
                        [ {props.affair.priority} ]</span>
                    {/*<button onClick={deleteCallback}>X</button>*/}
                    <SuperButton onClick={deleteCallback}>X</SuperButton>

                </div>
            }
        </div>
    )
}

export default Affair
