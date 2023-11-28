import { createAction } from "../../utils/create-action.utils";
import LANGUAGE_ACTION_TYPES from "./language.types";

export const setLanguage = (language) =>
	createAction(LANGUAGE_ACTION_TYPES.SET_SELECTED_LABGUAGE, language);
