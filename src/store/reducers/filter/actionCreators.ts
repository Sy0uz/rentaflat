import { FilterAction, FilterEnum } from "./types";

export const FilterActionCreators = {
    setFilterQuery: (payload: string):FilterAction => ({type:FilterEnum.CHANGE_FILTER_QUERY, payload}),
    setRooms: (payload: number[]):FilterAction => ({type:FilterEnum.CHANGE_ROOM_AMOUNT, payload}),
    setPriceGap: (payload: {from:number, to:number}) => ({type:FilterEnum.CHANGE_PRICE_GAP, payload}),
}