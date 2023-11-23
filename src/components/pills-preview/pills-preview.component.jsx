import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectCategories } from "../../store/pills/pills.selector";
import { setSelectedPills } from "../../store/pills/pills.actions";
import SectionTitle from "../section-title/section-title.component";
import getPills from "../../utils/pills.utils";
import { getLogo } from "../../utils/icons.utils";

import {
	PillsSectionsContainer,
	PillSection,
} from "./pills-preview.styles.jsx";

const PillsPreview = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const pills_categories = useSelector(selectCategories);

	const selectHandler = (title) => {
		dispatch(setSelectedPills(getPills(title.toUpperCase())));
		navigate(`${title.toLowerCase()}`);
	};

	return (
		<main className="pills-container">
			<SectionTitle>
				Useful tips to learn
				<br />
				and apply to your project
			</SectionTitle>
			<PillsSectionsContainer>
				{pills_categories.map(({ id, title, icon }) => (
					<PillSection key={id} onClick={() => selectHandler(title)}>
						<div className="pill_icon">{getLogo(icon, 100)}</div>
						<p className="pill_title">{title}</p>
					</PillSection>
				))}
			</PillsSectionsContainer>
		</main>
	);
};

export default PillsPreview;
