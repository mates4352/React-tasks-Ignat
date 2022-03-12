import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
   name: string // need to fix any
   setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
   addUser: () => void // need to fix any
   addUserKeyEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void
   error: string // need to fix any
   totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, addUserKeyEnter, error, totalUsers} // деструктуризация пропсов
) => {
   const inputClass = s.error // need to fix with (?:)

   return (
       <div>
          <input value={name} onChange={setNameCallback} onKeyUp={addUserKeyEnter} className={inputClass}/>
          <span>{error && error}</span>
          <button onClick={addUser}>add</button>
          <span>{totalUsers}</span>
       </div>
   )
}

export default Greeting
