import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: (name: string) => void
    error: string
    totalUsers: number
    onKeyPressCallback: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressCallback} // деструктуризация пропсов
) => {
    const inputClass = (error) ? s.error : s.error2

    return (
        <div>
            <input value={name} onChange={setNameCallback} onKeyPress={onKeyPressCallback} className={inputClass}/>
            {/*<button onClick={()=>addUser(name)}>add</button>*/}
            <SuperButton onClick={()=>addUser(name)}>add</SuperButton>
            <span>{totalUsers}</span>
            <div className={s.errorColor}><span>{error}</span></div>
        </div>
    )
}

export default Greeting
