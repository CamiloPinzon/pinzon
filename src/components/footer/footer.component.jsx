import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { LogosT, getLogo } from "../../utils/icons.utils";

import {
	FooterContainer,
	SocialContainer,
	SocialItem,
	FixLeet,
} from "./footer.styles.jsx";

const Footer = () => {
	const { t } = useTranslation();
	return (
		<FooterContainer>
			<SocialContainer>
				<Link
					to="https://github.com/CamiloPinzon"
					target="_blank"
					rel="noreferer"
					aria-label="Visit my github profile"
				>
					<SocialItem>{getLogo(LogosT.GITHUB_ICON, 50)}</SocialItem>
				</Link>
				<Link
					to="https://leetcode.com/pinzonac/"
					target="_blank"
					rel="noreferer"
					aria-label="Visit my leetcode profile"
				>
					<FixLeet>{getLogo(LogosT.LEETCODE_ICON, 50)}</FixLeet>
				</Link>
			</SocialContainer>
			<p>{t("footer.legal")}</p>
		</FooterContainer>
	);
};

export default Footer;
