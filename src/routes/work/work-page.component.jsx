import SectionTitle from "../../components/section-title/section-title.component";
import WorkItem from "../../components/work-item/work-item.component";
import { works } from "../../data/work";

import { WorkContainer, WorkItemsContainer } from "./work-page.styles.jsx";

const WorkPage = () => {
	return (
		<WorkContainer>
			<SectionTitle>Some of my work</SectionTitle>
			<WorkItemsContainer>
				{works.map((item) => (
					<WorkItem key={item.id} item={item} />
				))}
			</WorkItemsContainer>
		</WorkContainer>
	);
};

export default WorkPage;
