import "./form-input.styles.scss";

const FormInput = ({ label, name, type, ...otherProps }) => {
	return (
		<div className="goup">
			<label htmlFor={name}>{label}</label>
			{type === "textarea" ? (
				<textarea
					type={type}
					name={name}
					id={name}
					{...otherProps}
					rows="5"
					cols="50"
				/>
			) : (
				<input type={type} name={name} id={name} {...otherProps} />
			)}
		</div>
	);
};

export default FormInput;
