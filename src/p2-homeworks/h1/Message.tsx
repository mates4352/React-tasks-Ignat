import React from 'react'
import s from './Message.module.css'

type messageType = {
   avatar: string
   name: string
   message: string
   time: string
}

function Message(props: messageType){
   return (
       <div className={s.message}>
          <img className={s.img} src={props.avatar} alt="Изображение avatar"/>

          <div className={s.content}>
             <div className={s.angle}></div>
             <h2 className={s.name}>{props.name}</h2>
             <p className={s.text}>{props.message}</p>
             <time className={s.time}>{props.time}</time>
          </div>
       </div>
   )
}

export default Message
