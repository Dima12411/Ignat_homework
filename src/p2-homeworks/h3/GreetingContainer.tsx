import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";


type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter") {
            addUserCallback(name)
            setName("")

        }
    }
    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        let processingName = e.currentTarget.value.trim()
        if (processingName !== '') {
            setName(processingName)
            setError('')
        } else {
            setName('')
            setError('name is require')
        }
    }


    const addUser = () => {
        alert(`Hello ${name} !`)
        addUserCallback(name)
        setName("")
    }

    let totalUsers = users.length
    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyPressCallback={onKeyPressCallback}
        />
    )
}

export default GreetingContainer
