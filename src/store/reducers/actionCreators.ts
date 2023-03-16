import { FlatPageActionCreators } from "./flatPage/actionCreators";
import { FlatsActionCreators } from "./flats/actionCreators";

export const allActionCreators = {
    ...FlatsActionCreators,
    ...FlatPageActionCreators,
}