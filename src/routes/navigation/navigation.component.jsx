import { Outlet, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux/es/hooks/useSelector.js";

import Alerts from "../../components/alerts/alerts.component.jsx";
import { selectIsOpen } from "../../store/alerts/alerts.selector.jsx";
import LanguageSelector from "../../components/language-selector/language-selector.component.jsx";
import Footer from "../../components/footer/footer.component";

import {
	NavigationContainer,
	LinkItem,
	Logo,
	LogoIcon,
} from "./navigation.styles.jsx";

const Navigation = () => {
	const { t } = useTranslation();
	const isAlertOpen = useSelector(selectIsOpen);
	return (
		<>
			{isAlertOpen && <Alerts />}
			<NavigationContainer role="menu">
				<Logo>
					<NavLink to="/" role="menuitem">
						<LogoIcon>
							<div>{`<`}</div>
							<div>{`/`}</div>
							<div>{`>`}</div>
						</LogoIcon>
						&nbsp;&nbsp;
						<span className="logo-name">camilo pinzón</span>
					</NavLink>
				</Logo>
				<div className="links-container">
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
				</div>
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
