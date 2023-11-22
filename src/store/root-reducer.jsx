import { combineReducers } from "redux";

import { pillsCategoriesReducer } from "./pills/pills.reducer";

export const rootReducer = combineReducers({
	pills: pillsCategoriesReducer,
});
