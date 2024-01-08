import { useSelector, useDispatch } from "react-redux";
import { selectIsOpen } from "../../store/alerts/alerts.selector";
import { toggleAlert } from "../../store/alerts/alerts.actions";
import { useTranslation } from "react-i18next";

import {
	AlertContainer,
	AlertMessage,
	AlertCloseButton,
} from "./alerts.styles";

const Alerts = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const isAlertOpen = useSelector(selectIsOpen);
	const handleCloseAlert = () => {
		dispatch(toggleAlert(!isAlertOpen));
	};
	return (
		<AlertContainer>
			<div></div>
			<AlertMessage>{t("alerts.successForm")}</AlertMessage>
			<AlertCloseButton onClick={handleCloseAlert}>X</AlertCloseButton>
		</AlertContainer>
	);
};

export default Alerts;
