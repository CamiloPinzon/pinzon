import Button from "../button/button.component";
import ProfilePicSrc from "../../assets/img/profile-pic.webp";
import {
	PersonalInfoContainer,
	ProfilePic,
	BioContainer,
	BioContent,
} from "./personal-info.styles.jsx";

const PersonalInfo = () => {
	return (
		<PersonalInfoContainer role="main">
			<ProfilePic src={ProfilePicSrc} alt="profile pic" loading="lazy" />
			<BioContainer>
				<BioContent>
					Self-taught and dedicated. A web developer with ability to assimilate
					work under pressure and great facility for teamwork, no matter if it's
					locally or remote. He brings his experience to find solutions for all
					the possible problems that can happen in all the project stages and
					brings calm to the customer.
				</BioContent>
				<div>
					<Button route="/contact">Contact me</Button>
				</div>
			</BioContainer>
		</PersonalInfoContainer>
	);
};

export default PersonalInfo;
