import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setSelectedPills } from "../../store/pills/pills.actions";
import { setSelectedPill } from "../../store/pills/pills.actions";
import {
	selectSelectedCategory,
	selectSelectedPill,
} from "../../store/pills/pills.selector";
import { selectLanguage } from "../../store/language/language.selector.jsx";
import { PILLS_ACTION_TYPES } from "../../store/pills/pills.types";
import GetPills from "../../utils/pills.utils";

import { PillContainer } from "./pill-page.styles.jsx";

const PillPage = () => {
	const dispatch = useDispatch();
	const { pill } = useParams();
	const urlCategory = pill.substring(
		pill.indexOf("=") + 1,
		pill.lastIndexOf("-")
	);
	const pillId = pill.substring(pill.indexOf("=") + 1);
	const category = useSelector(selectSelectedCategory);
	const language = useSelector(selectLanguage);

	useEffect(() => {
		switch (urlCategory) {
			case "RT":
				dispatch(
					setSelectedPills(
						GetPills(PILLS_ACTION_TYPES.CATEGORY_REACT, language)
					)
				);
				break;
			case "JS":
				dispatch(
					setSelectedPills(
						GetPills(PILLS_ACTION_TYPES.CATEGORY_JAVASCRIPT, language)
					)
				);
				break;
			case "CSS":
				dispatch(
					setSelectedPills(GetPills(PILLS_ACTION_TYPES.CATEGORY_CSS, language))
				);
				break;
			default:
				break;
		}
	}, [dispatch, language, urlCategory]);

	const pillSelected = category.find((pill) => pill.id === pillId);
	dispatch(setSelectedPill(pillSelected));
	const { title = "", content = "" } = useSelector(selectSelectedPill);

	return (
		<PillContainer>
			<h2>{title}</h2>
			<div dangerouslySetInnerHTML={{ __html: content }}></div>
		</PillContainer>
	);
};

export default PillPage;
