import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import preloader from './common/Spinner-3.gif'

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType>(state => state.loading.loading)
    const dispatch = useDispatch()

    const setLoading = () => {
        // dispatch
        // setTimeout
        dispatch(loadingAC())
        setTimeout(() => {
            dispatch(loadingAC())
        }, 3000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div>
                        <img src={preloader}/>
                    </div>
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
