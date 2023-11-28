import { useSelector } from "react-redux/es/hooks/useSelector.js";

import { selectLanguage } from "../../store/language/language.selector.jsx";
import SectionTitle from "../../components/section-title/section-title.component";
import WorkItem from "../../components/work-item/work-item.component";
import { worksEn, worksEs } from "../../data/work";

import { WorkContainer, WorkItemsContainer } from "./work-page.styles.jsx";

const WorkPage = () => {
	const language = useSelector(selectLanguage);

	const manageContent = () => {
		switch (language) {
			case "en":
				return worksEn.map((item) => <WorkItem key={item.id} item={item} />);
			case "es":
				return worksEs.map((item) => <WorkItem key={item.id} item={item} />);
			default:
				break;
		}
	};
	return (
		<WorkContainer>
			<SectionTitle>Some of my work</SectionTitle>
			<WorkItemsContainer>{manageContent()}</WorkItemsContainer>
		</WorkContainer>
	);
};

export default WorkPage;
