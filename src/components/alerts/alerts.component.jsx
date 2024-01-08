import { useTranslation } from "react-i18next";

import {
	AlertContainer,
	AlertMessage,
	AlertCloseButton,
} from "./alerts.styles";

const Alerts = () => {
	const { t } = useTranslation();
	return (
		<AlertContainer>
			<div></div>
			<AlertMessage>{t("alerts.successForm")}</AlertMessage>
			<AlertCloseButton>X</AlertCloseButton>
		</AlertContainer>
	);
};

export default Alerts;
