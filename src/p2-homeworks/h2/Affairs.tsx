import React from 'react'
import Affair from './Affair'
import {AffairType, defaultAffairsType, FilterType} from './HW2'

type AffairsPropsType = { // need to fix any
    data: Array<defaultAffairsType>
    setFilter: any
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            _id={a._id}
            affair={props.data}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

   function setFilterPriority(priority: FilterType) {
      props.setFilter(priority)
   }

    return (
        <div>

            {mappedAffairs}

            <button onClick={() => setFilterPriority('all')}>All</button>
            <button onClick={() => setFilterPriority('high')}>High</button>
            <button onClick={() => setFilterPriority('middle')}>Middle</button>
            <button onClick={() => setFilterPriority('low')}>Low</button>
        </div>
    )
}

export default Affairs
