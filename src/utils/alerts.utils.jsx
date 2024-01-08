import { useSelector, useDispatch } from "react-redux";

import { selectIsOpen } from "../store/alerts/alerts.selector";
import { toggleAlert } from "../store/alerts/alerts.actions";

export const ToggleAlertModal = () => {
	const isAlertOpen = useSelector(selectIsOpen);
	const dispatch = useDispatch();
	dispatch(toggleAlert(!isAlertOpen));
};
