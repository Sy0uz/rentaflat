export interface AuthState {
    isAuth: boolean;
    isLoading: boolean;
    error: string;
    username: string;
    password: string;
    isSignUpLoading: boolean;
}

export enum AuthActionEnum {
    SET_AUTH = "SET_AUTH",
    SET_USERNAME = "SET_USERNAME",
    SET_PASSWORD = "SET_PASSWORD",
    SET_IS_AUTH_LOADING = "SET_IS_AUTH_LOADING",
    SET_IS_AUTH_ERROR = "SET_IS_AUTH_ERROR",
    SET_IS_SIGNUP_LOADING = "SET_IS_SIGNUP_LOADING",
}

interface SetAuthAciton {
    type: AuthActionEnum.SET_AUTH;
    payload: boolean;
}

interface SetUsernameAction {
    type: AuthActionEnum.SET_USERNAME;
    payload: string;
}

interface SetPasswordAction {
    type: AuthActionEnum.SET_PASSWORD;
    payload: string;
}

interface SetIsAuthLoadingAction {
    type: AuthActionEnum.SET_IS_AUTH_LOADING;
    payload: boolean;
}

interface SetIsAuthErrorAction {
    type: AuthActionEnum.SET_IS_AUTH_ERROR;
    payload: string;
}

interface SetIsSignUpLoadingAction {
    type: AuthActionEnum.SET_IS_SIGNUP_LOADING;
    payload: boolean;
}

export type AuthAction = SetAuthAciton
    | SetUsernameAction
    | SetPasswordAction
    | SetIsAuthLoadingAction
    | SetIsAuthErrorAction
    | SetIsSignUpLoadingAction;