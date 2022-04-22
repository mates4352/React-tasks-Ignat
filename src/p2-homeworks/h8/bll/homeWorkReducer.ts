import {UserType} from "../HW8";

type actionType = actionSortUp | actionSortCheck;
type actionSortUp = {type: 'sort', payload: 'up' | 'down'};
type actionSortCheck = {type: 'check', payload: 18};

export const homeWorkReducer = (state: UserType, action: actionType): UserType => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const newState = [...state].sort((a, b) => {
                if (a.name > b.name) return 1
                else if (a.name < b.name) return -1
                else return 0
            })
            return action.payload === 'up' ? newState : newState.reverse()
        }
        case 'check': {
            return state.filter(item => item.age > action.payload)
        }
        default: return state
    }
}
