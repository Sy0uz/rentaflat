import { IFlat } from "../../../types/IFlat";

export interface FlatsState {
    flats: IFlat[];
    isLoading: boolean;
    error: string;
}

export enum FlatsActionEnum {
    SET_FLATS = "SET_FLATS",
    SET_FLATS_IS_LOADING = "SET_FLATS_IS_LOADING",
    SET_FLATS_ERROR = "SET_FLATS_ERROR",
    CLEAR_FLATS = "CLEAR_FLATS",
}

interface SetFlatsAction {
    type: FlatsActionEnum.SET_FLATS;
    payload: IFlat[];
}

interface SetFlatsIsLoadingAction {
    type: FlatsActionEnum.SET_FLATS_IS_LOADING;
    payload: boolean;
}

interface SetFlatsErrorAction {
    type: FlatsActionEnum.SET_FLATS_ERROR;
    payload: string;
}

interface ClearFlatsAction {
    type: FlatsActionEnum.CLEAR_FLATS;
}

export type FlatsAction = SetFlatsAction
                        | SetFlatsIsLoadingAction
                        | SetFlatsErrorAction
                        | ClearFlatsAction;