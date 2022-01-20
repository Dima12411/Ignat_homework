import React from 'react'
import Affair from './Affair'
import {AffairPriorityType, AffairType, filterAffairs, FilterType} from './HW2'
import s from '../h2/Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    }
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div className={s.button}>

            {mappedAffairs}
            <div className={s.button_container}>
                <div className={s.button}><SuperButton className={s.button_all} onClick={setAll}>All</SuperButton></div>
                <div className={s.button}><SuperButton onClick={setHigh}>High</SuperButton></div>
                <div className={s.button}><SuperButton onClick={setMiddle}>Middle</SuperButton></div>
                <div className={s.button}><SuperButton onClick={setLow}>Low</SuperButton></div>
            </div>
            {/*<button onClick={setAll}>All</button>
            <button onClick={setHigh}>High</button>
            <button onClick={setMiddle}>Middle</button>
            <button onClick={setLow}>Low</button>*/}
        </div>
    )
}

export default Affairs
