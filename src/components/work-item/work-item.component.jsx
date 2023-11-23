import { Link } from "react-router-dom";

import { LogosT, getLogo } from "../../utils/icons.utils";

import {
	WorkItemContainer,
	WorkItemContent,
	WorkLogosContainer,
	WorkDescriptionContainer,
} from "./work-item.styles.jsx";

const WorkItem = ({ item }) => {
	const { title, logos, content } = item;
	return (
		<WorkItemContainer>
			<h2>{title}</h2>
			<WorkItemContent>
				<WorkLogosContainer>
					{logos.map((logo, idx) => {
						return (
							<Link to={logo.link} target="_blank" key={idx}>
								{getLogo(LogosT[logo.logo], logo.width)}
							</Link>
						);
					})}
				</WorkLogosContainer>
				<WorkDescriptionContainer>
					<p>{content}</p>
				</WorkDescriptionContainer>
			</WorkItemContent>
		</WorkItemContainer>
	);
};

export default WorkItem;
