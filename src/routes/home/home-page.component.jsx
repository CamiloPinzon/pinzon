import { Helmet } from "react-helmet-async";

import Greeting from "../../components/greeting/greeting.component";
import PersonalInfo from "../../components/personal-info/personal-info.component";
import SkillsInfo from "../../components/skills-info/skills-info.component";

const HomePage = () => {
	return (
		<main>
			<Helmet>
				<title>Cani Pinzón - Web Developer | Freelancer</title>
				<link rel="canonical" href="https://www.camilopinzon.tech/" />
				<meta
					name="description"
					content="Self-taught and dedicated web developer, React JS, TypeScript, JavaScript, CSS, HTML and more."
				/>
			</Helmet>
			<Greeting />
			<PersonalInfo />
			<SkillsInfo />
		</main>
	);
};

export default HomePage;
