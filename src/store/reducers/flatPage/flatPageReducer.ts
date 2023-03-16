import { FlatAction, FlatPageEnum, FlatPageState } from "./types";

const initialState:FlatPageState = {
    isLoading: false,
    flat: null,
    error: '',
}

export const flatPageReducer = (state = initialState, action: FlatAction):FlatPageState => {
    switch (action.type) {
        case FlatPageEnum.SET_FLAT:
            return {...state, flat: action.payload, error: ''};
        case FlatPageEnum.SET_FLAT_IS_LOADING:
            return {...state, isLoading: action.payload};
        case FlatPageEnum.SET_FLAT_ERROR:
            return {...state, error: action.payload};
        default:
            return state;
    }
}