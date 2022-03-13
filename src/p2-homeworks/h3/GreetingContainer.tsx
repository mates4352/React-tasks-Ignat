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
      const value = e.currentTarget.value;
      if (!value) {
         setError('Error')
         setName('')
      } else {
         setError('')
         setName(value)
      }
   }

   const user = () => {
      addUserCallback(name)
      setName('')
      setError('')
   }

   const addUserKeyEnter = (e: React.KeyboardEvent<HTMLInputElement>): void => {
      const isEnter = e.key === 'Enter';
      if (isEnter) user()
   }

   const userBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value;
      !value && setError('Error')
   }

   const addUser = (): void => {
      if (!name.trim()) setError('Error')
      else user()
   }

   const totalUsers = users.length // need to fix

   return (
       <Greeting
           name={name}
           setNameCallback={setNameCallback}
           addUser={addUser}
           addUserKeyEnter={addUserKeyEnter}
           userBlur={userBlur}
           error={error}
           totalUsers={totalUsers}
       />
   )
}

export default GreetingContainer
