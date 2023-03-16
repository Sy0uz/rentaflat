import { AppDispatch } from "../..";
import { PostService } from "../../../API/PostService";
import { IFlat } from "../../../types/IFlat";
import { FlatAction, FlatPageEnum } from "./types";

export const FlatPageActionCreators = {
    setFlat: (payload:IFlat):FlatAction => ({type:FlatPageEnum.SET_FLAT, payload}),
    setFlatIsLoading: (payload:boolean):FlatAction => ({type:FlatPageEnum.SET_FLAT_IS_LOADING, payload}),
    setFlatEror: (payload:string):FlatAction => ({type:FlatPageEnum.SET_FLAT_ERROR, payload}),
    fetchFlat:(id: string) => async (dispatch:AppDispatch) => {
        try {
            dispatch(FlatPageActionCreators.setFlatIsLoading(true));
            setTimeout(async () => {
                const response = await PostService.getFlat(id);
                if (response)
                    dispatch(FlatPageActionCreators.setFlat(response));
                else 
                    dispatch(FlatPageActionCreators.setFlatEror(`Квартира с ID: ${id} не найдена!`))
                
                dispatch(FlatPageActionCreators.setFlatIsLoading(false));
            }, 1000)
        } catch (error) {
            dispatch(FlatPageActionCreators.setFlatEror('Ошибка!!!'))
        }
    }
}