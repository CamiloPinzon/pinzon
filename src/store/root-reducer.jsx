import { combineReducers } from "redux";

import { pillsCategoriesReducer } from "./pills/pills.reducer";
import { languageReducer } from "./language/language.reducer";

export const rootReducer = combineReducers({
	pills: pillsCategoriesReducer,
	language: languageReducer,
});
