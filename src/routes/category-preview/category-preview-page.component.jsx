import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { selectSelectedCategory } from "../../store/pills/pills.selector";
import { setSelectedPills } from "../../store/pills/pills.actions";
import getPills from "../../utils/pills.utils";

import "./category-preview-page.styles.scss";

const CategoryPreviewPage = () => {
	const dispatch = useDispatch();
	const path = useParams();
	const category = useSelector(selectSelectedCategory);
	if (category.length < 1) {
		const cat = path.category.toUpperCase();
		dispatch(setSelectedPills(getPills(cat)));
	}
	return (
		<div className="pills-container">
			{category.map(({ id, title, preview_content }) => (
				<div className="pill_preview_container" key={id}>
					<h2>{title}</h2>
					<div dangerouslySetInnerHTML={{ __html: preview_content }}></div>
					<Link to={`pill=${id}`}>Read more...</Link>
				</div>
			))}
		</div>
	);
};

export default CategoryPreviewPage;
