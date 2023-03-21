import { AgencyPageActionCreators } from "./agencyPage/actionCreators";
import { FilterActionCreators } from "./filter/actionCreators";
import { FlatPageActionCreators } from "./flatPage/actionCreators";
import { FlatsActionCreators } from "./flats/actionCreators";

export const allActionCreators = {
    ...FlatsActionCreators,
    ...FlatPageActionCreators,
    ...FilterActionCreators,
    ...AgencyPageActionCreators,
}