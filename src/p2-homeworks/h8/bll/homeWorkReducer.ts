import {UserType} from "../HW8";

export const homeWorkReducer = (state: Array<UserType>, action: allActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'SORT-UP': {
            let stateCopy = [...state]
           return stateCopy.sort((a,b) => a.age > b.age ? -1 : 1)
        }
        case 'SORT-DOWN': {
            let stateCopy = [...state]
            return stateCopy.sort((a,b) => a.age < b.age ? -1 : 1)
        }
        case 'CHECK-OF-LEGAL-AGE': {
            return state.filter(f => f.age >= action.payload)
        }
        default: return state
    }
}

export type allActionType = SortUpType | CheckOfLegalAgeType | SortDownType

type SortUpType = ReturnType<typeof sortUp>

const sortUp = () => {
    return {
        type: 'SORT-UP',
        payload: 'up'
    } as const
}

type SortDownType = ReturnType<typeof sortDown>

const sortDown = () => {
    return {
        type: 'SORT-DOWN',
        payload: 'down'
    } as const
}

type CheckOfLegalAgeType = ReturnType<typeof checkOfLegalAge>

const checkOfLegalAge = () => {
    return {
        type: 'CHECK-OF-LEGAL-AGE',
        payload: 18
    } as const
}