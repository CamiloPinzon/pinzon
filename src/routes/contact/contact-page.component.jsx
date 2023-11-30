import { useState } from "react";
import { useTranslation } from "react-i18next";

import SectionTitle from "../../components/section-title/section-title.component";
import FormInput from "../../components/formInput/form-input.component";
import Button from "../../components/button/button.component";
import { addContactMessage } from "../../utils/firebase/firebase.utils";

import { ContactContainer, FormContainer } from "./contact-page.styles.jsx";

const defaultFormFields = {
	name: "",
	email: "",
	message: "",
	date: new Date(),
};

const ContactPage = () => {
	const { t } = useTranslation();
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { name, email, message } = formFields;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const submitHandler = (e) => {
		e.preventDefault();
		addContactMessage(formFields);
	};
	return (
		<ContactContainer>
			<SectionTitle>{t("contact.title")}</SectionTitle>
			<FormContainer>
				<form onSubmit={submitHandler}>
					<FormInput
						label={t("contact.fullName")}
						type={`text`}
						name={`name`}
						onChange={handleChange}
						value={name}
						required
					/>
					<FormInput
						label={t("contact.email")}
						type={`email`}
						name={`email`}
						onChange={handleChange}
						value={email}
						required
					/>
					<FormInput
						label={t("contact.message")}
						type={`textarea`}
						name={`message`}
						onChange={handleChange}
						value={message}
						required
					/>
					<Button type="submit">{t("contact.submit")}</Button>
				</form>
			</FormContainer>
		</ContactContainer>
	);
};

export default ContactPage;
