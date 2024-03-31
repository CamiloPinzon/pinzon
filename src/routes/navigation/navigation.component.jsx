import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux/es/hooks/useSelector.js";

import Alerts from "../../components/alerts/alerts.component.jsx";
import { selectIsOpen } from "../../store/alerts/alerts.selector.jsx";
import LanguageSelector from "../../components/language-selector/language-selector.component.jsx";
import Footer from "../../components/footer/footer.component";

/*import { FaHome } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { CgPill } from "react-icons/cg";
import { GrContact } from "react-icons/gr";*/

import {
	NavigationContainer,
	LinksContainer,
	LinkItem,
} from "./navigation.styles.jsx";

const Navigation = () => {
	const { t } = useTranslation();
	const isAlertOpen = useSelector(selectIsOpen);
	return (
		<>
			{isAlertOpen && <Alerts />}
			<NavigationContainer role="menu">
				<LinksContainer>
					<LinkItem to="/" role="menuitem">
						{t("nav.home")}
					</LinkItem>
					<LinkItem to="work" role="menuitem">
						{t("nav.work")}
					</LinkItem>
					<LinkItem to="pills" role="menuitem">
						{t("nav.pills")}
					</LinkItem>
					<LinkItem to="contact" role="menuitem">
						{t("nav.contact")}
					</LinkItem>
				</LinksContainer>
				<div className="language-selector-container">
					<LanguageSelector />
				</div>
			</NavigationContainer>
			<Outlet />
			<Footer />
		</>
	);
};

export default Navigation;
