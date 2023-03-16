import { IFlat } from "../../../types/IFlat";

export interface FlatPageState {
    flat: IFlat | null;
    isLoading: boolean;
    error: string;
}

export enum FlatPageEnum {
    SET_FLAT = "SET_FLAT",
    SET_FLAT_IS_LOADING = "SET_FLAT_IS_LOADING",
    SET_FLAT_ERROR = "SET_FLAT_ERROR",
}

interface SetFlatAction {
    type: FlatPageEnum.SET_FLAT;
    payload: IFlat | null;
}

interface SetFlatIsLoadingAction {
    type: FlatPageEnum.SET_FLAT_IS_LOADING;
    payload: boolean;
}

interface SetFlatErrorAction {
    type: FlatPageEnum.SET_FLAT_ERROR;
    payload: string;
}

export type FlatAction = SetFlatAction
                        | SetFlatIsLoadingAction
                        | SetFlatErrorAction;