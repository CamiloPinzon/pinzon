import { Helmet, HelmetProvider } from "react-helmet-async";

import Greeting from "../../components/greeting/greeting.component";
import PersonalInfo from "../../components/personal-info/personal-info.component";
import SkillsInfo from "../../components/skills-info/skills-info.component";

const HomePage = () => {
	return (
		<main>
			<Helmet>
				<title>Camilo Pinzon - Web Developer</title>
				<link rel="canonical" href="https://www.camilopinzon.tech/" />
				<meta
					name="description"
					content="Self-taught and dedicated. A web developer with ability to assimilate work under pressure and great facility for teamwork, no matter if it's locally or remote. He brings his experience to find solutions for all the possible problems that can happen in all the project stages and brings calm to the customer."
				></meta>
			</Helmet>
			<Greeting />
			<PersonalInfo />
			<SkillsInfo />
		</main>
	);
};

export default HomePage;
