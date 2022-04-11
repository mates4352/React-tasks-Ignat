import {UserType} from "../HW8";

type actionType = actionSortUp | actionSortDown | actionSortCheck;
type actionSortUp = {type: 'sort', payload: 'up'};
type actionSortDown = {type: 'sort', payload: 'down'};
type actionSortCheck = {type: 'check', payload: 18};

export const homeWorkReducer = (state: UserType, action: actionType): UserType => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const newState = [...state]
            return newState.sort((a, b) => {
                let nameA= a.name.toLowerCase(), nameB=b.name.toLowerCase()
                if(action.payload === 'up'){
                    if (nameA < nameB)
                        return -1
                    if (nameA > nameB)
                        return 1
                    return 0
                }
                else {
                    if (nameA > nameB)
                        return -1
                    if (nameA < nameB)
                        return 1
                    return 0
                }
            })
        }
        case 'check': {
            return state.filter(item => item.age > action.payload)
        }
        default: return state
    }
}
