type InitialStateType = {
    loading: boolean
}

const initState: InitialStateType = {
    loading: false
}

export const loadingReducer = (state = initState, action: LoadingType): InitialStateType => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {
                ...state,
                loading: !state.loading
            }
        }
        default:
            return state
    }
}

export type LoadingType = {
    type: 'LOADING'
}

export const loadingAC = (): LoadingType => {
    return {
        type: 'LOADING',
    } as const
}