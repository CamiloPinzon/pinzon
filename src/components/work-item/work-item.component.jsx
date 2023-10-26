import { Link } from "react-router-dom";

import { LogosT, getLogo } from "../../utils/icons.utils";

import "./work-item.styles.scss";

const WorkItem = ({ item }) => {
	const { title, logos, content } = item;
	return (
		<div className="work-item">
			<h2>{title}</h2>
			<div className="work-item-content">
				<div className="work-logos-container">
					{logos.map((logo, idx) => {
						return (
							<Link to={logo.link} target="_blank" key={idx}>
								{getLogo(LogosT[logo.logo], logo.width)}
							</Link>
						);
					})}
				</div>
				<div className="work-description-container">
					<p>{content}</p>
				</div>
			</div>
		</div>
	);
};

export default WorkItem;
