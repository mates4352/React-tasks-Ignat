import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {stateType} from "../../bll/redux-store";
import {changeLoading} from "../../bll/reducers/loading-reducer";

function HW10() {
   const state = useSelector<stateType, stateType>((state) => state);
   const dispatch = useDispatch();
    // useSelector, useDispatch
    const loading = state.loading.isLoading;

    const setLoading = () => {
       dispatch(changeLoading(!loading))
        // dispatch
         setTimeout(() => {
            dispatch(changeLoading(false))
         }, 2000)
        // setTimeout
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div>крутилка...</div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
