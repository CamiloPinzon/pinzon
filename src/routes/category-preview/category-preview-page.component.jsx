import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { selectSelectedCategory } from "../../store/pills/pills.selector";
import { selectLanguage } from "../../store/language/language.selector.jsx";
import { setSelectedPills } from "../../store/pills/pills.actions";
import GetPills from "../../utils/pills.utils";

import {
	PillsContainer,
	PillPreviewContainer,
} from "./category-preview-page.styles.jsx";

const CategoryPreviewPage = () => {
	const dispatch = useDispatch();
	const path = useParams();
	const category = useSelector(selectSelectedCategory);
	const language = useSelector(selectLanguage);
	if (category.length < 1) {
		const cat = path.category.toUpperCase();
		dispatch(setSelectedPills(GetPills(cat, language)));
	}
	return (
		<PillsContainer>
			{category.map(({ id, title, preview_content }) => (
				<PillPreviewContainer key={id}>
					<h2>{title}</h2>
					<div dangerouslySetInnerHTML={{ __html: preview_content }}></div>
					<Link to={`pill=${id}`}>Read more...</Link>
				</PillPreviewContainer>
			))}
		</PillsContainer>
	);
};

export default CategoryPreviewPage;
