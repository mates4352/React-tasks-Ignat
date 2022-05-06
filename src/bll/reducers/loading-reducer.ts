export type loadingState = {
   isLoading: boolean
}

type changeLoadingType = ReturnType<typeof changeLoading>;

type actionType = changeLoadingType;

const initialState: loadingState = {
   isLoading: false
}

export const loadingReducer = (state: loadingState = initialState, action: actionType): loadingState => {
   switch (action.type) {
      case 'CHANGE-LOADING':
         return {...state, isLoading: action.isLoading}
      default: return state
   }
}

export const changeLoading = (isLoading: boolean) => {
   return {type: 'CHANGE-LOADING', isLoading} as const
}
