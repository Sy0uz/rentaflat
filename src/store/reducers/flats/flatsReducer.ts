import { FlatsAction, FlatsActionEnum, FlatsState } from "./types";

const initialState:FlatsState = {
    flats: [],
    visitedFlats: [],
    isVisitedLoading: false,
    isQuest: false,
    isLoading: false,
    error: '',
}

export const flatsReducer = (state = initialState, action: FlatsAction):FlatsState => {
    switch (action.type) {
        case FlatsActionEnum.SET_FLATS:
            return {...state, flats: action.payload};
        case FlatsActionEnum.SET_VISITED_FLATS:
            return {...state, visitedFlats: action.payload};
        case FlatsActionEnum.SET_FLATS_IS_LOADING:
            return {...state, isLoading: action.payload};
        case FlatsActionEnum.SET_VISITED_FLATS_IS_LOADING:
            return {...state, isVisitedLoading: action.payload};
        case FlatsActionEnum.SET_FLATS_ERROR:
            return {...state, error: action.payload};
        case FlatsActionEnum.CLEAR_FLATS:
            return {...state, flats: []};
        case FlatsActionEnum.CHANGE_IS_QUEST:
            return {...state, isQuest: true};
        default:
            return state;
    }
}