import Greeting from "../../components/greeting/greeting.component";
import PersonalInfo from "../../components/personal-info/personal-info.component";
import SkillsInfo from "../../components/skills-info/skills-info.component";

const HomePage = () => {
	return (
		<div className="home-container">
			<Greeting />
			<PersonalInfo />
			<SkillsInfo />
		</div>
	);
};

export default HomePage;
