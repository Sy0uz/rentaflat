import { IAgency } from "../../../types/IAgency";
import { IFlat } from "../../../types/IFlat";

export interface AgencyPageState {
    isLoading: boolean;
    error: string;
    flatsIsLoading: boolean;
    flatsError: string;
    agency: IAgency | null;
    flatsInOwn: IFlat[];
}

export enum AgencyPageEnum {
    SET_AGENCYPAGE_LOADING = "SET_AGENCYPAGE_LOADING",
    SET_AGENCYPAGE_ERROR = "SET_AGENCYPAGE_ERROR",
    SET_AGENCYPAGE_AGENCY = "SET_AGENCYPAGE_AGENCY",
    SET_AGENCYPAGE_FLATS = "SET_AGENCYPAGE_FLATS",
    SET_AGENCYPAGE_FLATS_LOADING = "SET_AGENCYPAGE_FLATS_LOADING",
    SET_AGENCYPAGE_FLATS_ERROR = "SET_AGENCYPAGE_FLATS_ERROR",
    CLEAR_AGENCYPAGE = "CLEAR_AGENCYPAGE",
}

interface SetAgencyPageLoadingAction {
    type: AgencyPageEnum.SET_AGENCYPAGE_LOADING;
    payload: boolean;
}

interface SetAgencyPageErrorAction {
    type: AgencyPageEnum.SET_AGENCYPAGE_ERROR;
    payload: string;
}

interface SetAgencyPageAgencyAction {
    type: AgencyPageEnum.SET_AGENCYPAGE_AGENCY;
    payload: IAgency;
}

interface SetAgencyPageFlatsAction {
    type: AgencyPageEnum.SET_AGENCYPAGE_FLATS;
    payload: IFlat[];
}

interface SetAgencyPageFlatsLoadingAction {
    type: AgencyPageEnum.SET_AGENCYPAGE_FLATS_LOADING;
    payload: boolean;
}

interface SetAgencyPageFlatsErrorAction {
    type: AgencyPageEnum.SET_AGENCYPAGE_FLATS_ERROR;
    payload: string;
}

interface ClearAgencyPageAction {
    type: AgencyPageEnum.CLEAR_AGENCYPAGE;
}


export type AgencyPageAction = SetAgencyPageLoadingAction
                             | SetAgencyPageErrorAction
                             | SetAgencyPageAgencyAction
                             | SetAgencyPageFlatsAction
                             | SetAgencyPageFlatsLoadingAction
                             | SetAgencyPageFlatsErrorAction
                             | ClearAgencyPageAction;