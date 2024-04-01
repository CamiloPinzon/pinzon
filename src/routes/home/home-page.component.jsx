import { Helmet } from "react-helmet-async";

import Greeting from "../../components/greeting/greeting.component";
import PersonalInfo from "../../components/personal-info/personal-info.component";
import SkillsInfo from "../../components/skills-info/skills-info.component";

const HomePage = () => {
	return (
		<main>
			<Helmet>
				<title>Camilo Pinzón - Web Developer | Freelancer</title>
				<meta
					name="title"
					content="Camilo Pinzón - Web Developer | Freelancer"
				/>
				<meta
					name="description"
					content="Self-taught and dedicated. A web developer with ability to assimilate work under pressure and great facility for teamwork, no matter if it's locally or remote. He brings his experience to find solutions for all the possible problems that can happen in all the project stages and brings calm to the customer."
				/>
			</Helmet>
			<Greeting />
			<PersonalInfo />
			<SkillsInfo />
		</main>
	);
};

export default HomePage;
