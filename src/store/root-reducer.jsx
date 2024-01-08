import { combineReducers } from "redux";

import { pillsCategoriesReducer } from "./pills/pills.reducer";
import { languageReducer } from "./language/language.reducer";
import { alertsReducer } from "./alerts/alerts.reducer";

export const rootReducer = combineReducers({
	pills: pillsCategoriesReducer,
	language: languageReducer,
	alerts: alertsReducer,
});
