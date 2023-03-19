import { FilterAction, FilterEnum, FilterState } from "./types";

const initialState:FilterState = {
    query: '',
    rooms: [],
    price: {
        from: 0,
        to: 0
    }
}

export const filterReducer = (state = initialState, action:FilterAction):FilterState => {
    switch (action.type) {
        case FilterEnum.CHANGE_ROOM_AMOUNT:
            return {...state, rooms: action.payload};
        case FilterEnum.CHANGE_FILTER_QUERY:
            return {...state, query: action.payload};
        case FilterEnum.CHANGE_PRICE_GAP:
            return {...state, price: action.payload};
        default:
            return state;
    }
}