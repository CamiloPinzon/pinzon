import { ALERT_ACTION_TYPES } from "./alerts.types";

export const ALERTS_INITIAL_STATE = {
	message: "",
	isOpen: false,
};

export const alertsReducer = (state = ALERTS_INITIAL_STATE, action = {}) => {
	const { type, payload } = action;

	switch (type) {
		case ALERT_ACTION_TYPES.SET_ALERT_MESSAGE:
			return {
				...state,
				message: payload,
			};
		case ALERT_ACTION_TYPES.TOGGLE_ALERT:
			return {
				...state,
				isOpen: payload,
			};
		default:
			return state;
	}
};
