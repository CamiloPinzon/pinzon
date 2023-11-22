import { Link } from "react-router-dom";
import { LogosT, getLogo } from "../../utils/icons.utils";

import "./footer.styles.scss";

const Footer = () => {
	return (
		<div className="footer-container">
			<div className="social-container">
				<Link
					to="https://github.com/CamiloPinzon"
					target="_blank"
					rel="noreferer"
				>
					<div className="social-item">{getLogo(LogosT.GITHUB_ICON, 50)}</div>
				</Link>
				<Link
					to="https://leetcode.com/pinzonac/"
					target="_blank"
					rel="noreferer"
				>
					<div id="fix-leet" className="social-item">
						{getLogo(LogosT.LEETCODE_ICON, 50)}
					</div>
				</Link>
			</div>
			<p>© Copyright. Design And Developed By Camilo Pinz&oacute;n</p>
		</div>
	);
};

export default Footer;
