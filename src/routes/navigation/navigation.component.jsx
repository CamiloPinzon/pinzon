import { Outlet, NavLink } from "react-router-dom";
import Footer from "../../components/footer/footer.component";

import { NavigationContainer, LinkItem } from "./navigation.styles.jsx";

const Navigation = () => {
	return (
		<>
			<NavigationContainer role="menu">
				<NavLink to="/" role="menuitem">
					CP
				</NavLink>
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
