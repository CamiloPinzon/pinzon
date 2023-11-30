import { useTranslation } from "react-i18next";

import { GreetingContainer } from "./greeting.styles.jsx";

const Greeting = () => {
	const { t } = useTranslation();
	return (
		<GreetingContainer>
			{t("home.greeting.greet")}
			<br />
			{t("home.greeting.introduce")}
		</GreetingContainer>
	);
};

export default Greeting;
