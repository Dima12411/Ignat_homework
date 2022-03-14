import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value,setValue]=useState<Array<number>>([0,100])

    const onChangeRange = (valueForRange: number) => {
        setValue([valueForRange, value[1]])
    }
    const onChangeRange2 = (value: Array<number>) => {
        debugger
        setValue(value)
    }

    return (
        <div>
            <hr/>
            homeworks 11
            <div>
                <div>{value[0]}</div>
                <SuperRange onChangeRange={onChangeRange} value={value[0]}/>
            </div>

            <div>
                <div>{value[0]}</div>
                <SuperDoubleRange onChangeRange={onChangeRange2} value={value}/>
                <div>{value[1]}</div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
