import {
	LabelContainer,
	TextAreaField,
	InputField,
} from "./form-input.styles.jsx";

const FormInput = ({ label, name, type, ...otherProps }) => {
	return (
		<>
			<LabelContainer htmlFor={name}>{label}</LabelContainer>
			{type === "textarea" ? (
				<TextAreaField
					type={type}
					name={name}
					id={name}
					{...otherProps}
					rows="5"
					cols="50"
				/>
			) : (
				<InputField type={type} name={name} id={name} {...otherProps} />
			)}
		</>
	);
};

export default FormInput;
