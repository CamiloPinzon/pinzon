import { useTranslation } from "react-i18next";

import { LogosT, getLogo } from "../../utils/icons.utils";
import {
	SkillsInfoContainer,
	GroupSkillsContainer,
	SkillsIconsContainer,
	IconContainer,
} from "./skills-info.styles.jsx";

const SkillsInfo = () => {
	const { t } = useTranslation();
	return (
		<SkillsInfoContainer>
			<GroupSkillsContainer>
				<h2>{t("home.tech-stack.main-title")}</h2>
				<SkillsIconsContainer>
					<IconContainer>
						{getLogo(LogosT.JS_ICON, 80)}
						<p>JavaScript</p>
					</IconContainer>
					<IconContainer>
						{getLogo(LogosT.REACT_ICON, 80)}
						<p>React JS</p>
					</IconContainer>
					<IconContainer>
						{getLogo(LogosT.TS_ICON, 80)}
						<p>TypeScript</p>
					</IconContainer>
					<IconContainer>
						{getLogo(LogosT.SASS_LOGO, 80)}
						<p>Sass</p>
					</IconContainer>
					<IconContainer>
						{getLogo(LogosT.HTML_ICON, 80)}
						<p>HTML</p>
					</IconContainer>
					<IconContainer>
						{getLogo(LogosT.CSS_ICON, 80)}
						<p>CSS</p>
					</IconContainer>
				</SkillsIconsContainer>
			</GroupSkillsContainer>
			<GroupSkillsContainer>
				<h2>{t("home.tech-stack.commign-title")}</h2>
				<SkillsIconsContainer>
					<IconContainer>
						{getLogo(LogosT.REACT_ICON, 80)}
						<p>React Native</p>
					</IconContainer>
					<IconContainer>
						{getLogo(LogosT.ANGULAR_ICON, 80)}
						<p>Angular</p>
					</IconContainer>
					<IconContainer>
						{getLogo(LogosT.NODE_ICON, 80)}
						<p>Node JS</p>
					</IconContainer>
					<IconContainer>
						{getLogo(LogosT.EXPRESS_ICON, 80)}
						<p>Express</p>
					</IconContainer>
					<IconContainer>
						{getLogo(LogosT.MONGO_ICON, 80)}
						<p>Mongo DB</p>
					</IconContainer>
				</SkillsIconsContainer>
			</GroupSkillsContainer>
		</SkillsInfoContainer>
	);
};

export default SkillsInfo;
