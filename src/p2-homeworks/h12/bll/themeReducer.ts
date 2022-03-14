const initState = {
    theme: ''
};

export const themeReducer = (state: InitialStateType = initState, action: ChangeThemeType): InitialStateType => { // fix any
    switch (action.type) {
        case 'CHANGE-THEME': {
            return {
                ...state,
                theme: action.payload.theme
            }
        }
        default:
            return state;
    }
};

export const changeThemeC = (theme: string) => ({type: 'CHANGE-THEME', payload: {theme}} as const);
type ChangeThemeType = ReturnType<typeof changeThemeC>

type InitialStateType = typeof initState