import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

const setTwoDigitalNumbers = (date: number) => {
    if (date < 10) return '0' + date;
    else return date
}

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        // stop
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        // show
        setShow(true)
    }
    const onMouseLeave = () => {
        // close
        setShow(false)
    }

    const stringTime = `${setTwoDigitalNumbers(date.getHours())}:${setTwoDigitalNumbers(date.getMinutes())}:${setTwoDigitalNumbers(date.getSeconds())}`// fix with date
    const stringDate = `${setTwoDigitalNumbers(date.getDay())}.${setTwoDigitalNumbers(date.getMonth())}.${setTwoDigitalNumbers(date.getFullYear())}` // fix with date

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
