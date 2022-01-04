import React from 'react'
import {findAllByDisplayValue} from "@testing-library/react";
import s from './Affairs.module.css'
import {AffairType} from "./HW2";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}
    const stylePriority = {
        color: 'white',
        border: '1px solid black',
        marginLeft: '20px',
        backgroundColor: props.affair.priority === 'low' ? 'green' : props.affair.priority === 'middle' ? 'orange' : 'red'
    }
    return (
        <div>
            {
                <div className={s.flex}>
                    {props.affair.name}:
                    <div className={s.span}>
                        <span
                        style={stylePriority}>
                        {props.affair.priority}
                    </span>
                    </div>
                    <div>
                    {/*<button onClick={deleteCallback}>X</button>*/}
                    <SuperButton className={s.delete}
                        onClick={deleteCallback}>X</SuperButton>
                    </div>
                </div>
            }
            <br/>
        </div>
    )
}

export default Affair
