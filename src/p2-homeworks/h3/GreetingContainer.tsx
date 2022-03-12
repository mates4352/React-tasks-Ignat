import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>): void => { // need to fix any
        setName(e.currentTarget.value)
    }

    const user = () => {
        addUserCallback(name)
        setName('')
        setError('')
    }

    const addUserKeyEnter = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        const isEnter = e.key === 'Enter';

        if(name.trim() === '' && isEnter) setError('error')
        else if (isEnter) user()
    }

    const addUser = (): void => {
        if(name.trim() === '') setError('error')
        else user()
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            addUserKeyEnter={addUserKeyEnter}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
