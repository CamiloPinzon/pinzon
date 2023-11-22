import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectSelectedCategory } from "../../store/pills/pills.selector";

import "./category-preview-page.styles.scss";

const CategoryPreviewPage = () => {
	const category = useSelector(selectSelectedCategory);
	return (
		<div>
			{category.map(({ id, title, preview_content }) => (
				<div className="pill_preview_container" key={id}>
					<h2>{title}</h2>
					<div dangerouslySetInnerHTML={{ __html: preview_content }}></div>
					<Link to={`pill=${id}`}>More...</Link>
				</div>
			))}
		</div>
	);
};

export default CategoryPreviewPage;
