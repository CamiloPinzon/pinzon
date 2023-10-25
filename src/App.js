import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import HomePage from "./routes/home/home-page.component";
import WorkPage from "./routes/work/work-page.component";
import PillsPage from "./routes/pills/pills-page.component";
import ContactPage from "./routes/contact/contact-page.component";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<HomePage />} />
				<Route path="work" element={<WorkPage />} />
				<Route path="pills" element={<PillsPage />} />
				<Route path="contact" element={<ContactPage />} />
			</Route>
		</Routes>
	);
}

export default App;
