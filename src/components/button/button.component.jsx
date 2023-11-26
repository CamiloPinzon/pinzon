import { ButtonContainer } from "./button.styles.jsx";

const Button = ({ children, handleClick, ...otherProps }) => {
	return (
		<ButtonContainer onClick={handleClick} {...otherProps}>
			{children}
		</ButtonContainer>
	);
};

export default Button;
