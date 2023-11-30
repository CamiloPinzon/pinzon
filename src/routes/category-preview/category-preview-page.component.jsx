import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
	const cat = path.category.toUpperCase();
	useEffect(() => {
		const pills = GetPills(cat, language);
		dispatch(setSelectedPills(pills));
		console.log(pills);
	}, [cat, dispatch, language]);
	const { t } = useTranslation();
	return (
		<PillsContainer>
			{category.map(({ id, title, preview_content }) => (
				<PillPreviewContainer key={id}>
					<h2>{title}</h2>
					<div dangerouslySetInnerHTML={{ __html: preview_content }}></div>
					<Link to={`pill=${id}`}>{t("pills.read-more")}...</Link>
				</PillPreviewContainer>
			))}
		</PillsContainer>
	);
};

export default CategoryPreviewPage;
