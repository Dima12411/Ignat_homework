import React, {ChangeEvent, useState} from 'react';
import {RequestAPI} from "./api/ApiForHW13";

const HW13 = () => {
    const [cheked, setCheked] = useState<boolean>(false)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCheked(e.currentTarget.checked)
    }
    const onClickHandler = () => {
        RequestAPI.check(cheked)
            .then((res) => {
                return res.data
            })
            .catch ((error) => {
                console.log({...error});
                console.log(error.response ? error.response.data.errorText : error.message);
            })
    }

    return (
        <div>
            <button onClick={onClickHandler}>Request</button>
            <input onChange={onChangeHandler} type="checkbox"/>
        </div>
    );
};

export default HW13;