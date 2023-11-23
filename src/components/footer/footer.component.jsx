import { Link } from "react-router-dom";
import { LogosT, getLogo } from "../../utils/icons.utils";

import {
	FooterContainer,
	SocialContainer,
	SocialItem,
	FixLeet,
} from "./footer.styles.jsx";

const Footer = () => {
	return (
		<FooterContainer>
			<SocialContainer>
				<Link
					to="https://github.com/CamiloPinzon"
					target="_blank"
					rel="noreferer"
				>
					<SocialItem>{getLogo(LogosT.GITHUB_ICON, 50)}</SocialItem>
				</Link>
				<Link
					to="https://leetcode.com/pinzonac/"
					target="_blank"
					rel="noreferer"
				>
					<FixLeet>{getLogo(LogosT.LEETCODE_ICON, 50)}</FixLeet>
				</Link>
			</SocialContainer>
			<p>© Copyright. Design And Developed By Camilo Pinz&oacute;n</p>
		</FooterContainer>
	);
};

export default Footer;
