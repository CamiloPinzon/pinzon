import WorkItem from "../../components/work-item/work-item.component";
import { works } from "../../data/work";

import "./work-page.styles.scss";

const WorkPage = () => {
	return (
		<div className="work-container">
			<h1>Some of my work</h1>
			<div className="work-items-container">
				{works.map((item) => (
					<WorkItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

export default WorkPage;
