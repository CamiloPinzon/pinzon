import LANGUAGE_ACTION_TYPES from "./language.types";
import i18next from "../../i18n";

export const LANGUAGE_INITIAL_STATE = {
	language: i18next.language,
};

export const languageReducer = (
	state = LANGUAGE_INITIAL_STATE,
	action = {}
) => {
	const { type, payload } = action;

	switch (type) {
		case LANGUAGE_ACTION_TYPES.SET_SELECTED_LABGUAGE:
			return {
				...state,
				language: payload,
			};
		default:
			return state;
	}
};
