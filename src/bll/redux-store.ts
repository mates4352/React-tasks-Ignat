import {combineReducers, createStore} from "redux";
import {loadingReducer} from "./reducers/loading-reducer";

export type stateType =  ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
   loading: loadingReducer,
})

export const store = createStore(rootReducer)
