import SectionTitle from "../../components/section-title/section-title.component";
import WorkItem from "../../components/work-item/work-item.component";
import { works } from "../../data/work";

import "./work-page.styles.scss";

const WorkPage = () => {
	return (
		<div className="work-container">
			<SectionTitle>Some of my work</SectionTitle>
			<div className="work-items-container">
				{works.map((item) => (
					<WorkItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

export default WorkPage;
