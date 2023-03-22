import { AppDispatch } from "../..";
import { PostService } from "../../../API/PostService";
import { IAgency } from "../../../types/IAgency";
import { IFlat } from "../../../types/IFlat";
import { AgencyPageAction, AgencyPageEnum } from "./types";

export const AgencyPageActionCreators = {
    clearAgency: ():AgencyPageAction => ({type:AgencyPageEnum.CLEAR_AGENCYPAGE}),
    setAgency: (payload: IAgency): AgencyPageAction => ({type:AgencyPageEnum.SET_AGENCYPAGE_AGENCY, payload}),
    setAgencyPageIsLoading: (payload: boolean):AgencyPageAction => ({type:AgencyPageEnum.SET_AGENCYPAGE_LOADING, payload}),
    setAgencyPageError: (payload: string):AgencyPageAction => ({type: AgencyPageEnum.SET_AGENCYPAGE_ERROR, payload}),
    setAgencyPageFlats: (payload: IFlat[]):AgencyPageAction => ({type: AgencyPageEnum.SET_AGENCYPAGE_FLATS, payload}),
    setAgencyPageFlatsLoading: (payload: boolean):AgencyPageAction => ({type:AgencyPageEnum.SET_AGENCYPAGE_FLATS_LOADING, payload}),
    setAgencyPageFlatsError: (payload: string):AgencyPageAction => ({type: AgencyPageEnum.SET_AGENCYPAGE_FLATS_ERROR, payload}),
    fetchAgency: (id: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AgencyPageActionCreators.setAgencyPageIsLoading(true));

            const response = await PostService.getAgency(id);
            
            if (response)
                dispatch(AgencyPageActionCreators.setAgency(response))
            else
                dispatch(AgencyPageActionCreators.setAgencyPageError('Агенства с таким id не существует!'));

            dispatch(AgencyPageActionCreators.setAgencyPageIsLoading(false));

        } catch (error) {
            dispatch(AgencyPageActionCreators.setAgencyPageError("Ошибка!!!"));
            dispatch(AgencyPageActionCreators.setAgencyPageIsLoading(false));
        }
    },
    fetchAgencyFlats: (flatsInOwn: number[]) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AgencyPageActionCreators.setAgencyPageFlatsLoading(true));

            const result: IFlat[] = [];

            for (const flat of flatsInOwn) {
                const response = await PostService.getFlat(String(flat));
                response && result.push(response);
            }

            dispatch(AgencyPageActionCreators.setAgencyPageFlats(result));
            dispatch(AgencyPageActionCreators.setAgencyPageFlatsLoading(false));
        } catch (error) {
            dispatch(AgencyPageActionCreators.setAgencyPageFlatsError("Ошибка!!!"));
            dispatch(AgencyPageActionCreators.setAgencyPageFlatsLoading(false));
        }
    }
}