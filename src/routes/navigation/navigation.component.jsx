import { Outlet, NavLink } from "react-router-dom";
import Footer from "../../components/footer/footer.component";

import "./navigation.styles.scss";

const Navigation = () => {
	return (
		<>
			<div className="navigation-container" role="menu">
				<NavLink to="/" role="menuitem">
					<div className="link-item">CP</div>
				</NavLink>
				<div className="links-container">
					<NavLink to="/" className="link-item" role="menuitem">
						Home
					</NavLink>
					<NavLink to="work" className="link-item" role="menuitem">
						Work
					</NavLink>
					<NavLink to="pills" className="link-item" role="menuitem">
						Pills
					</NavLink>
					<NavLink to="contact" className="link-item" role="menuitem">
						Contact
					</NavLink>
				</div>
			</div>
			<Outlet />
			<Footer />
		</>
	);
};

export default Navigation;
