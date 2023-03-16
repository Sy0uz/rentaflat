import { AppDispatch } from "../..";
import { PostService } from "../../../API/PostService";
import { IFlat } from "../../../types/IFlat";
import { FlatsAction, FlatsActionEnum } from "./types";

export const FlatsActionCreators = {
    setIsLoading: (payload: boolean): FlatsAction => ({type:FlatsActionEnum.SET_FLATS_IS_LOADING, payload}),
    setError: (payload: string): FlatsAction => ({type:FlatsActionEnum.SET_FLATS_ERROR, payload}),
    clearFlats: (): FlatsAction => ({type:FlatsActionEnum.CLEAR_FLATS}),
    setFlats: (payload: IFlat[]): FlatsAction => ({type:FlatsActionEnum.SET_FLATS, payload}),
    fetchFlats: () => async (dispatch:AppDispatch) => {
        try {
            dispatch(FlatsActionCreators.setIsLoading(true));
            setTimeout(async () => {
                const response:IFlat[] = await PostService.getAllFlats();
                dispatch(FlatsActionCreators.setFlats(response));
                dispatch(FlatsActionCreators.setIsLoading(false));
            }, 1000)
        } catch (error) {
            dispatch(FlatsActionCreators.setError('Ошибка!'))
            dispatch(FlatsActionCreators.setIsLoading(false));
        }
    } 
}