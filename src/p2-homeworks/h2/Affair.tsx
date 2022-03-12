import React from 'react'
import {defaultAffairsType} from "./HW2";

type AffairPropsType = {
   // key не нужно типизировать
   _id: number
   affair: defaultAffairsType[]// need to fix any
   deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
   const deleteCallback = (_id: number) => {
      props.deleteAffairCallback(_id)
   }// need to fix

   return (
       <div>
          // show some text

          <button onClick={()=> deleteCallback(props._id)}>X</button>
       </div>
   )
}

export default Affair
