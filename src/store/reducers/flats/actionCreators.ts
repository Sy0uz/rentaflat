import { AppDispatch } from "../..";
import { PostService } from "../../../API/PostService";
import { IFlat } from "../../../types/IFlat";
import { FlatsAction, FlatsActionEnum } from "./types";

export const FlatsActionCreators = {
    setIsLoading: (payload: boolean): FlatsAction => ({type:FlatsActionEnum.SET_FLATS_IS_LOADING, payload}),
    setVisitedIsLoading: (payload: boolean): FlatsAction => ({type: FlatsActionEnum.SET_VISITED_FLATS_IS_LOADING, payload}),
    changeIsQuest: (payload: boolean): FlatsAction => ({type: FlatsActionEnum.CHANGE_IS_QUEST, payload}),
    setError: (payload: string): FlatsAction => ({type:FlatsActionEnum.SET_FLATS_ERROR, payload}),
    clearFlats: (): FlatsAction => ({type:FlatsActionEnum.CLEAR_FLATS}),
    setFlats: (payload: IFlat[]): FlatsAction => ({type:FlatsActionEnum.SET_FLATS, payload}),
    setVisitedFlats: (payload: IFlat[]): FlatsAction => ({type:FlatsActionEnum.SET_VISITED_FLATS, payload}),
    fetchFlats: (query:string = '', rooms:number[] = [], priceGap: {from:number, to:number} = {from:0, to:0}) => async (dispatch:AppDispatch) => {
        try {
            dispatch(FlatsActionCreators.setIsLoading(true));
            
            const response: IFlat[] = await PostService.getFilteredFlats(query, rooms, priceGap);

            dispatch(FlatsActionCreators.setFlats(response));
            dispatch(FlatsActionCreators.setIsLoading(false));
            dispatch(FlatsActionCreators.changeIsQuest(true));
        } catch (error) {
            dispatch(FlatsActionCreators.setError('Ошибка!'))
            dispatch(FlatsActionCreators.setIsLoading(false));
        }
    },
    fetchVisitedFlats: () => async (dispatch:AppDispatch) => {
        try {

            let visited = localStorage.getItem('history');

            if (visited)
                visited = JSON.parse(visited);

            if (!visited) return;

            dispatch(FlatsActionCreators.setVisitedIsLoading(true));
            
            const result: IFlat[] = [];

            for (const flat of visited) {
                const response = await PostService.getFlat(flat);
                response && result.push(response);
            }

            dispatch(FlatsActionCreators.setVisitedFlats(result));
            dispatch(FlatsActionCreators.setVisitedIsLoading(false));
        } catch (error) {
            dispatch(FlatsActionCreators.setVisitedIsLoading(false));
        }
    }
}