import { legacy_createStore as createStore, combineReducers } from "redux";
import { TYPE_REDUCER } from "./reducers/typeCategory";
import { FILTER_REDUCER } from "./reducers/filter";

const rootReducer = combineReducers({
    typeReducer: TYPE_REDUCER,
    filterReducer: FILTER_REDUCER,

});
const Store = createStore(rootReducer);

export default Store;
