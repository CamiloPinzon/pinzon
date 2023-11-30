import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Button from "../button/button.component";
import ProfilePicSrc from "../../assets/img/profile-pic.webp";
import {
	PersonalInfoContainer,
	ProfilePic,
	BioContainer,
	BioContent,
} from "./personal-info.styles.jsx";

const PersonalInfo = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(`/contact`);
	};
	return (
		<PersonalInfoContainer role="main">
			<ProfilePic src={ProfilePicSrc} alt="profile pic" loading="lazy" />
			<BioContainer>
				<BioContent>{t("home.personal.bio")}</BioContent>
				<div>
					<Button handleClick={handleClick}>
						{t("home.personal.contact")}
					</Button>
				</div>
			</BioContainer>
		</PersonalInfoContainer>
	);
};

export default PersonalInfo;
