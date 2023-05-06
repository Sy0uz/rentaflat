import { AuthAction, AuthActionEnum, AuthState } from "./types";

const initialState: AuthState = {
    isAuth: false,
    isLoading: false,
    error: '',
    username: '',
    password: '',
    isSignUpLoading: false,
}

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionEnum.SET_AUTH:
            return { ...state, isAuth: action.payload };
        case AuthActionEnum.SET_IS_AUTH_LOADING:
            return { ...state, isLoading: action.payload };
        case AuthActionEnum.SET_IS_AUTH_ERROR:
            return { ...state, error: action.payload };
        case AuthActionEnum.SET_USERNAME:
            return { ...state, username: action.payload };
        case AuthActionEnum.SET_PASSWORD:
            return { ...state, password: action.payload };
        case AuthActionEnum.SET_IS_SIGNUP_LOADING:
            return { ...state, isSignUpLoading: action.payload };
        default:
            return state;
    }
}