import { AppDispatch } from "../..";
import { PostService } from "../../../API/PostService";
import { AuthAction, AuthActionEnum } from "./types";

export const AuthActionCreators = {
    setIsAuth: (payload: boolean):AuthAction => ({ type: AuthActionEnum.SET_AUTH, payload }),
    setIsAuthLoading: (payload: boolean):AuthAction => ({ type: AuthActionEnum.SET_IS_AUTH_LOADING, payload }),
    setIsAuthError: (payload: string):AuthAction => ({ type: AuthActionEnum.SET_IS_AUTH_ERROR, payload }),
    setUsername: (payload: string):AuthAction => ({ type: AuthActionEnum.SET_USERNAME, payload }),
    setPassword: (payload: string):AuthAction => ({ type: AuthActionEnum.SET_PASSWORD, payload }),
    authUser: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsAuthLoading(true));
            setTimeout(async () => {
                const response = await PostService.authUser(username, password);
                if (response) {
                    dispatch(AuthActionCreators.setUsername(username));
                    dispatch(AuthActionCreators.setPassword(password));
                    dispatch(AuthActionCreators.setIsAuthError(''));
                    dispatch(AuthActionCreators.setIsAuth(true));
                }
                else {
                    dispatch(AuthActionCreators.setIsAuthError('Неверный логин или пароль'));
                    dispatch(AuthActionCreators.setIsAuth(false));
                }
                dispatch(AuthActionCreators.setIsAuthLoading(false));
            }, 500)
        } catch (error) {
            dispatch(AuthActionCreators.setIsAuthError('Ошибка!!!'));
            dispatch(AuthActionCreators.setIsAuthLoading(false));
        }
    },
    checkUserAuth: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsAuthLoading(true));
            setTimeout(async () => {
                const response = await PostService.checkUserAuth();
                if (response) {
                    dispatch(AuthActionCreators.setUsername(response.username));
                    dispatch(AuthActionCreators.setPassword(response.password));
                    dispatch(AuthActionCreators.setIsAuth(true));
                }
                dispatch(AuthActionCreators.setIsAuthLoading(false))
            }, 300)
        } catch (error) {
            dispatch(AuthActionCreators.setIsAuth(false));
            dispatch(AuthActionCreators.setIsAuthError('Ошибка!!!'));
            dispatch(AuthActionCreators.setIsAuthLoading(false));
        }
    },
    logoutUser: () => async (dispatch: AppDispatch) => {
        await PostService.logoutUser();
        dispatch(AuthActionCreators.setIsAuth(false));
        dispatch(AuthActionCreators.setUsername(''));
        dispatch(AuthActionCreators.setPassword(''));
        dispatch(AuthActionCreators.setIsAuthError(''));
    }
}