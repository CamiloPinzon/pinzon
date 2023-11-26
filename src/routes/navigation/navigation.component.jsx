import { Outlet, NavLink } from "react-router-dom";
import Footer from "../../components/footer/footer.component";

import {
	NavigationContainer,
	LinkItem,
	Logo,
	LogoIcon,
} from "./navigation.styles.jsx";

const Navigation = () => {
	return (
		<>
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
						Home
					</LinkItem>
					<LinkItem to="work" role="menuitem">
						Work
					</LinkItem>
					<LinkItem to="pills" role="menuitem">
						Pills
					</LinkItem>
					<LinkItem to="contact" role="menuitem">
						Contact
					</LinkItem>
				</div>
			</NavigationContainer>
			<Outlet />
			<Footer />
		</>
	);
};

export default Navigation;
