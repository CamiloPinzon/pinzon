import { Outlet, Link } from "react-router-dom";
import Footer from "../../components/footer/footer.component";

import "./navigation.styles.scss";

const Navigation = () => {
	return (
		<>
			<div className="navigation-container" role="menu">
				<Link to="/" role="menuitem">
					<div className="link-item">CP</div>
				</Link>
				<div className="links-container">
					<Link to="/" className="link-item" role="menuitem">
						Home
					</Link>
					<Link to="work" className="link-item" role="menuitem">
						Work
					</Link>
					<Link to="pills" className="link-item" role="menuitem">
						Pills
					</Link>
					<Link to="contact" className="link-item" role="menuitem">
						Contact
					</Link>
				</div>
			</div>
			<Outlet />
			<Footer />
		</>
	);
};

export default Navigation;
