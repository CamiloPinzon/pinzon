import { Routes, Route } from "react-router-dom";

import CategoryPreviewPage from "../category-preview/category-preview-page.component";
import PillPage from "../pill/pill-page.content";

const CategoryPage = () => {
	return (
		<>
			<Routes>
				<Route index element={<CategoryPreviewPage />} />
				<Route path=":pill" element={<PillPage />} />
			</Routes>
		</>
	);
};

export default CategoryPage;
