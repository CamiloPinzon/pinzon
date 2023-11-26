import SectionTitle from "../../components/section-title/section-title.component";
import FormInput from "../../components/formInput/form-input.component";
import Button from "../../components/button/button.component";

import "./contact-page.styles.scss";

const ContactPage = () => {
	return (
		<div className="contact-container">
			<SectionTitle>Let's work together, contact me!</SectionTitle>
			<div className="form-container">
				<form>
					<FormInput label={`Full name`} type={`text`} name={`name`} required />
					<FormInput label={`Email`} type={`email`} name={`email`} required />
					<FormInput
						label={`Message`}
						type={`textarea`}
						name={`message`}
						required
					/>
					<Button type="submit">Submit</Button>
				</form>
			</div>
		</div>
	);
};

export default ContactPage;
