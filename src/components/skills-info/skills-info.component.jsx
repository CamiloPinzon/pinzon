import { LogosT, getLogo } from "../../utils/icons.utils";

import "./skills-info.styles.scss";

const SkillsInfo = () => {
	return (
		<section className="skills-info-container">
			<div className="group-skills-container">
				<h2>Technical Stack</h2>
				<div className="skills-icons-container">
					<div className="icon-container">
						{getLogo(LogosT.JS_ICON, 80)}
						<p>JavaScript</p>
					</div>
					<div className="icon-container">
						{getLogo(LogosT.REACT_ICON, 80)}
						<p>React JS</p>
					</div>
					<div className="icon-container">
						{getLogo(LogosT.TS_ICON, 80)}
						<p>TypeScript</p>
					</div>
					<div className="icon-container">
						{getLogo(LogosT.SASS_LOGO, 80)}
						<p>Sass</p>
					</div>
					<div className="icon-container">
						{getLogo(LogosT.HTML_ICON, 80)}
						<p>HTML</p>
					</div>
					<div className="icon-container">
						{getLogo(LogosT.CSS_ICON, 80)}
						<p>CSS</p>
					</div>
				</div>
			</div>
			<div className="group-skills-container">
				<h2>Comming soon...</h2>
				<div className="skills-icons-container">
					<div className="icon-container">
						{getLogo(LogosT.REACT_ICON, 80)}
						<p>React Native</p>
					</div>
					<div className="icon-container">
						{getLogo(LogosT.ANGULAR_ICON, 80)}
						<p>Angular</p>
					</div>
					<div className="icon-container">
						{getLogo(LogosT.NODE_ICON, 80)}
						<p>Node JS</p>
					</div>
					<div className="icon-container">
						{getLogo(LogosT.EXPRESS_ICON, 80)}
						<p>Express</p>
					</div>
					<div className="icon-container">
						{getLogo(LogosT.MONGO_ICON, 80)}
						<p>Mongo DB</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SkillsInfo;
