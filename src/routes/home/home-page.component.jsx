import Greeting from "../../components/greeting/greeting.component";
import PersonalInfo from "../../components/personal-info/personal-info.component";
import SkillsInfo from "../../components/skills-info/skills-info.component";

const HomePage = () => {
	return (
		<main>
			<Greeting />
			<PersonalInfo />
			<SkillsInfo />
		</main>
	);
};

export default HomePage;
