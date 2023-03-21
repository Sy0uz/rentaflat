import { AgencyPageAction, AgencyPageEnum, AgencyPageState } from "./types";

const initialState:AgencyPageState = {
    isLoading: false,
    flatsIsLoading: false,
    error: '',
    flatsError: '',
    flatsInOwn: [],
    agency: null
}

export const agencyReducer = (state = initialState, action:AgencyPageAction) => {
    switch (action.type) {
        case AgencyPageEnum.SET_AGENCYPAGE_LOADING:
            return { ...state, isLoading: action.payload };
        case AgencyPageEnum.SET_AGENCYPAGE_ERROR:
            return { ...state, error: action.payload };
        case AgencyPageEnum.SET_AGENCYPAGE_AGENCY:
            return { ...state, agency: action.payload };
        case AgencyPageEnum.SET_AGENCYPAGE_FLATS:
            return { ...state, flatsInOwn: action.payload };
        case AgencyPageEnum.SET_AGENCYPAGE_FLATS_LOADING:
            return { ...state, flatsIsLoading: action.payload };
        case AgencyPageEnum.SET_AGENCYPAGE_FLATS_ERROR:
            return { ...state, flatsError: action.payload };
        case AgencyPageEnum.CLEAR_AGENCYPAGE:
            return { isLoading: false, flatsIsLoading: false, error: '', flatsError: '', flatsInOwn: [], agency: null }
        default:
            return state;
    }
}