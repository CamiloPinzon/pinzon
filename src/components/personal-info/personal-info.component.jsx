import Button from "../button/button.component";
import ProfilePic from "../../assets/img/profile-pic.webp";
import "./personal-info.styles.scss";

const PersonalInfo = () => {
	return (
		<section className="personal-info-container" role="main">
			<img
				src={ProfilePic}
				alt="profile pic"
				className="profile-pic"
				loading="lazy"
			/>
			<div className="bio-container">
				<p className="bio-content">
					Self-taught and dedicated. A web developer with ability to assimilate
					work under pressure and great facility for teamwork, no matter if it’s
					locally or remote. He brings his experience to find solutions for all
					the possible problems that can happen in all the project stages and
					brings calm to the customer.
				</p>
				<div>
					<Button route="/contact">Contact me</Button>
				</div>
			</div>
		</section>
	);
};

export default PersonalInfo;
