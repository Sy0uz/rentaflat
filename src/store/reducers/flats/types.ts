import { IFlat } from "../../../types/IFlat";

export interface FlatsState {
    flats: IFlat[];
    visitedFlats: IFlat[];
    isVisitedLoading: boolean;
    isQuest: boolean;
    isLoading: boolean;
    error: string;
}

export enum FlatsActionEnum {
    SET_FLATS = "SET_FLATS",
    SET_VISITED_FLATS = "SET_VISITED_FLATS",
    SET_VISITED_FLATS_IS_LOADING = "SET_VISITED_FLATS_IS_LOADING",
    SET_FLATS_IS_LOADING = "SET_FLATS_IS_LOADING",
    SET_FLATS_ERROR = "SET_FLATS_ERROR",
    CHANGE_IS_QUEST = "CHANGE_IS_QUEST",
    CLEAR_FLATS = "CLEAR_FLATS",
}

interface SetFlatsAction {
    type: FlatsActionEnum.SET_FLATS;
    payload: IFlat[];
}

interface SetVisitedFlatsAction {
    type: FlatsActionEnum.SET_VISITED_FLATS;
    payload: IFlat[];
}

interface SetFlatsIsLoadingAction {
    type: FlatsActionEnum.SET_FLATS_IS_LOADING;
    payload: boolean;
}

interface SetVisitedFlatsIsLoadingAction {
    type: FlatsActionEnum.SET_VISITED_FLATS_IS_LOADING;
    payload: boolean;
}

interface SetFlatsErrorAction {
    type: FlatsActionEnum.SET_FLATS_ERROR;
    payload: string;
}

interface ClearFlatsAction {
    type: FlatsActionEnum.CLEAR_FLATS;
}

interface ChangeIsQuestAction {
    type: FlatsActionEnum.CHANGE_IS_QUEST;
    payload: boolean;
}

export type FlatsAction = SetFlatsAction
                        | SetVisitedFlatsAction
                        | SetVisitedFlatsIsLoadingAction
                        | SetFlatsIsLoadingAction
                        | SetFlatsErrorAction
                        | ClearFlatsAction
                        | ChangeIsQuestAction;