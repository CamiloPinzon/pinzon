import { createAction } from "../../utils/create-action.utils";
import { PILLS_ACTION_TYPES } from "./pills.types";

export const setCategories = (categories) =>
	createAction(PILLS_ACTION_TYPES.SET_PILLS_CATEGORIES, categories);

export const setSelectedPills = (category) =>
	createAction(PILLS_ACTION_TYPES.SET_SELECTED_CATEGORY, category);

export const setSelectedPill = (pill) =>
	createAction(PILLS_ACTION_TYPES.SET_SELECTED_PILL, pill);
