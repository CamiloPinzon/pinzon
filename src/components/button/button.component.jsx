import { useNavigate } from "react-router-dom";

import { ButtonContainer } from "./button.styles.jsx";

const Button = ({ children, route }) => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(`${route}`);
	};
	return <ButtonContainer onClick={handleClick}>{children}</ButtonContainer>;
};

export default Button;
