// Imports: Dependencies
import { combineReducers } from "redux";
import {reducer as formReducer} from "redux-form";
import locationReducer from "./location";

// Imports: Reducers


// Redux: Root Reducer
const rootReducer = combineReducers({
    form: formReducer,
    locationReducer:locationReducer
});

// Exports
export default rootReducer;
