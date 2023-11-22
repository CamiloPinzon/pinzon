import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import PillsPreview from "../../components/pills-preview/pills-preview.component";
import CategoryPage from "../category/category-page.component";
import { setCategories } from "../../store/pills/pills.actions";

import { PILLS_SECTIONS } from "../../data/pills";
import "./pills-page.styles.scss";

const PillsPage = () => {
	const dispatch = useDispatch();
	dispatch(setCategories(PILLS_SECTIONS));

	return (
		<Routes>
			<Route index element={<PillsPreview />} />
			<Route path=":category/*" element={<CategoryPage />} />
		</Routes>
	);
};

export default PillsPage;
