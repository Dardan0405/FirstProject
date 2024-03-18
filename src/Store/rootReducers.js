import { combineReducers } from "redux";
import { languageReducer } from "./Reducers/languageReducres";
const rootReducer = combineReducers({
language: languageReducer,    
});
export default rootReducer