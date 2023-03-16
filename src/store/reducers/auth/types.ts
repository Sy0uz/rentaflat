export interface AuthState {
    isAuth: boolean;
}

export enum AuthActionEnum {
    SET_AUTH = "SET_AUTH"
}

interface SetAuthAciton {
    type:AuthActionEnum.SET_AUTH,
    payload: boolean,
}

export type AuthAction = SetAuthAciton;