import { ReactComponent as SassIcon } from "../../assets/img/sass.svg";
import { ReactComponent as TSIcon } from "../../assets/img/ts.svg";
import { ReactComponent as ReactIcon } from "../../assets/img/react.svg";
import { ReactComponent as JSIcon } from "../../assets/img/javascript.svg";
import { ReactComponent as HtmlIcon } from "../../assets/img/html.svg";
import { ReactComponent as CssIcon } from "../../assets/img/css.svg";
import { ReactComponent as AngularIcon } from "../../assets/img/angular.svg";
import { ReactComponent as NodeIcon } from "../../assets/img/node.svg";
import { ReactComponent as ExpressIcon } from "../../assets/img/express.svg";
import { ReactComponent as MongoIcon } from "../../assets/img/mongo.svg";
import "./skills-info.styles.scss";

const SkillsInfo = () => {
	return (
		<section className="skills-info-container">
			<div className="group-skills-container">
				<h2>Technical Stack</h2>
				<div className="skills-icons-container">
					<div className="icon-container">
						<JSIcon />
						<p>JavaScript</p>
					</div>
					<div className="icon-container">
						<ReactIcon />
						<p>React JS</p>
					</div>
					<div className="icon-container">
						<TSIcon />
						<p>TypeScript</p>
					</div>
					<div className="icon-container">
						<SassIcon />
						<p>Sass</p>
					</div>
					<div className="icon-container">
						<HtmlIcon />
						<p>HTML</p>
					</div>
					<div className="icon-container">
						<CssIcon />
						<p>CSS</p>
					</div>
				</div>
			</div>
			<div className="group-skills-container">
				<h2>Comming soon...</h2>
				<div className="skills-icons-container">
					<div className="icon-container">
						<ReactIcon />
						<p>React Native</p>
					</div>
					<div className="icon-container">
						<AngularIcon />
						<p>Angular</p>
					</div>
					<div className="icon-container">
						<NodeIcon />
						<p>Node JS</p>
					</div>
					<div className="icon-container">
						<ExpressIcon />
						<p>Express</p>
					</div>
					<div className="icon-container">
						<MongoIcon />
						<p>Mongo DB</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SkillsInfo;
