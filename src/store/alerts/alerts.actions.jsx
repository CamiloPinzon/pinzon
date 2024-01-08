import { createAction } from "../../utils/create-action.utils";
import { ALERT_ACTION_TYPES } from "./alerts.types";

export const setAlertMessage = (message) =>
	createAction(ALERT_ACTION_TYPES.SET_ALERT_MESSAGE, message);

export const toggleAlert = (isOpen) =>
	createAction(ALERT_ACTION_TYPES.TOGGLE_ALERT, isOpen);
