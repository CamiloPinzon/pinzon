import { PILLS_ACTION_TYPES } from "./pills.types";

export const PILLS_INITAL_STATE = {
	categories: [],
	selected_category: [],
	selected_pill: {},
};

export const pillsCategoriesReducer = (
	state = PILLS_INITAL_STATE,
	action = {}
) => {
	const { type, payload } = action;

	switch (type) {
		case PILLS_ACTION_TYPES.SET_PILLS_CATEGORIES:
			return {
				...state,
				categories: payload,
			};
		case PILLS_ACTION_TYPES.SET_SELECTED_CATEGORY:
			return {
				...state,
				selected_category: payload,
			};
		case PILLS_ACTION_TYPES.SET_SELECTED_PILL:
			return {
				...state,
				selected_pill: payload,
			};
		default:
			return state;
	}
};
