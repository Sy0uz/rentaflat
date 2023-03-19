export interface FilterState {
    query: string;
    rooms: number[];
    price: {
        from: number;
        to: number;
    }
}

export enum FilterEnum {
    CHANGE_FILTER_QUERY = "CHANGE_FILTER_QUERY",
    CHANGE_ROOM_AMOUNT = "CHANGE_ROOM_AMOUNT",
    CHANGE_PRICE_GAP = "CHANGE_PRICE_GAP",
}

interface ChangeFilterQueryAction {
    type: FilterEnum.CHANGE_FILTER_QUERY;
    payload: string;
}

interface ChangeRoomAmountAction {
    type: FilterEnum.CHANGE_ROOM_AMOUNT;
    payload: number[];
}

interface ChangePriceGapAction {
    type: FilterEnum.CHANGE_PRICE_GAP;
    payload: {
        from: number;
        to: number;
    }
}

export type FilterAction = ChangeFilterQueryAction
                         | ChangeRoomAmountAction
                         | ChangePriceGapAction;